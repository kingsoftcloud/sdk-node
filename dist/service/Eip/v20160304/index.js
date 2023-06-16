"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_baseConfig", {
      'protocol': 'http://',
      'endpoint': 'eip.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'eip'
        }
      }
    });

    _defineProperty(this, "_apiList", {
      'GetLines': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'GetLines'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {}
      },
      'DescribeAddresses': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribeAddresses'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ProjectId': 'Filter',
          'AllocationId': 'Filter',
          'Filter': 'Filter',
          'MaxResults': 'Int',
          'NextToken': 'String',
          'State': 'String',
          'IpVersion': 'String'
        }
      },
      'AllocateAddress': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'AllocateAddress'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'LineId': 'String',
          'BandWidth': 'Int',
          'ProjectId': 'String',
          'ChargeType': 'String',
          'PurchaseTime': 'Int'
        }
      },
      'ReleaseAddress': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'ReleaseAddress'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'AllocationId': 'String'
        }
      },
      'AssociateAddress': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'AssociateAddress'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'AllocationId': 'String',
          'InstanceType': 'String',
          'InstanceId': 'String',
          'NetworkInterfaceId': 'String',
          'Mode': 'String',
          'PrivateIpAddress': 'String'
        }
      },
      'DisassociateAddress': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DisassociateAddress'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'AllocationId': 'String'
        }
      },
      'ModifyAddress': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'ModifyAddress'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'AllocationId': 'String',
          'BandWidth': 'Int'
        }
      }
    });
  }

};