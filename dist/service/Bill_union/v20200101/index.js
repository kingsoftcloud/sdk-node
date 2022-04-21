"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_baseConfig", {
      'protocol': 'http://',
      'endpoint': 'bill-union.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'bill-union'
        }
      }
    });

    _defineProperty(this, "_apiList", {
      'DescribeBillSummaryByPayMode': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2020-01-01',
            'Action': 'DescribeBillSummaryByPayMode'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {}
      },
      'DescribeBillSummaryByProduct': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2020-01-01',
            'Action': 'DescribeBillSummaryByProduct'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {}
      },
      'DescribeBillSummaryByProject': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2020-01-01',
            'Action': 'DescribeBillSummaryByProject'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'BillBeginMonth': 'String',
          'BillEndMonth': 'String'
        }
      },
      'DescribeInstanceSummaryBills': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2020-01-01',
            'Action': 'DescribeInstanceSummaryBills'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {}
      },
      'DescribeProductCode': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2020-01-01',
            'Action': 'DescribeProductCode'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {}
      },
      'DescribeSplitItemBillDetails': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2020-01-01',
            'Action': 'DescribeSplitItemBillDetails'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {}
      }
    });
  }

};