"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_baseConfig", {
      'protocol': 'http://',
      'endpoint': 'sks.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'sks'
        }
      }
    });

    _defineProperty(this, "_apiList", {
      'CreateKey': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2015-11-01',
            'Action': 'CreateKey'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {}
      },
      'ImportKey': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2015-11-01',
            'Action': 'ImportKey'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'KeyName': 'String',
          'PublicKey': 'String',
          'Description': 'String'
        }
      },
      'DeleteKey': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2015-11-01',
            'Action': 'DeleteKey'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'KeyId': 'String'
        }
      },
      'ModifyKey': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2015-11-01',
            'Action': 'ModifyKey'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'KeyName': 'String',
          'KeyId': 'String'
        }
      },
      'DescribeKeys': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2015-11-01',
            'Action': 'DescribeKeys'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'MaxResults': 'Int',
          'NextToken': 'String',
          'KeyId': 'Filter',
          'Filter': 'Filter'
        }
      }
    });
  }

};