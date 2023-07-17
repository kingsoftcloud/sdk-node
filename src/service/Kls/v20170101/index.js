const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'kls.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'kls',
            },
        },
    }
    _apiList = {
        'ListStreamDurations': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'ListStreamDurations',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'UniqueName': 'String',
                'App': 'String',
                'Pubdomain': 'String',
                'Stream': 'String',
                'StartUnixTime': 'Int',
                'EndUnixTime': 'Int',
            }
        },
        'ListHistoryPubStreamsErrInfo': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'ListHistoryPubStreamsErrInfo',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'UniqueName': 'String',
                'App': 'String',
                'Pubdomain': 'String',
                'Stream': 'String',
                'OrderTime': 'Int',
                'Marker': 'Int',
                'Limit': 'Int',
                'StartUnixTime': 'Int',
                'EndUnixTime': 'Int',
            }
        },
        'ListHistoryPubStreamsInfo': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'ListHistoryPubStreamsInfo',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'UniqueName': 'String',
                'App': 'String',
                'Pubdomain': 'String',
                'Stream': 'String',
                'OrderTime': 'Int',
                'Marker': 'Int',
                'Limit': 'Int',
                'StartUnixTime': 'Int',
                'EndUnixTime': 'Int',
            }
        },
        'ForbidStream': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'ForbidStream',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'UniqueName': 'String',
                'App': 'String',
                'Pubdomain': 'String',
                'Stream': 'String',
                'ForbidTillUnixTime': 'Int',
            }
        },
        'ResumeStream': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'ResumeStream',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'UniqueName': 'String',
                'App': 'String',
                'Pubdomain': 'String',
                'Stream': 'String',
            }
        },
        'GetBlacklist': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'GetBlacklist',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'UniqueName': 'String',
                'App': 'String',
                'Pubdomain': 'String',
            }
        },
        'CheckBlacklist': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'CheckBlacklist',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'UniqueName': 'String',
                'App': 'String',
                'Pubdomain': 'String',
                'Stream': 'String',
            }
        },
        'ListRealtimeStreamsInfo': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'ListRealtimeStreamsInfo',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'UniqueName': 'String',
                'App': 'String',
                'Stream': 'String',
                'DomainIds': 'String',
                'PullProtocol': 'String',
                'Type': 'String',
            }
        },
    }
}