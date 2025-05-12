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
      'endpoint': 'kls.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'kls'
        }
      }
    });
    _defineProperty(this, "_apiList", {
      'ListStreamDurations': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2017-01-01',
            'Action': 'ListStreamDurations'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'UniqueName': 'String',
          'App': 'String',
          'Pubdomain': 'String',
          'Stream': 'String',
          'StartUnixTime': 'Int',
          'EndUnixTime': 'Int'
        }
      },
      'ListHistoryPubStreamsErrInfo': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2017-01-01',
            'Action': 'ListHistoryPubStreamsErrInfo'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'UniqueName': 'String',
          'App': 'String',
          'Pubdomain': 'String',
          'Stream': 'String',
          'OrderTime': 'Int',
          'Marker': 'Int',
          'Limit': 'Int',
          'StartUnixTime': 'Int',
          'EndUnixTime': 'Int'
        }
      },
      'ListHistoryPubStreamsInfo': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2017-01-01',
            'Action': 'ListHistoryPubStreamsInfo'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'UniqueName': 'String',
          'App': 'String',
          'Pubdomain': 'String',
          'Stream': 'String',
          'OrderTime': 'Int',
          'Marker': 'Int',
          'Limit': 'Int',
          'StartUnixTime': 'Int',
          'EndUnixTime': 'Int'
        }
      },
      'ForbidStream': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2017-01-01',
            'Action': 'ForbidStream'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'UniqueName': 'String',
          'App': 'String',
          'Pubdomain': 'String',
          'Stream': 'String',
          'ForbidTillUnixTime': 'Int'
        }
      },
      'ResumeStream': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2017-01-01',
            'Action': 'ResumeStream'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'UniqueName': 'String',
          'App': 'String',
          'Pubdomain': 'String',
          'Stream': 'String'
        }
      },
      'GetBlacklist': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2017-01-01',
            'Action': 'GetBlacklist'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'UniqueName': 'String',
          'App': 'String',
          'Pubdomain': 'String'
        }
      },
      'CheckBlacklist': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2017-01-01',
            'Action': 'CheckBlacklist'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'UniqueName': 'String',
          'App': 'String',
          'Pubdomain': 'String',
          'Stream': 'String'
        }
      },
      'ListRealtimeStreamsInfo': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2017-01-01',
            'Action': 'ListRealtimeStreamsInfo'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'UniqueName': 'String',
          'App': 'String',
          'Stream': 'String',
          'DomainIds': 'String',
          'PullProtocol': 'String',
          'Type': 'String'
        }
      }
    });
  }
};