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
      'endpoint': 'resourcemanager.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'resourcemanager'
        }
      }
    });
    _defineProperty(this, "_apiList", {
      'CreateFolder': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-03-20',
            'Action': 'CreateFolder'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ParentId': 'String',
          'Name': 'String',
          'Desc': 'String'
        }
      },
      'DeleteFolder': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-03-20',
            'Action': 'DeleteFolder'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'FolderId': 'String'
        }
      },
      'UpdateFolder': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-03-20',
            'Action': 'UpdateFolder'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'FolderId': 'String',
          'ParentId': 'String',
          'Name': 'String',
          'Desc': 'String'
        }
      },
      'ListAccountsForParent': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-03-20',
            'Action': 'ListAccountsForParent'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'FolderId': 'String',
          'Search': 'String',
          'Page': 'Int',
          'PageSize': 'Int'
        }
      },
      'MoveAccount': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-03-20',
            'Action': 'MoveAccount'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'Ids': 'String',
          'FromFolderId': 'String',
          'ToFolderId': 'String'
        }
      },
      'UpdateAccount': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-03-20',
            'Action': 'UpdateAccount'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'MemberId': 'Int',
          'NewDisplayName': 'String',
          'FolderId': 'String'
        }
      },
      'ListAccounts': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-03-20',
            'Action': 'ListAccounts'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'PageNumber': 'Int',
          'PageSize': 'Int',
          'IsAll': 'Int'
        }
      },
      'ListFolders': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-03-20',
            'Action': 'ListFolders'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {}
      }
    });
  }
};