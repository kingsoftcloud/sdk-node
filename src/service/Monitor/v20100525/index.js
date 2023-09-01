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
        'GetMetricStatistics': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2010-05-25',
                    'Action': 'GetMetricStatistics',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'Namespace': 'String',
                'InstanceID': 'String',
                'MetricName': 'String',
                'StartTime': 'String',
                'EndTime': 'String',
                'Aggregate': 'String',
                'Period': 'Int',
            }
        },
        'ListMetrics': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2010-05-25',
                    'Action': 'ListMetrics',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'Namespace': 'String',
                'InstanceID': 'String',
                'MetricName': 'String',
                'PageIndex': 'Int',
                'PageSize': 'Int',
            }
        },
    }
}