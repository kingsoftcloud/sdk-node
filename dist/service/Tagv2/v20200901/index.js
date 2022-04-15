"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_baseConfig", {
      'protocol': 'https://',
      'endpoint': 'tagv2.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'tagv2'
        }
      }
    });

    _defineProperty(this, "_apiList", {
      'CreateTag': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-09-01',
            'Action': 'CreateTag'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'Key': 'String',
          'Value': 'String'
        }
      },
      'DeleteTag': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-09-01',
            'Action': 'DeleteTag'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'Tags': 'Array'
        }
      },
      'ListTags': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-09-01',
            'Action': 'ListTags'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'Page': 'Int',
          'PageSize': 'Int',
          'Key': 'String',
          'Value': 'String'
        }
      },
      'ListTagKeys': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-09-01',
            'Action': 'ListTagKeys'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'TagKey': 'String',
          'Page': 'Int',
          'PageSize': 'Int'
        }
      },
      'ListTagValues': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-09-01',
            'Action': 'ListTagValues'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'TagKeys': 'String',
          'Page': 'Int',
          'PageSize': 'Int'
        }
      },
      'ListResources': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-09-01',
            'Action': 'ListResources'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ResourceType': 'String',
          'ProjectIds': 'String',
          'RegionCodes': 'String',
          'ResourceUuids': 'String',
          'ResourceName': 'String',
          'TagFilters': 'Array',
          'Page': 'Int',
          'PageSize': 'Int'
        }
      },
      'ReplaceResourcesTags': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-09-01',
            'Action': 'ReplaceResourcesTags'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ResourceType': 'String',
          'ReplaceTags': 'Array'
        }
      },
      'DetachResourceTags': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2020-09-01',
            'Action': 'DetachResourceTags'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ResourceType': 'String',
          'ResourceUuid': 'String',
          'TagIds': 'String'
        }
      }
    });
  }

};