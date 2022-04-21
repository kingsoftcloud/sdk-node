"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_baseConfig", {
      'protocol': 'http://',
      'endpoint': 'actiontrail.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'actiontrail'
        }
      }
    });

    _defineProperty(this, "_apiList", {
      'ListOperateLogs': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2019-04-01',
            'Action': 'ListOperateLogs'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'EventName': 'String',
          'EventRw': 'String',
          'ServiceName': 'String',
          'UserName': 'String',
          'AccessKey': 'String',
          'EventBeginDate': 'String',
          'EventEndDate': 'String',
          'ResourceType': 'String',
          'ResourceName': 'String',
          'Page': 'String',
          'PageSize': 'String',
          'SearchAfter': 'String'
        }
      }
    });
  }

};