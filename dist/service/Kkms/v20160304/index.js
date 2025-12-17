"use strict";

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const BaseClient = require("../../../base/BaseClient.js");
module.exports = class Client extends BaseClient {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "_baseConfig", {
      protocol: "http://",
      endpoint: "kkms.api.ksyun.com",
      config: {
        timeout: 60,
        //设置timeout
        headers: {
          Accept: "application/json"
        },
        credentials: {
          region: "cn-shanghai-3",
          service: "kkms"
        }
      }
    });
    _defineProperty(this, "_apiList", {
      CreateKey: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "CreateKey"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          KeyName: "String",
          Description: "String",
          KeyUsage: "String",
          Origin: "String",
          ChargeType: "String"
        }
      },
      ModifyKey: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "ModifyKey"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          KeyId: "String",
          KeyName: "String",
          Description: "String"
        }
      },
      ModifyKeyState: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "ModifyKeyState"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          KeyId: "String",
          KeyState: "String"
        }
      },
      DeleteKey: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DeleteKey"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          KeyId: "String"
        }
      },
      DescribeKeys: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeKeys"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          KeyId: "Filter"
        }
      },
      Encrypt: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "Encrypt"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          KeyId: "String",
          Plaintext: "String"
        }
      },
      Decrypt: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "Decrypt"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          KeyId: "String",
          CiphertextBlob: "String"
        }
      },
      GenerateDataKey: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "GenerateDataKey"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          KeyId: "String",
          KeySpec: "String",
          NumberOfBytes: "Int"
        }
      }
    });
  }
};