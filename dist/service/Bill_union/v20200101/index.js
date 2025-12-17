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
      endpoint: "bill-union.api.ksyun.com",
      config: {
        timeout: 60,
        //设置timeout
        headers: {
          Accept: "application/json"
        },
        credentials: {
          region: "cn-shanghai-3",
          service: "bill-union"
        }
      }
    });
    _defineProperty(this, "_apiList", {
      DescribeBillSummaryByPayMode: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2020-01-01",
            Action: "DescribeBillSummaryByPayMode"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          BillBeginMonth: "String",
          BillEndMonth: "String",
          SubAccount: "Int",
          FetchAllFinanceRelationData: "Boolean"
        }
      },
      DescribeBillSummaryByProduct: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2020-01-01",
            Action: "DescribeBillSummaryByProduct"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          BillBeginMonth: "String",
          BillEndMonth: "String",
          SubAccount: "Int",
          FetchAllFinanceRelationData: "Boolean"
        }
      },
      DescribeBillSummaryByProject: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2020-01-01",
            Action: "DescribeBillSummaryByProject"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          BillBeginMonth: "String",
          BillEndMonth: "String",
          SubAccount: "Int",
          FetchAllFinanceRelationData: "Boolean"
        }
      },
      DescribeInstanceSummaryBills: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2020-01-01",
            Action: "DescribeInstanceSummaryBills"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          BillMonth: "String",
          ProductCode: "String",
          Page: "Int",
          Size: "Int"
        }
      },
      DescribeProductCode: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2020-01-01",
            Action: "DescribeProductCode"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {}
      },
      DescribeSplitItemBillDetails: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2020-01-01",
            Action: "DescribeSplitItemBillDetails"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          CustomerBillMonth: "Int",
          ProductGroupCode: "String",
          StatisticType: "Int",
          PayType: "Int",
          SubAccountId: "Int",
          Page: "Int",
          Size: "String"
        }
      },
      DescribeMiItemBills: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2020-01-01",
            Action: "DescribeMiItemBills"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          BillMonth: "String"
        }
      },
      DescribeSplitItemDayBillDetails: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2020-01-01",
            Action: "DescribeSplitItemDayBillDetails"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          CustomerBillMonth: "Int",
          ProductGroupCode: "String",
          StatisticType: "Int",
          PayType: "Int",
          SubAccountId: "Int",
          Page: "Int",
          Size: "Int"
        }
      },
      ListProductGroups: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2020-01-01",
            Action: "ListProductGroups"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {}
      }
    });
  }
};