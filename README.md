# 简介

欢迎使用金山云开发者工具套件（SDK）。为方便 NODEJS 开发者调试和接入金山云产品 API，这里向您介绍适用于 NODEJS 的金山云开发工具包，并提供首次使用开发工具包的简单示例。让您快速获取金山云 NODEJS SDK 并开始调用。

# 依赖环境

1. NODEJS 6.0.0 版本及以上
2. 从金山云控制台 开通相应产品
3. 获取 secretId、secretKey。

# 获取安装

安装 NODEJS SDK 前，先获取安全凭证。在第一次使用云 API 之前，用户首先需要在金山云控制台上申请安全凭证，安全凭证包括 secretId 和 secretKey， secretId 是用于标识 API 调用者的身份，secretKey 是用于加密签名字符串和服务器端验证签名字符串的密钥。secretKey 必须严格保管，避免泄露。

## 通过 Npm 安装

通过 npm 获取安装是使用 NODEJS SDK 的推荐方法，npm 是 NODEJS 的包管理工具。关于 npm 详细可参考[ npm 官网](https://www.npmjs.com/) 。

1. 执行以下安装命令：
   > npm install ksc-sdk-node --save
2. 在您的代码中引用对应模块代码，可参考示例。

## 通过源码包安装

1. 前往 [Github 仓库](https://github.com/KscSDK/ksc-sdk-node)下载源码压缩包。
2. 解压源码包到您项目合适的位置。
3. 在您的代码中引用对应模块代码，可参考示例。

# 示例

```js
const kscSdk = require('ksc-sdk-node')

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
        console.log(JSON.stringify(data))
    })
    .catch(err => {
        console.log(err)
    })
```

# 更多示例
参见金山云控制台-API Explorer-对应服务-SDK示例