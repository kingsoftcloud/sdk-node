const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'cdn.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'cdn',
            },
        },
    }
    _apiList = {
        'GetClientRequestData': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-06-30',
                    'Action': 'GetClientRequestData',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'StartTime': 'String',
                'EndTime': 'String',
                'Metric': 'String',
                'Interval': 'String',
                'CdnType': 'String',
                'Domains': 'String',
                'Areas': 'String',
                'Provinces': 'String',
                'Isps': 'String',
                'IpType': 'String',
                'Schema': 'String',
                'ResultType': 'String',
            }
        },
        'GetServerData': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-06-30',
                    'Action': 'GetServerData',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'StartTime': 'String',
                'EndTime': 'String',
                'Metric': 'String',
                'DataType': 'String',
                'Interval': 'String',
                'CdnType': 'String',
                'Domains': 'String',
                'Regions': 'String',
                'Schema': 'String',
                'ResultType': 'String',
            }
        },
        'GetDomainRankingListData': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-06-30',
                    'Action': 'GetDomainRankingListData',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'StartTime': 'String',
                'EndTime': 'String',
                'CdnType': 'String',
                'SortBy': 'String',
            }
        },
        'GetAreaIspData': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-06-30',
                    'Action': 'GetAreaIspData',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'StartTime': 'String',
                'EndTime': 'String',
                'CdnType': 'String',
                'Domains': 'String',
            }
        },
        'GetTopReferData': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-06-30',
                    'Action': 'GetTopReferData',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'StartTime': 'String',
                'EndTime': 'String',
                'CdnType': 'String',
                'Domains': 'String',
                'LimitN': 'String',
                'SortBy': 'String',
            }
        },
        'GetTopUrlData': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-06-30',
                    'Action': 'GetTopUrlData',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'StartTime': 'String',
                'EndTime': 'String',
                'CdnType': 'String',
                'Domains': 'String',
                'LimitN': 'String',
                'SortBy': 'String',
            }
        },
        'GetRealTimeHitRateData': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-06-30',
                    'Action': 'GetRealTimeHitRateData',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'StartTime': 'String',
                'EndTime': 'String',
                'HitRatetype': 'String',
                'CdnType': 'String',
                'Domains': 'String',
                'ResultType': 'String',
            }
        },
        'GetReqHitRateData': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-06-30',
                    'Action': 'GetReqHitRateData',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'StartTime': 'String',
                'EndTime': 'String',
                'Interval': 'String',
                'CdnType': 'String',
                'Domains': 'String',
                'ResultType': 'String',
            }
        },
        'GetFlowHitRateData': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-06-30',
                    'Action': 'GetFlowHitRateData',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'StartTime': 'String',
                'EndTime': 'String',
                'Interval': 'String',
                'CdnType': 'String',
                'Domains': 'String',
                'ResultType': 'String',
            }
        },
        'GetDomainRequestPeriodRatioData': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-06-30',
                    'Action': 'GetDomainRequestPeriodRatioData',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'CurrentPeriodStartTime': 'String',
                'CurrentPeriodEndTime': 'String',
                'PriorPeriodStartTime': 'String',
                'PriorPeriodEndTime': 'String',
                'Metric': 'String',
                'CdnType': 'String',
                'Interval': 'String',
                'Domains': 'String',
                'Areas': 'String',
                'Provinces': 'String',
                'Isps': 'String',
                'IpType': 'String',
                'Schema': 'String',
                'ResultType': 'String',
            }
        },
        'GetUvData': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-06-30',
                    'Action': 'GetUvData',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'StartTime': 'String',
                'EndTime': 'String',
                'CdnType': 'String',
                'Domains': 'String',
                'Interval': 'String',
                'ResultType': 'String',
            }
        },
        'GetTopIpData': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-06-30',
                    'Action': 'GetTopIpData',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'StartTime': 'String',
                'EndTime': 'String',
                'CdnType': 'String',
                'Domains': 'String',
                'LimitN': 'String',
                'SortBy': 'String',
            }
        },
        'GetSrcDomainHttpCodeDetailedData': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-06-30',
                    'Action': 'GetSrcDomainHttpCodeDetailedData',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'StartTime': 'String',
                'EndTime': 'String',
                'Interval': 'String',
                'CdnType': 'String',
                'Domains': 'String',
                'Schema': 'String',
                'CodeType': 'String',
                'ResultType': 'String',
            }
        },
        'GetSrcDomainHttpCodeData': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-06-30',
                    'Action': 'GetSrcDomainHttpCodeData',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'StartTime': 'String',
                'EndTime': 'String',
                'CdnType': 'String',
                'Domains': 'String',
                'Schema': 'String',
                'ResultType': 'String',
            }
        },
        'GetDomainHttpCodeDetailedData': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-06-30',
                    'Action': 'GetDomainHttpCodeDetailedData',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'StartTime': 'String',
                'EndTime': 'String',
                'Interval': 'String',
                'CdnType': 'String',
                'Domains': 'String',
                'Areas': 'String',
                'Provinces': 'String',
                'Isps': 'String',
                'IpType': 'String',
                'Schema': 'String',
                'CodeType': 'String',
                'ResultType': 'String',
            }
        },
        'GetDomainHttpCodeData': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-06-30',
                    'Action': 'GetDomainHttpCodeData',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'StartTime': 'String',
                'EndTime': 'String',
                'CdnType': 'String',
                'Domains': 'String',
                'Areas': 'String',
                'Provinces': 'String',
                'Isps': 'String',
                'IpType': 'String',
                'Schema': 'String',
                'ResultType': 'String',
            }
        },
        'GetEntryRateData': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-06-30',
                    'Action': 'GetEntryRateData',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'Domains': 'String',
                'StartTime': 'String',
                'EndTime': 'String',
                'Province': 'String',
                'Isp': 'String',
            }
        },
    }
}