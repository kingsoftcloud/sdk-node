const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "bill-union.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "bill-union",
      },
    },
  };
  _apiList = {
    DescribeBillSummaryByPayMode: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-01-01",
          Action: "DescribeBillSummaryByPayMode",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        BillBeginMonth: "String",
        BillEndMonth: "String",
        SubAccount: "Int",
      },
    },
    DescribeBillSummaryByProduct: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-01-01",
          Action: "DescribeBillSummaryByProduct",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        BillBeginMonth: "String",
        BillEndMonth: "String",
        SubAccount: "Int",
        FetchAllFinanceRelationData: "Boolean",
      },
    },
    DescribeBillSummaryByProject: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-01-01",
          Action: "DescribeBillSummaryByProject",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        BillBeginMonth: "String",
        BillEndMonth: "String",
        SubAccount: "Int",
      },
    },
    DescribeInstanceSummaryBills: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-01-01",
          Action: "DescribeInstanceSummaryBills",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        BillMonth: "String",
        ProductCode: "String",
        Page: "Int",
        Size: "Int",
      },
    },
    DescribeProductCode: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-01-01",
          Action: "DescribeProductCode",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {},
    },
    DescribeSplitItemBillDetails: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-01-01",
          Action: "DescribeSplitItemBillDetails",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        CustomerBillMonth: "Int",
        ProductGroupCode: "String",
        StatisticType: "Int",
        PayType: "Int",
        SubAccountId: "Int",
        Page: "Int",
        Size: "String",
      },
    },
    DescribeMiItemBills: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-01-01",
          Action: "DescribeMiItemBills",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        BillMonth: "String",
      },
    },
    DescribeSplitItemDayBillDetails: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-01-01",
          Action: "DescribeSplitItemDayBillDetails",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        CustomerBillMonth: "Int",
        ProductGroupCode: "String",
        StatisticType: "Int",
        PayType: "Int",
        SubAccountId: "Int",
        Page: "Int",
        Size: "Int",
      },
    },
    ListProductGroups: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-01-01",
          Action: "ListProductGroups",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {},
    },
  };
};
