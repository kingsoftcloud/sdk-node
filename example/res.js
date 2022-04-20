const kscSdk = require('../src/index.js')

const Client = kscSdk.Resourcemanager.v20210320
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
        method: '', // 请求方法 get 或者 post
        timeout: 60, // 请求超时时间秒
        protocol: 'http://', // 协议 http:// 或者 https://
        endpoint: '' // 接入点域名 如 iam.api.ksyun.com
    },
}
let client = new Client(clientConfig)

/**
 * client.request 参数
 * @param {string} apiAction 接口名
 * @param {object} data 参数
 */

let apiAction = 'ListFolders'
let data = {
}

client.request(apiAction, data)
    // .then(res => {
    //     console.log(res)
    //     return res
    // })
    .then(res => res.json())
    .then(data => {
        console.log(JSON.stringify(data))
    })
    .catch(err => {
        console.log(err)
    })