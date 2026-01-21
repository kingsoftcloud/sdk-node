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
      endpoint: "kce2.api.ksyun.com",
      config: {
        timeout: 60,
        //设置timeout
        headers: {
          Accept: "application/json"
        },
        credentials: {
          region: "cn-shanghai-3",
          service: "kce2"
        }
      }
    });
    _defineProperty(this, "_apiList", {
      CreateCluster: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2023-01-01",
            Action: "CreateCluster"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          ClusterName: "String",
          ClusterDesc: "String",
          ClusterManageMode: "String",
          ProjectId: "String",
          KubernetesVersion: "String",
          Network: "Object",
          NodeInstanceSet: "Array",
          Addons: "Array"
        }
      },
      DescribeClusters: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2023-01-01",
            Action: "DescribeClusters"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          ClusterIds: "Array",
          MaxResults: "Int",
          Marker: "Int"
        }
      },
      DeleteCluster: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2023-01-01",
            Action: "DeleteCluster"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          InstanceDelete: "Boolean",
          SecurityGroupDelete: "Boolean",
          PrivateLbDelete: "Boolean",
          PublicLbDelete: "Boolean"
        }
      },
      ModifyCluster: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2023-01-01",
            Action: "ModifyCluster"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          ClusterDesc: "String",
          SANs: "Array",
          PublicApiServer: "Object",
          VpcCNI: "Object"
        }
      },
      DescribeNodes: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2023-01-01",
            Action: "DescribeNodes"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          KceNodeIds: "Array",
          Marker: "Int",
          MaxResults: "Int",
          InstanceIds: "Array"
        }
      },
      DeleteNode: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2023-01-01",
            Action: "DeleteNode"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          NodeIds: "Array",
          InstanceDelete: "Boolean",
          KceNodeIds: "String",
          InstanceIds: "Array"
        }
      },
      ModifyNode: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2023-01-01",
            Action: "ModifyNode"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusteId: "String",
          KceNodeId: "String",
          InstanceId: "String",
          Components: "Array"
        }
      },
      DescribeComponentList: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2023-01-01",
            Action: "DescribeComponentList"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          K8sVersion: "String"
        }
      },
      DescribeNodeComponents: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2023-01-01",
            Action: "DescribeNodeComponents"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          ClusterName: "String",
          NodeNames: "Array",
          NodeIds: "String",
          Marker: "Int",
          MaxResults: "Int"
        }
      },
      DescribeNetwork: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2023-01-01",
            Action: "DescribeNetwork"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          ClusterName: "String"
        }
      },
      DescribeComponentParams: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2023-01-01",
            Action: "DescribeComponentParams"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          Components: "Array",
          Marker: "Int",
          MaxResults: "Int"
        }
      },
      DescribeEventLogs: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2023-01-01",
            Action: "DescribeEventLogs"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          ClusterName: "String",
          NodeId: "String",
          NodeName: "String",
          Inner: "Boolean",
          Marker: "Int",
          MaxResults: "Int"
        }
      },
      DescribeClusterVersionList: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2023-01-01",
            Action: "DescribeClusterVersionList"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          K8sVersion: "String"
        }
      },
      AddKecNodes: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2023-01-01",
            Action: "AddKecNodes"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          NodeInstanceSet: "Object"
        }
      },
      AddEpcNodes: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2023-01-01",
            Action: "AddEpcNodes"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          NodeInstanceSet: "Array"
        }
      }
    });
  }
};