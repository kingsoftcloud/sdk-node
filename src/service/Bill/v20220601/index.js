const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'bill.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'bill',
            },
        },
    }
    _apiList = {
        'GetMonthConsume': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2022-06-01',
                    'Action': 'GetMonthConsume',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'BillMonth': 'String',
            }
        },
        'GetPostpayDetailConsume': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2022-06-01',
                    'Action': 'GetPostpayDetailConsume',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'BillMonth': 'String',
                'ProductCode': 'String',
                'ProjectId': 'String',
                'PageNo': 'Int',
                'PageSize': 'Int',
            }
        },
    }
}