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
      'endpoint': 'kmr.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'kmr'
        }
      }
    });
    _defineProperty(this, "_apiList", {
      'DetailWorkspace': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2024-08-14',
            'Action': 'DetailWorkspace'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'WorkspaceId': 'String'
        }
      },
      'ListWorkspaces': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2024-08-14',
            'Action': 'ListWorkspaces'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'NameOrId': 'String',
          'Status': 'Array',
          'PageNumber': 'Int',
          'PageSize': 'Int'
        }
      },
      'StartJobRun': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2024-08-14',
            'Action': 'StartJobRun'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'WorkspaceId': 'String',
          'AccessKeyId': 'String',
          'AccessKeySecret': 'String',
          'ReleaseVersion': 'String',
          'SparkSubmitData': 'Object'
        }
      },
      'GetJobRun': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2024-08-14',
            'Action': 'GetJobRun'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'WorkspaceId': 'String',
          'JobRunId': 'String'
        }
      },
      'ListJobRuns': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2024-08-14',
            'Action': 'ListJobRuns'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'WorkspaceId': 'String',
          'MaxResults': 'Int'
        }
      },
      'CancelJobRun': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2024-08-14',
            'Action': 'CancelJobRun'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'WorkspaceId': 'String',
          'JobRunIds': 'Array'
        }
      },
      'ListExecutor': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2024-08-14',
            'Action': 'ListExecutor'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'WorkspaceId': 'String',
          'JobRunId': 'String',
          'PageNumber': 'Int',
          'PageSize': 'Int'
        }
      },
      'StartRayJobRun': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2024-08-14',
            'Action': 'StartRayJobRun'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'WorkspaceId': 'String',
          'AccessKeyId': 'String',
          'AccessKeySecret': 'String',
          'ReleaseVersion': 'String',
          'RaySubmitData': 'Object'
        }
      },
      'GetRayJobRun': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2024-08-14',
            'Action': 'GetRayJobRun'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'WorkspaceId': 'String',
          'JobRunId': 'String'
        }
      },
      'ListRayJobRuns': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2024-08-14',
            'Action': 'ListRayJobRuns'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'WorkspaceId': 'String',
          'NameOrId': 'String',
          'Status': 'Array',
          'PageNumber': 'Int',
          'PageSize': 'Int'
        }
      },
      'CancelRayJobRun': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2024-08-14',
            'Action': 'CancelRayJobRun'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'WorkspaceId': 'String',
          'JobRunIds': 'Array'
        }
      },
      'StartFlinkJobRun': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2024-08-14',
            'Action': 'StartFlinkJobRun'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'WorkspaceId': 'String',
          'AccessKeyId': 'String',
          'AccessKeySecret': 'String',
          'ReleaseVersion': 'String',
          'SubmitData': 'Object'
        }
      },
      'GetFlinkJobRun': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2024-08-14',
            'Action': 'GetFlinkJobRun'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'WorkspaceId': 'String',
          'JobRunId': 'String'
        }
      },
      'ListFlinkJobRuns': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2024-08-14',
            'Action': 'ListFlinkJobRuns'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'WorkspaceId': 'String',
          'NameOrId': 'String',
          'Status': 'Array',
          'PageNumber': 'Int',
          'PageSize': 'Int'
        }
      },
      'CancelFlinkJobRun': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2024-08-14',
            'Action': 'CancelFlinkJobRun'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'WorkspaceId': 'String',
          'JobRunIds': 'Array'
        }
      },
      'SuspendFlinkJobRun': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2024-08-14',
            'Action': 'SuspendFlinkJobRun'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'WorkspaceId': 'String',
          'JobRunId': 'String'
        }
      },
      'RestartFlinkJobRun': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2024-08-14',
            'Action': 'RestartFlinkJobRun'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'WorkspaceId': 'String',
          'JobRunId': 'String'
        }
      },
      'DescribeMetricList': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2024-08-14',
            'Action': 'DescribeMetricList'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'WorkspaceId': 'String',
          'ProductType': 'String'
        }
      },
      'QueryMetrics': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2024-08-14',
            'Action': 'QueryMetrics'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'WorkspaceId': 'String',
          'ProductType': 'String',
          'QueryData': 'Object'
        }
      }
    });
  }
};