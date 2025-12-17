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
      DescribeCluster: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2019-08-06",
            Action: "DescribeCluster"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          Marker: "Int",
          MaxResults: "String",
          Search: "String",
          Filter: "Filter"
        }
      },
      DescribeClusterInstance: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2019-08-06",
            Action: "DescribeClusterInstance"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          MaxResults: "Int",
          Marker: "Int",
          Filter: "Filter",
          Search: "String"
        }
      },
      DeleteCluster: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2019-08-06",
            Action: "DeleteCluster"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          InstanceDeleteMode: "String"
        }
      },
      DownloadClusterConfig: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2019-08-06",
            Action: "DownloadClusterConfig"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          IsPublic: "Boolean"
        }
      },
      ModifyClusterInfo: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2019-08-06",
            Action: "ModifyClusterInfo"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          ClusterName: "String",
          ClusterDesc: "String",
          EnableKMSE: "Boolean",
          ControlPlaneLog: "Object"
        }
      },
      DescribeInstanceImage: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2019-08-06",
            Action: "DescribeInstanceImage"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ImageId: "Filter"
        }
      },
      AddClusterInstances: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2019-08-06",
            Action: "AddClusterInstances"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          InstanceSet: "Filter"
        }
      },
      DeleteClusterInstances: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2019-08-06",
            Action: "DeleteClusterInstances"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          InstanceId: "Filter",
          InstanceDeleteMode: "String"
        }
      },
      DescribeEpcForCluster: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2019-08-06",
            Action: "DescribeEpcForCluster"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          InstanceId: "Filter",
          Filter: "Filter",
          Marker: "Int",
          MaxResults: "String"
        }
      },
      AddClusterEpcInstances: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2019-08-06",
            Action: "AddClusterEpcInstances"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          InstanceId: "Filter",
          EpcPara: "Filter",
          AdvancedSetting: "Object"
        }
      },
      DescribeExistedInstances: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2019-08-06",
            Action: "DescribeExistedInstances"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          InstanceId: "Filter",
          Marker: "Int",
          MaxResults: "String",
          Filter: "Filter",
          Search: "String"
        }
      },
      AddExistedInstances: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2019-08-06",
            Action: "AddExistedInstances"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          ExistedInstanceKecSet: "Filter"
        }
      },
      ForceRemoveClusterInstance: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2019-08-06",
            Action: "ForceRemoveClusterInstance"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          InstanceId: "Filter"
        }
      },
      CreateNodePool: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2019-08-06",
            Action: "CreateNodePool"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NodePoolName: "String",
          ClusterId: "String",
          EnableAutoScale: "Boolean",
          NodeTemplate: "Object",
          Label: "Filter",
          Taint: "Filter",
          MinSize: "Int",
          MaxSize: "Int",
          DesiredCapacity: "Int"
        }
      },
      DescribeNodePool: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2019-08-06",
            Action: "DescribeNodePool"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          NodePoolId: "Filter",
          Marker: "Int",
          MaxResults: "Int",
          NodePoolName: "String"
        }
      },
      DeleteNodePool: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2019-08-06",
            Action: "DeleteNodePool"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          NodePoolId: "Filter",
          InstanceDeleteMode: "Boolean"
        }
      },
      ModifyNodePool: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2019-08-06",
            Action: "ModifyNodePool"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          NodePoolId: "String",
          NodePoolName: "String",
          EnableAutoScale: "Boolean",
          MinSize: "Int",
          MaxSize: "Int",
          DesiredCapacity: "Int",
          Label: "Filter",
          Taint: "Filter",
          UpdateExistingNodes: "Boolean"
        }
      },
      ModifyNodeTemplate: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2019-08-06",
            Action: "ModifyNodeTemplate"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          NodePoolId: "String",
          NodeTemplate: "Object"
        }
      },
      ModifyNodePoolScaleUpPolicy: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2019-08-06",
            Action: "ModifyNodePoolScaleUpPolicy"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          ScaleUpPolicy: "String"
        }
      },
      ModifyNodePoolScaleDownPolicy: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2019-08-06",
            Action: "ModifyNodePoolScaleDownPolicy"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          MaxEmptyBulkDelete: "Int",
          ScaleDownDelayAfterAdd: "Int",
          ScaleDownEnabled: "Boolean",
          ScaleDownUnneededTime: "Int",
          ScaleDownUtilizationThreshold: "Int"
        }
      },
      AddClusterInstanceToNodePool: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2019-08-06",
            Action: "AddClusterInstanceToNodePool"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          NodePoolId: "String",
          InstanceIds: "Filter"
        }
      },
      ProtectedFromScaleDown: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2019-08-06",
            Action: "ProtectedFromScaleDown"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          NodePoolId: "String",
          InstanceIds: "Filter",
          ProtectedFromScaleDown: "Boolean"
        }
      },
      DeleteClusterInstancesFromNodePool: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2019-08-06",
            Action: "DeleteClusterInstancesFromNodePool"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ClusterId: "String",
          NodePoolId: "String",
          InstanceIds: "Filter",
          InstanceDeleteMode: "Boolean"
        }
      },
      DescribeEpcImage: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2019-08-06",
            Action: "DescribeEpcImage"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          ImageId: "Filter"
        }
      }
    });
  }
};