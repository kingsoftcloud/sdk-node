const crypto = require("crypto-js")
const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc.js')

dayjs.extend(utc)

const HEADERS_TO_IGNORE = {
    'cache-control'       :  true,
    'content-type'        :  true,
    'content-length'      :  true,
    'expect'              :  true,
    'max-forwards'        :  true,
    'pragma'              :  true,
    'range'               :  true,
    'te'                  :  true,
    'if-match'            :  true,
    'if-none-match'       :  true,
    'if-modified-since'   :  true,
    'if-unmodified-since' :  true,
    'if-range'            :  true,
    'accept'              :  true,
    'authorization'       :  true,
    'proxy-authorization' :  true,
    'from'                :  true,
    'referer'             :  true,
    'user-agent'          :  true
}

function getSignatureKey(key, dateStamp, regionName, serviceName) {
    var kDate = crypto.HmacSHA256(dateStamp, "AWS4" + key);
    var kRegion = crypto.HmacSHA256(regionName, kDate);
    var kService = crypto.HmacSHA256(serviceName, kRegion);
    var kSigning = crypto.HmacSHA256("aws4_request", kService);
    return kSigning;
}

/**
 * 编码
 * @param {*} str 
 * @returns 
 */
function encodeRfc3986Full(str) {
    // This function assumes the string has already been percent encoded
    function encodeRfc3986(urlEncodedString) {
        return urlEncodedString.replace(/[!'()*]/g, function (c) {
            return '%' + c.charCodeAt(0).toString(16).toUpperCase()
        })
    }
    return encodeRfc3986(encodeURIComponent(str))
}

/**
 * 
 * @param {*} path 
 * @returns 
 */
function createCanonicalizedPath(path) {
    return encodeRfc3986Full(path).replace(/%2F/g, '/')
}

function getCanonicalHeaders(headers) {
    function trimAll(header) {
        return header.toString().trim().replace(/\s+/g, ' ')
    }
    return Object.keys(headers)
        .filter(function (key) { return HEADERS_TO_IGNORE[key.toLowerCase()] == null })
        .sort(function (a, b) { return a.toLowerCase() < b.toLowerCase() ? -1 : 1 })
        .map(function (key) { return key.toLowerCase() + ':' + trimAll(headers[key]) })
        .join('\n') + '\n'
}

function getSignedHeaders(headers) {
    return Object.keys(headers)
        .map(function (key) { return key.toLowerCase() })
        .filter(function (key) { return HEADERS_TO_IGNORE[key] == null })
        .sort()
        .join(';')
}


function getCanonicalizedQuery(query) {
    if (!query) {
        return ''
    }
    delete query['X-Amz-Signature'] // php项目里有这句
    let res = [];
    let sortKeys = Object.keys(query).sort()
    sortKeys.forEach(key => {
        if (!Array.isArray(query[key])) {
            res.push(encodeRfc3986Full(key) + '=' + encodeRfc3986Full(query[key]))
        } else {
            query[key].map(encodeRfc3986Full).sort().forEach(val => {
                res.push(encodeRfc3986Full(key) + '=' + encodeRfc3986Full(val))
            })
        }
    })
    return res.join('&')
}

// 签名步骤摘要
// 要创建已签名的请求，请完成以下操作：

/**
 * 获取包含签名的头，含之前的头
 * AWS Version 4
 * https://docs.aws.amazon.com/zh_cn/general/latest/gr/sigv4_signing.html
 * @param {string} path
 * @param {string} query
 */
function getSignatureHeaders({
    path, query, body, headers, host, method, region, service, secret_key, access_key
}) {

    let now = dayjs().utc()
    let amzdate = now.format(`YYYYMMDDTHHmmssZ`)
    let datestamp = now.format('YYYYMMDD')

    // 任务 1：针对签名版本 4 创建规范请求
    // 将请求的内容（主体、操作、标头等）组织为标准（规范）格式。规范请求是用于创建待签字符串的输入之一。

    let canonical_uri = createCanonicalizedPath(path)
    let canonical_querystring = getCanonicalizedQuery(query)

    let allHeaders = {
        ...headers,
        host,
        'x-amz-date': amzdate
    }
    let canonical_headers = getCanonicalHeaders(allHeaders)
    let signed_headers = getSignedHeaders(allHeaders)

    let payload_hash = headers['X-Amz-Content-Sha256'] || headers['x-amz-content-sha256'] ||
    crypto.SHA256(body || '').toString()

    let canonical_request = method + '\n' + canonical_uri + '\n' + canonical_querystring + '\n' + canonical_headers + '\n' + signed_headers + '\n' + payload_hash


    // 任务 2：创建签名版本 4 的待签字符串
    // 使用规范请求和额外信息（例如算法、请求日期、凭证范围和规范请求的摘要（哈希））创建待签字符串。
    let algorithm = 'AWS4-HMAC-SHA256'
    let credential_scope = datestamp + '/' + region + '/' + service + '/' + 'aws4_request'
    let string_to_sign = algorithm + '\n' + amzdate + '\n' + credential_scope + '\n' + crypto.SHA256(canonical_request).toString()

    // 任务 3：为AWS签名版本 4 计算签名
    // 使用AWS秘密访问密钥作为初始哈希操作的密钥，对请求日期、区域和服务执行一系列加密哈希操作（HMAC 操作），从而派生签名密钥。在派生签名密钥后，通过对待签字符串执行加密哈希操作来计算签名。使用派生的签名密钥作为此操作的哈希密钥。
    let signing_key = getSignatureKey(secret_key, datestamp, region, service);
    let signature = crypto.HmacSHA256(string_to_sign, signing_key).toString();

    // 任务 4：将签名添加到 HTTP 请求
    // 在计算签名后，将其添加到请求的 HTTP 标头或查询字符串中。
    let authorization_header = algorithm + ' ' + 'Credential=' + access_key + '/' + credential_scope + ', ' + 'SignedHeaders=' + signed_headers + ', ' + 'Signature=' + signature

    let res = {
        ...headers
    }
    res['x-amz-date'] = amzdate
    res['Authorization'] = authorization_header

    return res

}

module.exports = {
    getCanonicalizedQuery,
    getSignatureHeaders
}