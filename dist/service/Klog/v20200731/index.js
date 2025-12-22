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
      'endpoint': 'klog.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'klog'
        }
      }
    });
    _defineProperty(this, "_apiList", {
      'CreateProject': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-07-31',
            'Action': 'CreateProject'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'ProjectName': 'String',
          'Description': 'String',
          'IamProjectId': 'Int'
        }
      },
      'DescribeProject': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-07-31',
            'Action': 'DescribeProject'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'ProjectName': 'String'
        }
      },
      'UpdateProject': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-07-31',
            'Action': 'UpdateProject'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'ProjectName': 'String',
          'Description': 'String',
          'IamProjectId': 'Int'
        }
      },
      'DeleteProject': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-07-31',
            'Action': 'DeleteProject'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'ProjectName': 'String'
        }
      },
      'ListProjects': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-07-31',
            'Action': 'ListProjects'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'ProjectName': 'String',
          'Description': 'String',
          'Page': 'Int',
          'Size': 'Int'
        }
      },
      'CreateLogPool': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-07-31',
            'Action': 'CreateLogPool'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'ProjectName': 'String',
          'LogPoolName': 'String',
          'RetentionDays': 'Int',
          'Partitions': 'Int',
          'Description': 'String'
        }
      },
      'DescribeLogPool': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-07-31',
            'Action': 'DescribeLogPool'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'ProjectName': 'String',
          'LogPoolName': 'String'
        }
      },
      'UpdateLogPool': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-07-31',
            'Action': 'UpdateLogPool'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'ProjectName': 'String',
          'LogPoolName': 'String',
          'LogPoolId': 'String',
          'RetentionDays': 'Int',
          'Partitions': 'Int',
          'Description': 'String',
          'Config': 'Object'
        }
      },
      'DeleteLogPool': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-07-31',
            'Action': 'DeleteLogPool'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'ProjectName': 'String',
          'LogPoolId': 'String'
        }
      },
      'ListLogPools': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-07-31',
            'Action': 'ListLogPools'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'ProjectName': 'String',
          'LogPoolName': 'String',
          'Page': 'Int',
          'Size': 'Int',
          'Tags': 'Object'
        }
      },
      'GetLogs': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-07-31',
            'Action': 'GetLogs'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'ProjectName': 'String',
          'LogPoolName': 'String',
          'LogPoolId': 'String',
          'From': 'Int',
          'To': 'Int',
          'Query': 'String',
          'Offset': 'Int',
          'Size': 'Int',
          'HitsOpen': 'Boolean',
          'Interval': 'String'
        }
      },
      'CreateQuickSearch': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-07-31',
            'Action': 'CreateQuickSearch'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'ProjectName': 'String',
          'LogPoolName': 'String',
          'QuickSearchName': 'String',
          'Query': 'String',
          'Description': 'String',
          'TimeRange': 'String'
        }
      },
      'ListQuickSearchs': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-07-31',
            'Action': 'ListQuickSearchs'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'ProjectName': 'String',
          'LogPoolName': 'String',
          'Filter': 'String',
          'Page': 'Int',
          'Size': 'Int'
        }
      },
      'DeleteQuickSearchs': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-07-31',
            'Action': 'DeleteQuickSearchs'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'ProjectName': 'String',
          'LogPoolName': 'String',
          'QuickSearchName': 'String'
        }
      },
      'CreateDownloadTask': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-07-31',
            'Action': 'CreateDownloadTask'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'ProjectName': 'String',
          'LogPoolNames': 'String',
          'Config': 'Object'
        }
      },
      'ListDownloadTasks': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-07-31',
            'Action': 'ListDownloadTasks'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'ProjectName': 'String',
          'Page': 'String',
          'Size': 'String'
        }
      }
    });
  }
};