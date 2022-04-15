const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'https://',
        'endpoint': 'bill-union.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'bill_union',
            },
        },
    }
    _apiList = {
        'DescribeCostBill': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2021-12-09',
                    'Action': 'DescribeCostBill',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
            }
        },
    }
}