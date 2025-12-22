const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'trade.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'trade',
            },
        },
    }
    _apiList = {
        'QueryInstances': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2025-08-28',
                    'Action': 'QueryInstances',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'associatedUserId': 'Int',
                'instanceIds': 'Array',
                'status': 'Int',
                'productGroup': 'Int',
                'renewStrategy': 'Int',
                'billingBeginTimeFrom': 'String',
                'billingBeginTimeTo': 'String',
                'billingEndTimeFrom': 'String',
                'billingEndTimeTo': 'String',
                'serviceBeginTimeFrom': 'String',
                'serviceBeginTimeTo': 'String',
                'page': 'Int',
                'size': 'Int',
            }
        },
    }
}