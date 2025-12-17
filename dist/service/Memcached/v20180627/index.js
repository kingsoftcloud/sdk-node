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
      endpoint: "memcached.api.ksyun.com",
      config: {
        timeout: 60,
        //设置timeout
        headers: {
          Accept: "application/json"
        },
        credentials: {
          region: "cn-shanghai-3",
          service: "memcached"
        }
      }
    });
    _defineProperty(this, "_apiList", {
      CreateCacheCluster: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2018-06-27",
            Action: "CreateCacheCluster"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Name: "String",
          Capacity: "String",
          SlaveNum: "String",
          NetType: "String",
          VpcId: "String",
          VnetId: "String",
          BillType: "String",
          Duration: "String",
          DurationUnit: "String",
          PassWord: "String",
          IamProjectId: "String",
          Engine: "String"
        }
      },
      DeleteCacheCluster: {
        url: "/",
        method: "DELETE",
        config: {
          query: {
            Version: "2018-06-27",
            Action: "DeleteCacheCluster"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {}
      },
      ResizeCacheCluster: {
        url: "/",
        method: "PUT",
        config: {
          query: {
            Version: "2018-06-27",
            Action: "ResizeCacheCluster"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          CacheId: "String",
          Capacity: "String",
          Engine: "String"
        }
      },
      DescribeCacheClusters: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2018-06-27",
            Action: "DescribeCacheClusters"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Engine: "String",
          CacheId: "String",
          Name: "String",
          Vip: "String",
          VpcId: "String",
          VnetId: "String",
          Offset: "String",
          Limit: "String",
          OrderBy: "String",
          IamProjectId: "String"
        }
      },
      DescribeCacheCluster: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2018-06-27",
            Action: "DescribeCacheCluster"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          CacheId: "String",
          Engine: "String"
        }
      },
      FlushCacheCluster: {
        url: "/",
        method: "PUT",
        config: {
          query: {
            Version: "2018-06-27",
            Action: "FlushCacheCluster"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {}
      },
      RenameCacheCluster: {
        url: "/",
        method: "PUT",
        config: {
          query: {
            Version: "2018-06-27",
            Action: "RenameCacheCluster"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          CacheId: "String",
          Name: "String",
          Engine: "String"
        }
      },
      UpdatePassword: {
        url: "/",
        method: "PUT",
        config: {
          query: {
            Version: "2018-06-27",
            Action: "UpdatePassword"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          CacheId: "String",
          Password: "String",
          Engine: "String"
        }
      },
      DescribeCacheSecurityRules: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2018-06-27",
            Action: "DescribeCacheSecurityRules"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {}
      },
      DeleteCacheSecurityRule: {
        url: "/",
        method: "DELETE",
        config: {
          query: {
            Version: "2018-06-27",
            Action: "DeleteCacheSecurityRule"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {}
      },
      SetCacheSecurityRules: {
        url: "/",
        method: "PUT",
        config: {
          query: {
            Version: "2018-06-27",
            Action: "SetCacheSecurityRules"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {}
      },
      DescribeRegions: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2018-06-27",
            Action: "DescribeRegions"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {}
      },
      DescribeAvailabilityZones: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2018-06-27",
            Action: "DescribeAvailabilityZones"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {}
      }
    });
  }
};