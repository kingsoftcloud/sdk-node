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
      'endpoint': 'kce.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'kce'
        }
      }
    });
    _defineProperty(this, "_apiList", {
      'DescribeEventLogs': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2023-01-01',
            'Action': 'DescribeEventLogs'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ClusterId': 'String',
          'ClusterName': 'String',
          'NodeId': 'String',
          'NodeName': 'String',
          'Inner': 'Boolean',
          'Marker': 'Int',
          'MaxResults': 'Int'
        }
      },
      'CreateAddonInstance': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2023-01-01',
            'Action': 'CreateAddonInstance'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {}
      },
      'DeleteAddonInstance': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2023-01-01',
            'Action': 'DeleteAddonInstance'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ClusterName': 'String',
          'ClusterId': 'String',
          'AddonId': 'String',
          'InstanceId': 'String'
        }
      },
      'DescribeAddonInstances': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2023-01-01',
            'Action': 'DescribeAddonInstances'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'CulsterId': 'String',
          'ClusterName': 'String',
          'Name': 'String',
          'AddonIds': 'Array'
        }
      },
      'DescribeAddonList': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2023-01-01',
            'Action': 'DescribeAddonList'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'Name': 'String',
          'MaxResults': 'Int',
          'Marker': 'Int'
        }
      },
      'DescribeComponentParams': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2023-01-01',
            'Action': 'DescribeComponentParams'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ClusterId': 'String',
          'Components': 'Array',
          'Marker': 'Int',
          'MaxResults': 'Int'
        }
      },
      'DescribeNetwork': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2023-01-01',
            'Action': 'DescribeNetwork'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ClusterId': 'String',
          'ClusterName': 'String'
        }
      },
      'DescribeNodeComponents': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2023-01-01',
            'Action': 'DescribeNodeComponents'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ClusterId': 'String',
          'ClusterName': 'String',
          'NodeNames': 'Array',
          'NodeIds': 'String',
          'Marker': 'Int',
          'MaxResults': 'Int'
        }
      },
      'DescribeComponentList': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2023-01-01',
            'Action': 'DescribeComponentList'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'K8sVersion': 'String'
        }
      }
    });
  }
};