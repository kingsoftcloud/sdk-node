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
                'Action': 'String',
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
            }
        },
        'GetPostpayDetailBillCSV': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2018-06-01',
                    'Action': 'GetPostpayDetailBillCSV',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
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
        'getMonthConsume': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2018-06-01',
                    'Action': 'getMonthConsume',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
            }
        },
        'getPostpayDetailConsume': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2018-06-01',
                    'Action': 'getPostpayDetailConsume',
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