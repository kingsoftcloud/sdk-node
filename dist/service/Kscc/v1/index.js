"use strict";

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const BaseClient = require("../../../base/BaseClient.js");
module.exports = class Client extends BaseClient {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "_baseConfig", {
      protocol: "http://",
      endpoint: "kscc.api.ksyun.com",
      config: {
        timeout: 60,
        //设置timeout
        headers: {
          Accept: "application/json"
        },
        credentials: {
          region: "cn-shanghai-3",
          service: "kscc"
        }
      }
    });
    _defineProperty(this, "_apiList", {
      UpdateUserQuota: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "V1",
            Action: "UpdateUserQuota"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          UserName: "String",
          QuotaAmount: "Double"
        }
      },
      DescribeUserCostSummary: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "V1",
            Action: "DescribeUserCostSummary"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          UserName: "String",
          Month: "String"
        }
      },
      DescribeAiLogDetailByIds: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "V1",
            Action: "DescribeAiLogDetailByIds"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          MessageIds: "String"
        }
      },
      DescribeAiLogDetail: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "V1",
            Action: "DescribeAiLogDetail"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          StartTime: "String",
          EndTime: "String",
          UserName: "String",
          ModelList: "String",
          Page: "Int",
          Size: "Int"
        }
      },
      DescribeOrganizationTree: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "V1",
            Action: "DescribeOrganizationTree"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {}
      },
      DescribeModelMetrics: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "V1",
            Action: "DescribeModelMetrics"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          StartTime: "String",
          EndTime: "String",
          ModelName: "String",
          TimeInterval: "String"
        }
      },
      DescribeUserTokenUsage: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "V1",
            Action: "DescribeUserTokenUsage"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          StartTime: "String",
          EndTime: "String",
          UserName: "String",
          Department: "String"
        }
      },
      DescribeUserQuotaList: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "V1",
            Action: "DescribeUserQuotaList"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Keyword: "String",
          PageNum: "Int",
          PageSize: "Int",
          Month: "String",
          SortKey: "String",
          SortType: "String"
        }
      },
      DescribeQuotaGlobalConfig: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "V1",
            Action: "DescribeQuotaGlobalConfig"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {}
      },
      UpdateQuotaGlobalConfig: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "V1",
            Action: "UpdateQuotaGlobalConfig"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          WarnThreshold: "Int",
          Discount: "Double",
          ContactsJson: "String",
          AccountEnabled: "Int",
          DeptEnabled: "Int",
          MemberEnabled: "Int",
          DefaultMemberQuota: "Double"
        }
      },
      DescribeAccountQuota: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "V1",
            Action: "DescribeAccountQuota"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {}
      },
      UpdateAccountQuota: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "V1",
            Action: "UpdateAccountQuota"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          QuotaAmount: "Double"
        }
      },
      DeleteAccountQuota: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "V1",
            Action: "DeleteAccountQuota"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {}
      },
      UpdateDefaultMemberQuota: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "V1",
            Action: "UpdateDefaultMemberQuota"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DefaultMemberQuota: "Double"
        }
      },
      DeleteDefaultMemberQuota: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "V1",
            Action: "DeleteDefaultMemberQuota"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {}
      },
      DescribeDeptQuotaList: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "V1",
            Action: "DescribeDeptQuotaList"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Keyword: "String",
          PageNum: "Int",
          PageSize: "Int",
          SortKey: "String",
          SortType: "String"
        }
      },
      UpdateDeptQuota: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "V1",
            Action: "UpdateDeptQuota"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DeptId: "String",
          QuotaAmount: "Double"
        }
      },
      DeleteDeptQuota: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "V1",
            Action: "DeleteDeptQuota"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DeptId: "String"
        }
      },
      DeleteUserQuota: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "V1",
            Action: "DeleteUserQuota"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          UserName: "String"
        }
      },
      DescribeSharedOrganizationTree: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "V1",
            Action: "DescribeSharedOrganizationTree"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {}
      },
      DescribeSharedUserPointUsage: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "V1",
            Action: "DescribeSharedUserPointUsage"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          StartTime: "String",
          EndTime: "String",
          UserName: "String",
          Department: "String"
        }
      }
    });
  }
};