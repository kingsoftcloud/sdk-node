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
      endpoint: "aicp.api.ksyun.com",
      config: {
        timeout: 60,
        //设置timeout
        headers: {
          Accept: "application/json"
        },
        credentials: {
          region: "cn-shanghai-3",
          service: "aicp"
        }
      }
    });
    _defineProperty(this, "_apiList", {
      CreateSandboxTemplate: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2026-04-01",
            Action: "CreateSandboxTemplate"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          TemplateName: "String",
          Description: "String",
          TemplateCategory: "String",
          TemplateType: "String",
          Command: "String",
          Cpu: "Int",
          Memory: "Int",
          Ports: "Array",
          Envs: "Array",
          ImageConfig: "Object",
          SkillConfig: "Object",
          NetworkConfig: "Object",
          KlogConfig: "Object",
          KpfsMountConfig: "Object",
          Ks3MountConfig: "Object",
          AccessKey: "String",
          SecretAccessKey: "String",
          KecConfig: "Object",
          PreheatConfig: "Object",
          InstanceQuota: "Int"
        }
      },
      UpdateSandboxTemplate: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2026-04-01",
            Action: "UpdateSandboxTemplate"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          TemplateId: "String",
          TemplateName: "String",
          Description: "String",
          Envs: "Array",
          TemplateType: "String",
          TemplateCategory: "String",
          Command: "String",
          Ports: "Array",
          ImageConfig: "Object",
          SkillConfig: "Object",
          NetworkConfig: "Object",
          KlogConfig: "Object",
          KpfsMountConfig: "Object",
          Ks3MountConfig: "Object",
          AccessKey: "String",
          SecretAccessKey: "String",
          KecConfig: "Object",
          PreheatConfig: "Object",
          InstanceQuota: "Int",
          Cpu: "Int",
          Memory: "Int"
        }
      },
      DeleteSandboxInstance: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2026-04-01",
            Action: "DeleteSandboxInstance"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          InstanceIds: "Array"
        }
      },
      GetSandboxInstance: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2026-04-01",
            Action: "GetSandboxInstance"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          InstanceId: "String"
        }
      },
      GetSandboxInstanceList: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2026-04-01",
            Action: "GetSandboxInstanceList"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          TemplateId: "String",
          TemplateName: "String",
          PageNum: "Int",
          PageSize: "Int"
        }
      },
      GetSandboxTemplateList: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2026-04-01",
            Action: "GetSandboxTemplateList"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          TemplateType: "String",
          TemplateName: "String",
          PageNum: "Int",
          PageSize: "Int"
        }
      },
      StartSandboxInstance: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2026-04-01",
            Action: "StartSandboxInstance"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          TemplateId: "String",
          Timeout: "Int",
          Ks3MountConfig: "Object",
          KpfsMountConfig: "Object",
          AccessKey: "String",
          SecretAccessKey: "String",
          Envs: "Array"
        }
      },
      DeleteSandboxTemplate: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2026-04-01",
            Action: "DeleteSandboxTemplate"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          TemplateId: "String"
        }
      },
      GetSandboxTemplate: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2026-04-01",
            Action: "GetSandboxTemplate"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          TemplateId: "String"
        }
      },
      GetPublicImageList: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2026-04-01",
            Action: "GetPublicImageList"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {}
      },
      UpdateSandboxInstance: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2026-04-01",
            Action: "UpdateSandboxInstance"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          InstanceId: "String",
          Timeout: "Int"
        }
      }
    });
  }
};