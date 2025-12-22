const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'bill-union.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'bill-union',
            },
        },
    }
    _apiList = {
        'QueryItemBills': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2025-08-01',
                    'Action': 'QueryItemBills',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'CustomerBillMonth': 'Int',
                'ProductGroupCode': 'String',
                'PayType': 'Int',
                'InstanceId': 'String',
                'SubAccountId': 'Int',
                'Size': 'Int',
                'LastSortValue': 'String',
            }
        },
        'QueryProductTypes': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2025-08-01',
                    'Action': 'QueryProductTypes',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ProductGroupCode': 'String',
            }
        },
    }
}