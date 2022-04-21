"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_baseConfig", {
      'protocol': 'http://',
      'endpoint': 'trade.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'trade'
        }
      }
    });

    _defineProperty(this, "_apiList", {
      'SetRenewal': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-08-31',
            'Action': 'SetRenewal'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'InstanceIds': 'String',
          'RenewStrategy': 'Int',
          'RenewDuration': 'Int'
        }
      }
    });
  }

};