"use strict";

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const BaseClient = require("../../../base/BaseClient.js");
module.exports = class Client extends BaseClient {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "_baseConfig", {
      'protocol': 'http://',
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
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'Key': 'String',
          'Value': 'String'
        }
      },
      'DeleteTag': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2020-09-01',
            'Action': 'DeleteTag'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'Tags': 'Array'
        }
      },
      'ListTags': {
        'url': '/',
        'method': 'GET',
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
        'method': 'GET',
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
        'method': 'GET',
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
            'Content-Type': 'application/json'
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
      'ListTagsByResourceIds': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2020-09-01',
            'Action': 'ListTagsByResourceIds'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ResourceType': 'String',
          'ResourceUuids': 'String'
        }
      },
      'ReplaceResourcesTags': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2020-09-01',
            'Action': 'ReplaceResourcesTags'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'ResourceType': 'String',
          'ReplaceTags': 'Array'
        }
      },
      'DetachResourceTags': {
        'url': '/',
        'method': 'GET',
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
      },
      'CreateTagAndAttachResource': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2020-09-01',
            'Action': 'CreateTagAndAttachResource'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'TagKey': 'String',
          'TagValue': 'String',
          'ResourceType': 'String',
          'ResourceUuid': 'String'
        }
      }
    });
  }
};