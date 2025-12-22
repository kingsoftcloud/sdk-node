const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'aicp.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'aicp',
            },
        },
    }
    _apiList = {
        'CreateTrainJob': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2025-12-12',
                    'Action': 'CreateTrainJob',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'TrainJobName': 'String',
                'Description': 'String',
                'ResourcePoolId': 'String',
                'Priority': 'String',
                'QueueName': 'String',
                'Framework': 'String',
                'AccessType': 'String',
                'SelfHealing': 'Boolean',
                'MaxRuntimeHour': 'Int',
                'JobRunOnCPU': 'Boolean',
                'SupportTensorboard': 'Boolean',
                'StorageConfigs': 'Array',
                'Roles': 'Array',
            }
        },
        'DescribeTrainJobs': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2025-12-12',
                    'Action': 'DescribeTrainJobs',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'TrainJobId': 'Filter',
                'Filter': 'Filter',
                'PageSize': 'Int',
                'Page': 'Int',
                'TrainJobName': 'String',
            }
        },
    }
}