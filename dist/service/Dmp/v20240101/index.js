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
      'endpoint': 'dmp.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'dmp'
        }
      }
    });
    _defineProperty(this, "_apiList", {
      'DescribeDefaultMonitorItems': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2024-01-01',
            'Action': 'DescribeDefaultMonitorItems'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'PanelType': 'String'
        }
      },
      'DeleteMonitorPanel': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2024-01-01',
            'Action': 'DeleteMonitorPanel'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'PanelId': 'String'
        }
      },
      'OperateMonitorPanel': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2024-01-01',
            'Action': 'OperateMonitorPanel'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'AddInstanceIds': 'Array',
          'RemoveInstanceIds': 'Array',
          'AddMonitorItems': 'Array',
          'RemoveMonitorItems': 'Array',
          'PanelId': 'String'
        }
      },
      'DescribeMonitorPanel': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2024-01-01',
            'Action': 'DescribeMonitorPanel'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'PanelId': 'String'
        }
      },
      'ModifyMonitorPanelInfo': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2024-01-01',
            'Action': 'ModifyMonitorPanelInfo'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'PanelId': 'String',
          'PanelName': 'String'
        }
      },
      'CreateMonitorPanel': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2024-01-01',
            'Action': 'CreateMonitorPanel'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'PanelName': 'String',
          'PanelType': 'String'
        }
      },
      'DeleteBatchInstances': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2024-01-01',
            'Action': 'DeleteBatchInstances'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceIds': 'Array'
        }
      },
      'InstanceStatistics': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2024-01-01',
            'Action': 'InstanceStatistics'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {}
      },
      'DescribeMonitorPanelList': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2024-01-01',
            'Action': 'DescribeMonitorPanelList'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'PanelIds': 'String',
          'PanelType': 'String',
          'Page': 'Int',
          'PageSize': 'Int'
        }
      },
      'DescribeInstanceList': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2024-01-01',
            'Action': 'DescribeInstanceList'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'DatabaseType': 'String',
          'InstanceRegion': 'String',
          'InstanceName': 'String',
          'Ip': 'String',
          'Search': 'String',
          'Page': 'Int',
          'PageSize': 'Int'
        }
      },
      'ImportInstanceToDmp': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2024-01-01',
            'Action': 'ImportInstanceToDmp'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceRegion': 'String',
          'DatabaseType': 'String',
          'InstanceId': 'String'
        }
      },
      'DescribeDedicatedClusters': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2024-01-01',
            'Action': 'DescribeDedicatedClusters'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {}
      },
      'DescribeDedicatedHosts': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2024-01-01',
            'Action': 'DescribeDedicatedHosts'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {}
      },
      'DescribeDatabaseSchema': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2024-01-01',
            'Action': 'DescribeDatabaseSchema'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'DatabaseId': 'Int'
        }
      },
      'DescribeDatabaseList': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2024-01-01',
            'Action': 'DescribeDatabaseList'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {}
      },
      'DescribeHistorySQL': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2024-01-01',
            'Action': 'DescribeHistorySQL'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {}
      },
      'StartExecuteSQL': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2024-01-01',
            'Action': 'StartExecuteSQL'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'DatabaseName': 'String',
          'Statement': 'String'
        }
      },
      'UpdateInstanceDatabase': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2024-01-01',
            'Action': 'UpdateInstanceDatabase'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'InstanceId': 'String'
        }
      },
      'UpdateDatabaseTable': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2024-01-01',
            'Action': 'UpdateDatabaseTable'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'DatabaseId': 'String'
        }
      },
      'TestInstanceConnection': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2024-01-01',
            'Action': 'TestInstanceConnection'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'DatabaseType': 'String',
          'DatabaseVersion': 'String',
          'Username': 'String',
          'Password': 'String',
          'UseSourceUser': 'Boolean'
        }
      }
    });
  }
};