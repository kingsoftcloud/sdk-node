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
      'DescribeCostBill': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-12-09',
            'Action': 'DescribeCostBill'
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