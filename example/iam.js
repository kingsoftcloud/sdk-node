const kscSdk = require('../src/index.js')

const Client = kscSdk.Iam.v20151101
const clientConfig = {
    // 认证信息
    credential: {
        secretId: '',
        secretKey: '',
    },
    // 产品地域
    region: "cn-beijing-6",
    // 可选配置实例
    httpProfile: {
        method: 'POST', // 请求方法 GET 或者 POST
        timeout: 60, // 请求超时时间秒
        protocol: '', // 协议 http:// 或者 https://
        endpoint: '' // 接入点域名 如 iam.api.ksyun.com
    },
}
let client = new Client(clientConfig)

/**
 * client.request 参数
 * @param {string} apiAction 接口名
 * @param {object} data 参数
 */

let apiAction = 'GetUser'
let data = {
    "UserName": "test14"
}

client.request(apiAction, data)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })