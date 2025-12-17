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
      endpoint: "kce.api.ksyun.com",
      config: {
        timeout: 60,
        //设置timeout
        headers: {
          Accept: "application/json"
        },
        credentials: {
          region: "cn-shanghai-3",
          service: "kce"
        }
      }
    });
    _defineProperty(this, "_apiList", {
      CreateRepoNamespace: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2018-03-14",
            Action: "CreateRepoNamespace"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Namespace: "String",
          Public: "String"
        }
      },
      DescribeRepoNamespace: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2018-03-14",
            Action: "DescribeRepoNamespace"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Namespace: "String",
          MaxResults: "String",
          Marker: "String",
          Filter: "Filter"
        }
      },
      ModifyRepoNamespaceType: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2018-03-14",
            Action: "ModifyRepoNamespaceType"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Namespace: "String",
          Public: "Boolean"
        }
      },
      RepoNamespaceExist: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2018-03-14",
            Action: "RepoNamespaceExist"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Namespace: "String"
        }
      },
      CreateRepository: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2018-03-14",
            Action: "CreateRepository"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          RepoName: "String",
          Description: "String"
        }
      },
      DeleteRepository: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2018-03-14",
            Action: "DeleteRepository"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          RepoName: "String"
        }
      },
      DescribeRepository: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2018-03-14",
            Action: "DescribeRepository"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          RepoName: "Filter",
          MaxResults: "Int",
          Marker: "Int",
          Filter: "Filter"
        }
      },
      DescribePublicRepository: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2018-03-14",
            Action: "DescribePublicRepository"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          RepoName: "Filter",
          MaxResults: "Int",
          Marker: "Int",
          Filter: "Filter"
        }
      },
      UpdateRepoDesc: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2018-03-14",
            Action: "UpdateRepoDesc"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          RepoName: "String",
          Description: "String"
        }
      },
      DescribeTag: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2018-03-14",
            Action: "DescribeTag"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          RepoName: "String",
          MaxResults: "String",
          Marker: "String",
          Filter: "Filter"
        }
      },
      DeleteTags: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2018-03-14",
            Action: "DeleteTags"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          RepoName: "String",
          Tag: "Filter"
        }
      },
      AddFavor: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2018-03-14",
            Action: "AddFavor"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          RepoName: "String",
          RepoType: "String"
        }
      },
      DeleteFavor: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2018-03-14",
            Action: "DeleteFavor"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          RepoName: "String"
        }
      },
      GetFavor: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2018-03-14",
            Action: "GetFavor"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          MaxResults: "Int",
          Marker: "Int",
          Keyword: "String"
        }
      },
      RegisterRepositoryAccount: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2018-03-14",
            Action: "RegisterRepositoryAccount"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Password: "String"
        }
      },
      ModifyPassword: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2018-03-14",
            Action: "ModifyPassword"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Password: "String"
        }
      },
      DeleteRepoNamespace: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2018-03-14",
            Action: "DeleteRepoNamespace"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Namespace: "String"
        }
      }
    });
  }
};