const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'monitor.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'monitor',
            },
        },
    }
    _apiList = {
        'CreateAlarmPolicy': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2022-01-01',
                    'Action': 'CreateAlarmPolicy',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'PolicyName': 'String',
                'ProductType': 'Int',
                'PolicyType': 'Int',
                'ResourceBindType': 'Int',
                'ProjectId': 'Int',
                'InstanceIds': 'Array',
                'TriggerRules': 'Array',
                'UserNotice': 'Array',
                'URLNotice': 'Array',
            }
        },
        'DeleteAlarmPolicy': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2022-01-01',
                    'Action': 'DeleteAlarmPolicy',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'PolicyIds': 'Array',
            }
        },
    }
}