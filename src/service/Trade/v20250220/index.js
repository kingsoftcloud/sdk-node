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
        'ListInstanceSupportBillTypes': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2025-02-20',
                    'Action': 'ListInstanceSupportBillTypes',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'instanceId': 'String',
            }
        },
        'AddTrialToBuyTask': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2025-02-20',
                    'Action': 'AddTrialToBuyTask',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'instanceId': 'String',
                'billType': 'Int',
                'duration': 'Int',
                'autoTrialToBuyDate': 'String',
            }
        },
        'DeleteTrialToBuyTask': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2025-02-20',
                    'Action': 'DeleteTrialToBuyTask',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'instanceId': 'String',
            }
        },
        'CreateTrialToBuyNow': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2025-02-20',
                    'Action': 'CreateTrialToBuyNow',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'instanceId': 'String',
                'billType': 'Int',
                'duration': 'Int',
            }
        },
    }
}