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
        'QueryInstanceConsume': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2022-12-22',
                    'Action': 'QueryInstanceConsume',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'StartDay': 'String',
                'EndDay': 'String',
                'ProductCode': 'String',
                'Page': 'Int',
                'Size': 'Int',
            }
        },
        'QueryProjectConsume': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2022-12-22',
                    'Action': 'QueryProjectConsume',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'StartDay': 'String',
                'EndDay': 'String',
                'Page': 'Int',
                'Size': 'Int',
            }
        },
        'QueryProductConsume': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2022-12-22',
                    'Action': 'QueryProductConsume',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'StartDay': 'String',
                'EndDay': 'String',
                'Page': 'Int',
                'Size': 'Int',
            }
        },
        'QueryFinanceUnitConsume': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2022-12-22',
                    'Action': 'QueryFinanceUnitConsume',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'StartDay': 'String',
                'EndDay': 'String',
                'Page': 'Int',
                'Size': 'Int',
            }
        },
        'QueryFinanceUnitConsumeOfMonth': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2022-12-22',
                    'Action': 'QueryFinanceUnitConsumeOfMonth',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'CustomerBillMonth': 'String',
                'Page': 'Int',
                'Size': 'Int',
            }
        },
        'QueryUserConsume': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2022-12-22',
                    'Action': 'QueryUserConsume',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'StartDay': 'String',
                'EndDay': 'String',
                'Page': 'Int',
                'Size': 'Int',
            }
        },
    }
}