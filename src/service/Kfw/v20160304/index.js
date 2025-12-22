const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'kfw.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'kfw',
            },
        },
    }
    _apiList = {
        'DescribeCfwAv': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeCfwAv',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
            }
        },
        'DeleteBatchCfwAddrbook': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DeleteBatchCfwAddrbook',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'AddrbookIds': 'Array',
                'CfwInstanceId': 'String',
            }
        },
    }
}