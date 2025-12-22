const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'waf.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'waf',
            },
        },
    }
    _apiList = {
        'CreateWaf': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-07-07',
                    'Action': 'CreateWaf',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'WafType': 'String',
                'BillType': 'Int',
                'PurchaseTime': 'Int',
                'DomainBag': 'Int',
                'BandWidthIpv4': 'Int',
                'StorageSize': 'Int',
                'ProjectId': 'Int',
            }
        },
        'DeleteWaf': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-07-07',
                    'Action': 'DeleteWaf',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'Action': 'String',
            }
        },
        'CreateDomain': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-07-07',
                    'Action': 'CreateDomain',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ResourceRecord': 'String',
                'HttpRewrite': 'Boolean',
                'HttpSource': 'Boolean',
                'CertificateId': 'String',
                'CertificateRegion': 'String',
                'LbMethod': 'String',
                'HasProxy': 'Boolean',
                'ProjectId': 'Int',
                'HeaderMark': 'String',
                'HeaderValue': 'String',
                'HealthMonitor': 'String',
                'HttpPort': 'Filter',
                'HttpsPort': 'Filter',
                'Sources': 'String',
            }
        },
        'DescribeDomains': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-07-07',
                    'Action': 'DescribeDomains',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ResourceRecord': 'String',
            }
        },
        'ModifyDomain': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-07-07',
                    'Action': 'ModifyDomain',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ResourceRecordId': 'String',
                'HttpRewrite': 'Boolean',
                'HttpSource': 'Boolean',
                'CertificateId': 'String',
                'CertificateRegion': 'String',
                'LbMethod': 'String',
                'HasProxy': 'Boolean',
                'ProjectId': 'Int',
                'HeaderMark': 'String',
                'HeaderValue': 'String',
                'HealthMonitor': 'String',
                'HttpPort': 'Filter',
                'HttpsPort': 'Filter',
                'Sources': 'String',
            }
        },
        'DeleteDomain': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-07-07',
                    'Action': 'DeleteDomain',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ResourceRecordId': 'String',
            }
        },
        'CreateAccessControlRule': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-07-07',
                    'Action': 'CreateAccessControlRule',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ResourceRecordId': 'String',
                'RuleName': 'String',
                'Level': 'Int',
                'RuleAction': 'Int',
                'Status': 'Boolean',
                'MatchRuleInfo': 'String',
                'Priority': 'Int',
            }
        },
        'DescribeAccessControlRules': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-07-07',
                    'Action': 'DescribeAccessControlRules',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'RuleId': 'String',
                'ResourceRecordId': 'String',
                'RuleName': 'String',
            }
        },
        'ModifyAccessControlRule': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-07-07',
                    'Action': 'ModifyAccessControlRule',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'RuleId': 'String',
                'RuleName': 'String',
                'RuleType': 'String',
                'RuleData': 'String',
                'MatchRule': 'String',
                'ArgName': 'String',
                'Level': 'Int',
                'RuleAction': 'Int',
                'Status': 'Boolean',
            }
        },
        'DeleteAccessControlRule': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-07-07',
                    'Action': 'DeleteAccessControlRule',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'RuleId': 'String',
            }
        },
        'DescribeCertificates': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-07-07',
                    'Action': 'DescribeCertificates',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'Request': 'String',
            }
        },
        'CreateIpv6Protection': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-07-07',
                    'Action': 'CreateIpv6Protection',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ResourceRecordId': 'Array',
            }
        },
        'DeleteIpv6Protection': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-07-07',
                    'Action': 'DeleteIpv6Protection',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ResourceRecordId': 'Array',
            }
        },
        'ModifyStorageTime': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-07-07',
                    'Action': 'ModifyStorageTime',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'StorageTime': 'Int',
            }
        },
        'CreateAlbDomain': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-07-07',
                    'Action': 'CreateAlbDomain',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ResourceRecord': 'String',
                'HttpRewrite': 'Boolean',
                'HttpSource': 'Boolean',
                'CertificateId': 'String',
                'CertificateRegion': 'String',
                'LbMethod': 'String',
                'HasProxy': 'Boolean',
                'ProjectId': 'Int',
                'HeaderMark': 'String',
                'HeaderValue': 'String',
                'HealthMonitor': 'String',
                'HttpPort': 'Filter',
                'HttpsPort': 'Filter',
                'Sources': 'String',
            }
        },
        'ModifyAlbDomain': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-07-07',
                    'Action': 'ModifyAlbDomain',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ResourceRecordId': 'String',
                'HttpRewrite': 'Boolean',
                'HttpSource': 'Boolean',
                'CertificateId': 'String',
                'CertificateRegion': 'String',
                'LbMethod': 'String',
                'HasProxy': 'Boolean',
                'ProjectId': 'Int',
                'HeaderMark': 'String',
                'HeaderValue': 'String',
                'HealthMonitor': 'String',
                'HttpPort': 'Filter',
                'HttpsPort': 'Filter',
                'Sources': 'String',
            }
        },
        'DeleteAlbDomain': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-07-07',
                    'Action': 'DeleteAlbDomain',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ResourceRecordId': 'String',
            }
        },
        'CreateAlbWaf': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-07-07',
                    'Action': 'CreateAlbWaf',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'WafType': 'String',
                'BillType': 'Int',
                'ProjectId': 'Int',
                'AlbNumber': 'Int',
                'DomainBag': 'Int',
                'QpsBag': 'Int',
                'PurchaseTime': 'Int',
            }
        },
        'ModifyAlbWaf': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-07-07',
                    'Action': 'ModifyAlbWaf',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'WafType': 'String',
                'DomainBag': 'Int',
                'AlbNumber': 'Int',
                'QpsBag': 'Int',
            }
        },
        'DescribeAlbDomains': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-07-07',
                    'Action': 'DescribeAlbDomains',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ResourceRecord': 'String',
            }
        },
    }
}