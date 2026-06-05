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
      endpoint: "ket.api.ksyun.com",
      config: {
        timeout: 60,
        //设置timeout
        headers: {
          Accept: "application/json"
        },
        credentials: {
          region: "cn-shanghai-3",
          service: "ket"
        }
      }
    });
    _defineProperty(this, "_apiList", {
      Preset: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2017-01-01",
            Action: "Preset"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          UniqName: "String",
          App: "String",
          Preset: "String",
          Description: "String",
          Output: "String",
          Video: "String"
        }
      },
      UpdatePreset: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2017-01-01",
            Action: "UpdatePreset"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          UniqName: "String",
          App: "String",
          Preset: "String",
          Description: "String",
          Output: "String",
          Video: "String"
        }
      },
      DelPreset: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2017-01-01",
            Action: "DelPreset"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          UniqName: "String",
          App: "String",
          Preset: "String"
        }
      },
      GetPresetList: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2017-01-01",
            Action: "GetPresetList"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          UniqName: "String",
          App: "String"
        }
      },
      GetPresetDetail: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2017-01-01",
            Action: "GetPresetDetail"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          UniqName: "String",
          App: "String",
          Preset: "String"
        }
      },
      GetStreamTranList: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2017-01-01",
            Action: "GetStreamTranList"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          UniqName: "String",
          App: "String",
          StreamID: "String"
        }
      },
      StartLoop: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2017-01-01",
            Action: "StartLoop"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          UniqName: "String",
          App: "String",
          Preset: "String",
          StreamID: "String",
          SrcInfo: "Array",
          PubDomain: "String",
          TaskStartTime: "String",
          TaskStopTime: "String",
          LoopTimes: "Int"
        }
      },
      StopLoop: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2017-01-01",
            Action: "StopLoop"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          UniqName: "String",
          App: "String",
          StreamID: "String"
        }
      }
    });
  }
};