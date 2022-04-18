const nodeFetch = require('node-fetch')
const AbortController = require('abort-controller')
// const HttpsProxyAgent = require('https-proxy-agent')


let proxyConfig = {}

// if (process.env.isKscSdkTest) {
    // 本地代理
    // proxyConfig = {
    //     agent: new HttpsProxyAgent('http://localhost:9090')
    // }
// }

module.exports = function (url, options) {
    const controller = new AbortController();
    if (options.timeout) {
        setTimeout(() => {
            controller.abort();
        }, options.timeout);
    }

    return nodeFetch(url, {
        signal: controller.signal,
        ...proxyConfig,
        ...options
    })
    .catch(err => {
        if (err.type == 'aborted') {
            return new Error('timeout')
        } else {
            throw err
        }
    })
}