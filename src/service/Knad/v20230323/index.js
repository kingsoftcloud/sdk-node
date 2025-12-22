const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'knad.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'knad',
            },
        },
    }
    _apiList = {
        'CreateKnad': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2023-03-23',
                    'Action': 'CreateKnad',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ServiceId': 'String',
                'KnadName': 'String',
                'Duration': 'Int',
                'ProjectId': 'String',
                'Band': 'Int',
                'MaxBand': 'Int',
                'IpCount': 'Int',
                'BillType': 'Int',
                'IdcBand': 'Int',
            }
        },
        'ModifyKnad': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2023-03-23',
                    'Action': 'ModifyKnad',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'KnadId': 'String',
                'ServiceId': 'String',
                'IpCount': 'Int',
                'Band': 'Int',
                'MaxBand': 'Int',
                'IdcBand': 'Int',
            }
        },
        'UnbindIpList': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2023-03-23',
                    'Action': 'UnbindIpList',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
            }
        },
        'AssociateIp': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2023-03-23',
                    'Action': 'AssociateIp',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'KnadId': 'String',
                'Ip': 'Array',
            }
        },
        'DisassociateIp': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2023-03-23',
                    'Action': 'DisassociateIp',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'Ip': 'Array',
            }
        },
        'DescribeKnadIp': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2023-03-23',
                    'Action': 'DescribeKnadIp',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'IpSort': 'String',
                'IpStatusSort': 'String',
                'BandSort': 'String',
                'Ip': 'String',
                'KnadId': 'String',
                'ProjectId': 'Array',
                'PageSize': 'Int',
                'OffSet': 'Int',
            }
        },
        'DeleteKnad': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2023-03-23',
                    'Action': 'DeleteKnad',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'KnadId': 'String',
            }
        },
        'DescribeKnad': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2023-03-23',
                    'Action': 'DescribeKnad',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'ProjectId': 'Filter',
                'KnadId': 'Filter',
            }
        },
        'GetBWIpList': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2023-03-23',
                    'Action': 'GetBWIpList',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'KnadId': 'String',
                'type': 'Int',
                'Ip': 'String',
                'PageSize': 'Int',
                'OffSet': 'Int',
            }
        },
        'DeleteBW': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2023-03-23',
                    'Action': 'DeleteBW',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'KnadId': 'String',
                'IpId': 'Array',
                'type': 'Int',
            }
        },
        'AddBWIpList': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2023-03-23',
                    'Action': 'AddBWIpList',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'KnadId': 'String',
                'Ip': 'Array',
                'type': 'Int',
            }
        },
        'GetZoneList': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2023-03-23',
                    'Action': 'GetZoneList',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
            }
        },
        'ModifyPolicy': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2023-03-23',
                    'Action': 'ModifyPolicy',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'KnadId': 'String',
                'TemplateId': 'Int',
                'UdpBlock': 'Int',
                'TcpBlock': 'Int',
                'IcmpBlock': 'Int',
            }
        },
        'ModifyBlockLocation': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2023-03-23',
                    'Action': 'ModifyBlockLocation',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'KnadId': 'String',
                'LocationBlock': 'Int',
                'Location': 'Array',
            }
        },
        'GetBlockLocations': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2023-03-23',
                    'Action': 'GetBlockLocations',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'KnadId': 'String',
            }
        },
        'GetKnadPolicy': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2023-03-23',
                    'Action': 'GetKnadPolicy',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'KnadId': 'String',
            }
        },
        'InsertEips': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2023-03-23',
                    'Action': 'InsertEips',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'KnadId': 'String',
                'Ip': 'Array',
            }
        },
    }
}