"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_baseConfig", {
      'protocol': 'http://',
      'endpoint': 'kead.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'kead'
        }
      }
    });

    _defineProperty(this, "_apiList", {
      'DescribeBlockIp': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2020-01-01',
            'Action': 'DescribeBlockIp'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'SearchStr': 'String',
          'Status': 'String',
          'InstanceType': 'String',
          'RegionCode': 'String',
          'StartTime': 'String',
          'endTime': 'String'
        }
      }
    });
  }

};