"use strict";

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const BaseClient = require("../../../base/BaseClient.js");
module.exports = class Client extends BaseClient {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "_baseConfig", {
      'protocol': 'http://',
      'endpoint': 'cen.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'cen'
        }
      }
    });
    _defineProperty(this, "_apiList", {
      'CreateCen': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'CreateCen'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'CenName': 'String',
          'Description': 'String'
        }
      },
      'ModifyCen': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'ModifyCen'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'CenId': 'String',
          'CenName': 'String',
          'Description': 'String'
        }
      },
      'DeleteCen': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DeleteCen'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'CenId': 'String'
        }
      },
      'DescribeCens': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribeCens'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'CenId': 'Filter',
          'MaxResults': 'Int',
          'NextToken': 'String'
        }
      },
      'DeleteCenGrant': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DeleteCenGrant'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'CenGrantId': 'String'
        }
      },
      'DescribeCenGrants': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribeCenGrants'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'CenGrantId': 'Filter',
          'Filter': 'Filter',
          'MaxResults': 'Int',
          'NextToken': 'String'
        }
      },
      'CreateCenBandWidthPackage': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'CreateCenBandWidthPackage'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'CenId': 'String',
          'CenBandWidthPackageName': 'String',
          'LocalAreaId': 'String',
          'RemoteAreaId': 'String',
          'PackageBandWidth': 'Int',
          'ProjectId': 'String',
          'ChargeType': 'String',
          'PurchaseTime': 'Int'
        }
      },
      'ModifyCenBandWidthPackage': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'ModifyCenBandWidthPackage'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'CenBandWidthPackageId': 'String',
          'PackageBandWidth': 'Int',
          'CenBandWidthPackageName': 'String'
        }
      },
      'DeleteCenBandWidthPackage': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DeleteCenBandWidthPackage'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'CenBandWidthPackageId': 'String'
        }
      },
      'AttachCenBandWidthPackage': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'AttachCenBandWidthPackage'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'CenBandWidthPackageId': 'String',
          'CenId': 'String'
        }
      },
      'DetachCenBandWidthPackage': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DetachCenBandWidthPackage'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'CenBandWidthPackageId': 'String',
          'CenId': 'String'
        }
      },
      'DescribeCenBandWidthPackages': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribeCenBandWidthPackages'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'ProjectId': 'Filter',
          'CenBandWidthPackageId': 'Filter',
          'Filter': 'Filter',
          'MaxResults': 'Int',
          'NextToken': 'String',
          'TagKey': 'Filter',
          'TagKV': 'Filter'
        }
      },
      'CreateCenRegionBandwidth': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'CreateCenRegionBandwidth'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'LocalRegion': 'String',
          'RemoteRegion': 'String',
          'CenBandWidthPackageId': 'String',
          'InterBandWidth': 'Int'
        }
      },
      'DeleteCenRegionBandwidth': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DeleteCenRegionBandwidth'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'CenRegionBandwidthId': 'String'
        }
      },
      'ModifyCenRegionBandwidth': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'ModifyCenRegionBandwidth'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'CenRegionBandwidthId': 'String',
          'InterBandWidth': 'String'
        }
      },
      'DescribeCenRegionBandwidths': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribeCenRegionBandwidths'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'CenRegionBandwidthId': 'Filter',
          'Filter': 'Filter',
          'MaxResults': 'Int',
          'NextToken': 'String'
        }
      },
      'DescribeCenRoutes': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribeCenRoutes'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'CenRouteId': 'Filter',
          'Filter': 'Filter',
          'MaxResults': 'Int',
          'NextToken': 'String'
        }
      },
      'DescribeCenBandWidthPackageUsage': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribeCenBandWidthPackageUsage'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'CenBandWidthPackageId': 'String'
        }
      },
      'DescribeNetworkInstances': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribeNetworkInstances'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'NetworkInstanceId': 'Filter',
          'MaxResults': 'Int',
          'Filter': 'Filter',
          'NextToken': 'String'
        }
      },
      'CreateCenGrant': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'CreateCenGrant'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'CenId': 'String',
          'InstanceType': 'String',
          'NetworkInstanceId': 'String',
          'CenAccountId': 'String'
        }
      },
      'DescribeInterAreas': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribeInterAreas'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InterAreaId': 'Filter',
          'Filter': 'Filter',
          'MaxResults': 'Int',
          'NextToken': 'String'
        }
      },
      'DescribeInterRegions': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribeInterRegions'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InterRegionId': 'Filter',
          'Filter': 'Filter',
          'MaxResults': 'Int',
          'NextToken': 'String'
        }
      },
      'AttachNetworkInstance': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'AttachNetworkInstance'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'CenId': 'String',
          'InstanceType': 'String',
          'InstanceRegion': 'String',
          'NetworkInstanceId': 'String',
          'InstanceAccountId': 'String'
        }
      },
      'DetachNetworkInstance': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DetachNetworkInstance'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'CenId': 'String',
          'NetworkInstanceId': 'String'
        }
      },
      'CenCidrPublish': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'CenCidrPublish'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'NetworkInstanceId': 'String',
          'InstanceType': 'String',
          'NetworkRouteId': 'Filter',
          'SelfDefineCidr': 'Filter',
          'CenId': 'String'
        }
      },
      'CenCidrDelete': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'CenCidrDelete'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'NetworkInstanceId': 'String',
          'InstanceType': 'String',
          'NetworkRouteId': 'Filter',
          'SelfRouteId': 'Filter',
          'CenId': 'String'
        }
      }
    });
  }
};