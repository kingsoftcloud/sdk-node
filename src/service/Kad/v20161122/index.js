const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'kad.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'kad',
            },
        },
    }
    _apiList = {
        'CreateForwardConf': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2016-11-22',
                    'Action': 'CreateForwardConf',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'KadId': 'String',
                'Protocol': 'String',
                'ServicePort': 'Int',
            }
        },
        'DeleteForwardConf': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2016-11-22',
                    'Action': 'DeleteForwardConf',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ForwardConfId': 'String',
            }
        },
        'DescribeForwardConf': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-11-22',
                    'Action': 'DescribeForwardConf',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'KadId': 'String',
                'ForwardConfId': 'Filter',
            }
        },
        'CreateForwardSource': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2016-11-22',
                    'Action': 'CreateForwardSource',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ForwardConfId': 'String',
                'SourceIp': 'String',
                'SourcePort': 'String',
            }
        },
        'DeleteForwardSource': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2016-11-22',
                    'Action': 'DeleteForwardSource',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ForwardSourceId': 'String',
            }
        },
        'DescribeForwardSource': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-11-22',
                    'Action': 'DescribeForwardSource',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'ForwardConfId': 'String',
                'ForwardSourceId': 'Filter',
            }
        },
    }
}