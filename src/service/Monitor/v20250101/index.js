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
        'DescribeAlertingResources': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2025-01-01',
                    'Action': 'DescribeAlertingResources',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'Namespace': 'String',
                'StartTime': 'Int',
                'EndTime': 'Int',
            }
        },
        'DescribeSystemEventAttributes': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2025-01-01',
                    'Action': 'DescribeSystemEventAttributes',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'StartTime': 'Int',
                'EndTime': 'Int',
                'Namespace': 'String',
                'EventType': 'String',
                'EventName': 'String',
                'Level': 'String',
                'Status': 'String',
                'SearchKeywords': 'String',
                'PageIndex': 'Int',
                'PageSize': 'Int',
            }
        },
    }
}