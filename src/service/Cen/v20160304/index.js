const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'cen.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'cen',
            },
        },
    }
    _apiList = {
        'CreateCen': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'CreateCen',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'CenName': 'String',
            }
        },
        'ModifyCen': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ModifyCen',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'CenId': 'String',
                'CenName': 'String',
            }
        },
        'DeleteCen': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DeleteCen',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'CenId': 'String',
            }
        },
        'DescribeCens': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeCens',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'CenId': 'Filter',
                'MaxResults': 'Int',
                'NextToken': 'String',
            }
        },
        'AttachCenInstance': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'AttachCenInstance',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'CenId': 'String',
                'InstanceType': 'String',
                'CenRegion': 'String',
                'CenInstanceId': 'String',
                'InstanceAccountId': 'String',
            }
        },
        'DetachCenInstance': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DetachCenInstance',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'CenId': 'String',
                'CenInstanceId': 'String',
            }
        },
        'DescribeCenInstances': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeCenInstances',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'CenInstanceId': 'Filter',
                'MaxResults': 'Int',
                'Filter': 'Filter',
                'NextToken': 'String',
            }
        },
        'CreatCenGrant': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'CreatCenGrant',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'CenId': 'String',
                'InstanceType': 'String',
                'CenInstanceId': 'String',
                'CenAccountId': 'String',
            }
        },
        'DeleteCenGrant': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DeleteCenGrant',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'CenGrantId': 'String',
            }
        },
        'DescribeCenGrants': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeCenGrants',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'CenGrantId': 'Filter',
                'Filter': 'Filter',
                'MaxResults': 'Int',
                'NextToken': 'String',
            }
        },
        'DescribeRegionGroups': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeRegionGroups',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'RegionGroupId': 'Filter',
                'Filter': 'Filter',
                'MaxResults': 'Int',
                'NextToken': 'String',
            }
        },
        'CreateCenBandWidthPackage': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'CreateCenBandWidthPackage',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'CenId': 'String',
                'Name': 'String',
                'RegionAGroupId': 'String',
                'RegionBGroupId': 'String',
                'BandWidth': 'Int',
                'ProjectId': 'String',
                'ChargeType': 'String',
                'PurchaseTime': 'Int',
            }
        },
        'ModifyCenBandWidthPackage': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ModifyCenBandWidthPackage',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'CenBandWidthPackageId': 'String',
                'BandWidth': 'Int',
            }
        },
        'DeleteCenBandWidthPackage': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DeleteCenBandWidthPackage',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'CenBandWidthPackageId': 'String',
            }
        },
        'AttachCenBandWidthPackage': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'AttachCenBandWidthPackage',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'CenBandWidthPackageId': 'String',
                'CenId': 'String',
            }
        },
        'DetachCenBandWidthPackage': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DetachCenBandWidthPackage',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'CenBandWidthPackageId': 'String',
                'CenId': 'String',
            }
        },
        'DescribeCenBandWidthPackages': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeCenBandWidthPackages',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ProjectId': 'Filter',
                'CenBandWidthPackageId': 'Filter',
                'Filter': 'Filter',
                'MaxResults': 'Int',
                'NextToken': 'String',
            }
        },
        'CreateCenRegionBandwidth': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'CreateCenRegionBandwidth',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'CenId': 'String',
                'RegionA': 'String',
                'RegionB': 'String',
                'CenBandWidthPackageId': 'String',
                'BandWidth': 'Int',
            }
        },
        'DeleteCenRegionBandwidth': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DeleteCenRegionBandwidth',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'CenRegionBandwidthId': 'String',
            }
        },
        'ModifyCenRegionBandwidth': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ModifyCenRegionBandwidth',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'CenRegionBandwidthId': 'String',
                'BandWidth': 'String',
            }
        },
        'DescribeCenRegionBandwidths': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeCenRegionBandwidths',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'CenRegionBandwidthId': 'Filter',
                'Filter': 'Filter',
                'MaxResults': 'Int',
                'NextToken': 'String',
            }
        },
        'DescribeCenRoutes': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeCenRoutes',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'CenRouteId': 'Filter',
                'Filter': 'Filter',
                'MaxResults': 'Int',
                'NextToken': 'String',
            }
        },
        'DescribeCenRegions': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeCenRegions',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'CenRegionId': 'Filter',
                'Filter': 'Filter',
                'MaxResults': 'Int',
                'NextToken': 'String',
            }
        },
        'DescribeCenBandWidthPackageUsage': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeCenBandWidthPackageUsage',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'CenBandWidthPackageId': 'String',
            }
        },
    }
}