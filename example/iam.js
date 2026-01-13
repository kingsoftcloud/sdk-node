const kscSdk = require('ksyun-sdk-node')

const IamClient = kscSdk.Iam.v20151101
const clientConfig = {
    // 认证信息
    credential: {
        secretId: "KSYUN_SECRET_ID_HERE",
        secretKey: "KSYUN_SECRET_KEY_HERE",
    },
    // 产品地域
    region: "cn-beijing-6",
    // 可选配置实例
    httpProfile: {
        method: 'POST',
        timeout: 60, // 请求超时时间秒
        protocol: '',
        endpoint: 'iam.api.ksyun.com',
    },
}
let client = new IamClient(clientConfig)

/**
 * client.request 参数
 * @param {string} apiAction 接口名
 * @param {object} data 参数
 */

let apiAction = 'ListUsers'
let data = {
    "MaxItems": 100
}

client.request(apiAction, data)
    .then(res => res.json())
    .then(data => {
        console.log(JSON.stringify(data))
    })
    .catch(err => {
        console.log(err)
    })