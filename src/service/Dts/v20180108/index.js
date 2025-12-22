const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'dts.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'dts',
            },
        },
    }
    _apiList = {
        'SchemaStruct': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2018-01-08',
                    'Action': 'SchemaStruct',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'SourceInstanceId': 'String',
                'SourceType': 'String',
                'SourceUsername': 'String',
                'SourcePassword': 'String',
                'SourceRegion': 'String',
            }
        },
        'ConnectivityCheck': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2018-01-08',
                    'Action': 'ConnectivityCheck',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
            }
        },
        'CreatePrecheck': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2018-01-08',
                    'Action': 'CreatePrecheck',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'SourceType': 'String',
                'TargetType': 'String',
                'TargetRegion': 'String',
                'SourceRegion': 'String',
                'DbSchema': 'String',
                'SubTasks': 'String',
                'SourceInstanceId': 'String',
                'TargetInstanceId': 'String',
                'SourceUsername': 'String',
                'SourcePassword': 'String',
                'Type': 'String',
                'DTSParameter': 'Filter',
                'SourceUser': 'Filter',
            }
        },
        'CreateTask': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2018-01-08',
                    'Action': 'CreateTask',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'TaskName': 'String',
                'SubTask': 'String',
                'TaskType': 'String',
                'PrecheckId': 'String',
                'BillType': 'Int',
                'Duration': 'Int',
            }
        },
        'DescribeTask': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2018-01-08',
                    'Action': 'DescribeTask',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'TaskId': 'String',
                'TargetType': 'String',
                'TaskType': 'String',
                'TaskStatus': 'Filter',
                'TaskName': 'String',
                'TargetInstanceId': 'String',
                'SourceInstanceId': 'String',
                'OrderByType': 'String',
                'Marker': 'Int',
                'MaxRecords': 'Int',
            }
        },
        'OperateTask': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2018-01-08',
                    'Action': 'OperateTask',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'TaskId': 'String',
                'ActionName': 'String',
                'TaskType': 'String',
                'ErrSkip': 'Int',
            }
        },
        'DescribeConnConfig': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2018-01-08',
                    'Action': 'DescribeConnConfig',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ConnConfigId': 'String',
            }
        },
        'DescribePrecheck': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2018-01-08',
                    'Action': 'DescribePrecheck',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'PrecheckId': 'String',
            }
        },
        'DescribeSourceUserConfig': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2018-01-08',
                    'Action': 'DescribeSourceUserConfig',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'TaskId': 'String',
            }
        },
        'SetConsistencyCheck': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2018-01-08',
                    'Action': 'SetConsistencyCheck',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'TaskId': 'String',
                'ConsistencyCheckAuto': 'Boolean',
                'ConsistencyCheckCycle': 'Int',
                'ConsistencyCheckFixedTime': 'String',
            }
        },
        'DescribeConsistencyCheck': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2018-01-08',
                    'Action': 'DescribeConsistencyCheck',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'TaskId': 'String',
            }
        },
        'DescribeDTSParameter': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2018-01-08',
                    'Action': 'DescribeDTSParameter',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'SourceType': 'String',
                'TargetType': 'String',
                'TargetInstanceId': 'String',
                'TargetRegion': 'String',
                'SourceInstanceId': 'String',
                'SourceHost': 'String',
                'SourcePort': 'String',
                'SourceUsername': 'String',
                'SourcePassword': 'String',
                'SourceRegion': 'String',
            }
        },
        'DescribeDTSParameterConfig': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2018-01-08',
                    'Action': 'DescribeDTSParameterConfig',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'TaskId': 'String',
            }
        },
        'DescribeSourceUser': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2018-01-08',
                    'Action': 'DescribeSourceUser',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'SourceInstanceId': 'String',
                'SourceType': 'String',
                'SourceUsername': 'String',
                'SourcePassword': 'String',
                'SourceRegion': 'String',
                'TargetType': 'String',
                'TargetInstanceId': 'String',
                'TargetRegion': 'String',
            }
        },
        'DescribeSubTask': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2018-01-08',
                    'Action': 'DescribeSubTask',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'TaskId': 'String',
                'SubTaskId': 'String',
                'SubTaskName': 'String',
                'OrderByType': 'String',
                'ObjectStatus': 'String',
                'Marker': 'Int',
                'MaxRecords': 'Int',
            }
        },
        'CreateConsistencyCheck': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2018-01-08',
                    'Action': 'CreateConsistencyCheck',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'TaskId': 'String',
            }
        },
        'StopConsistencyCheck': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2018-01-08',
                    'Action': 'StopConsistencyCheck',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'TaskId': 'String',
            }
        },
        'DescribeRegionConfig': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2018-01-08',
                    'Action': 'DescribeRegionConfig',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
            }
        },
        'TaskBirdView': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2018-01-08',
                    'Action': 'TaskBirdView',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'taskType': 'String',
            }
        },
    }
}