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
        'GetMonthBill': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2018-06-01',
                    'Action': 'GetMonthBill',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'BillStartMonth': 'String',
                'BillEndMonth': 'String',
            }
        },
        'GetPostpayDetailBill': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2018-06-01',
                    'Action': 'GetPostpayDetailBill',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'BillStartMonth': 'String',
                'BillEndMonth': 'String',
                'ProductCode': 'String',
                'ProjectId': 'String',
            }
        },
        'GetProductCode': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2018-06-01',
                    'Action': 'GetProductCode',
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