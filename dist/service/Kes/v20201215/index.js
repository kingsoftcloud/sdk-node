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
      'endpoint': 'kes.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'kes'
        }
      }
    });
    _defineProperty(this, "_apiList", {
      'DescribeCluster': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-12-15',
            'Action': 'DescribeCluster'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'ClusterId': 'String'
        }
      },
      'ListClusters': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-12-15',
            'Action': 'ListClusters'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'Marker': 'String'
        }
      },
      'ModifyClusterName': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-12-15',
            'Action': 'ModifyClusterName'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'ClusterId': 'String',
          'ClusterName': 'String'
        }
      },
      'LaunchCluster': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-12-15',
            'Action': 'LaunchCluster'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'ClusterName': 'String',
          'MainVersion': 'String',
          'Scenario': 'String',
          'AvailabilityZone': 'String',
          'ChargeType': 'String',
          'PurchaseTime': 'Int',
          'ProjectId': 'Int',
          'VpcDomainId': 'String',
          'VpcSubnetId': 'String',
          'VpcEpcSubnetId': 'String',
          'SecurityGroupId': 'String',
          'InstanceGroups': 'Array'
        }
      },
      'ListInstanceGroups': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-12-15',
            'Action': 'ListInstanceGroups'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'ClusterId': 'String'
        }
      },
      'ServiceControl': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-12-15',
            'Action': 'ServiceControl'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'ClusterId': 'String',
          'ControlType': 'String',
          'Rolling': 'String'
        }
      },
      'ClusterHealthStatistic': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-12-15',
            'Action': 'ClusterHealthStatistic'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'ClusterId': 'String'
        }
      },
      'CheckClusterHealth': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-12-15',
            'Action': 'CheckClusterHealth'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'cluster_id': 'String',
          'check_list': 'Array'
        }
      }
    });
  }
};