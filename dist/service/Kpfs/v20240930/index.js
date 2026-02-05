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
      endpoint: "kpfs.api.ksyun.com",
      config: {
        timeout: 60,
        //设置timeout
        headers: {
          Accept: "application/json"
        },
        credentials: {
          region: "cn-shanghai-3",
          service: "kpfs"
        }
      }
    });
    _defineProperty(this, "_apiList", {
      DescribeFileSystemList: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2024-09-30",
            Action: "DescribeFileSystemList"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Region: "String",
          FileSystemName: "String",
          FileSystemIds: "String",
          StoreClasses: "String",
          ProjectId: "String",
          PageNum: "Int",
          PageSize: "Int"
        }
      },
      DescribeDirQuotaList: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2024-09-30",
            Action: "DescribeDirQuotaList"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          FileSystemId: "String",
          StoreClass: "String",
          ClusterName: "String",
          FileSystemName: "String",
          DirPath: "String",
          FuzzySearch: "Boolean",
          PageSize: "Int",
          PageNum: "Int"
        }
      },
      DeleteDirQuota: {
        url: "/",
        method: "DELETE",
        config: {
          query: {
            Version: "2024-09-30",
            Action: "DeleteDirQuota"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          FileSystemId: "String",
          StoreClass: "String",
          ClusterName: "String",
          FileSystemName: "String",
          DirPath: "String"
        }
      },
      UpdateDirQuota: {
        url: "/",
        method: "PUT",
        config: {
          query: {
            Version: "2024-09-30",
            Action: "UpdateDirQuota"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          FileSystemId: "String",
          StoreClass: "String",
          ClusterName: "String",
          FileSystemName: "String",
          DirPath: "String",
          LogicalHardThreshold: "Long"
        }
      },
      CreateDirQuota: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2024-09-30",
            Action: "CreateDirQuota"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          FileSystemId: "String",
          StoreClass: "String",
          ClusterName: "String",
          FileSystemName: "String",
          DirPath: "String",
          LogicalHardThreshold: "Long"
        }
      },
      DescribeSubDirList: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2024-09-30",
            Action: "DescribeSubDirList"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          FileSystemId: "String",
          StoreClass: "String",
          ClusterName: "String",
          FileSystemName: "String",
          DirPath: "String",
          Name: "String",
          PageNum: "Int",
          PageSize: "Int"
        }
      },
      DeleteDir: {
        url: "/",
        method: "DELETE",
        config: {
          query: {
            Version: "2024-09-30",
            Action: "DeleteDir"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          FileSystemId: "String",
          StoreClass: "String",
          ClusterName: "String",
          FileSystemName: "String",
          DirPath: "String"
        }
      },
      UpdateDir: {
        url: "/",
        method: "PUT",
        config: {
          query: {
            Version: "2024-09-30",
            Action: "UpdateDir"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          FileSystemId: "String",
          StoreClass: "String",
          ClusterName: "String",
          FileSystemName: "String",
          DirPath: "String",
          FileSysPosixPermission: "Int",
          FileSysOwnerUserId: "Int",
          FileSysOwnerGroupId: "Int"
        }
      },
      CreateDir: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2024-09-30",
            Action: "CreateDir"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          FileSystemId: "String",
          StoreClass: "String",
          ClusterName: "String",
          FileSystemName: "String",
          DirPath: "String",
          FileSysOwnerUserId: "Int",
          FileSysOwnerGroupId: "Int",
          FileSysPosixPermission: "Int"
        }
      },
      DescribeDirQuota: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2024-09-30",
            Action: "DescribeDirQuota"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          FileSystemId: "String",
          StoreClass: "String",
          ClusterName: "String",
          FileSystemName: "String",
          DirPath: "String"
        }
      },
      UpdatePerformanceNfsAclIp: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2024-09-30",
            Action: "UpdatePerformanceNfsAclIp"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          NfsAclId: "String",
          Ips: "Array"
        }
      },
      RemovePerformanceNfsAclClient: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2024-09-30",
            Action: "RemovePerformanceNfsAclClient"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          NfsAclId: "String",
          Ips: "Array"
        }
      },
      AddPerformanceNfsAclClient: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2024-09-30",
            Action: "AddPerformanceNfsAclClient"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          NfsAclId: "String",
          Ips: "Array"
        }
      },
      DeletePerformanceOneNfsAcl: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2024-09-30",
            Action: "DeletePerformanceOneNfsAcl"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          NfsAclId: "String"
        }
      },
      SetPerformanceOneNfsAcl: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2024-09-30",
            Action: "SetPerformanceOneNfsAcl"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          FileSystemId: "String",
          ExportPath: "String",
          Ips: "Array",
          Desc: "String"
        }
      },
      DescribePerformanceOneNfsAclList: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2024-09-30",
            Action: "DescribePerformanceOneNfsAclList"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          FileSystemName: "String",
          NfsAclId: "String",
          PageNum: "Int",
          PageSize: "Int"
        }
      }
    });
  }
};