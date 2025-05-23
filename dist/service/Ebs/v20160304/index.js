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
      'endpoint': 'ebs.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'ebs'
        }
      }
    });
    _defineProperty(this, "_apiList", {
      'CreateVolume': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'CreateVolume'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'VolumeName': 'String',
          'VolumeType': 'String',
          'VolumeDesc': 'String',
          'Size': 'Int',
          'AvailabilityZone': 'String',
          'ChargeType': 'String',
          'PurchaseTime': 'Int',
          'ProjectId': 'String',
          'SubOrderId': 'String'
        }
      },
      'AttachVolume': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'AttachVolume'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'VolumeId': 'String',
          'InstanceId': 'String',
          'DeleteWithInstance': 'String'
        }
      },
      'DetachVolume': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DetachVolume'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'VolumeId': 'String'
        }
      },
      'DeleteVolume': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DeleteVolume'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'VolumeId': 'String',
          'ForceDelete': 'Boolean'
        }
      },
      'ResizeVolume': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'ResizeVolume'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'VolumeId': 'String',
          'Size': 'String',
          'OnlineResize': 'Boolean',
          'SubOrderId': 'String'
        }
      },
      'DescribeVolumes': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribeVolumes'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'VolumeId': 'Filter',
          'VolumeCategory': 'String',
          'VolumeStatus': 'String',
          'VolumeType': 'String',
          'VolumeCreateDate': 'String',
          'Marker': 'Int',
          'MaxResults': 'Int'
        }
      },
      'ModifyVolume': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'ModifyVolume'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'VolumeId': 'String',
          'VolumeName': 'String',
          'VolumeDesc': 'String',
          'DeleteWithInstance': 'String'
        }
      },
      'DescribeEbsInstances': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribeEbsInstances'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'AvailabilityZone': 'String',
          'VolumeType': 'String'
        }
      },
      'DescribeInstanceVolumes': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribeInstanceVolumes'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String'
        }
      },
      'RenewVolume': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'RenewVolume'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'VolumeId': 'String',
          'PurchaseTime': 'Int'
        }
      },
      'UpdateVolumeProject': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'UpdateVolumeProject'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'VolumeId': 'Filter',
          'ProjectId': 'String'
        }
      },
      'DescribeSnapshots': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribeSnapshots'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'VolumeId': 'String',
          'VolumeCategory': 'String',
          'SnapshotId': 'String',
          'AvailabilityZone': 'String',
          'SnapshotName': 'String',
          'PageNumber': 'Int',
          'PageSize': 'Int'
        }
      },
      'CreateSnapshot': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'CreateSnapshot'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'VolumeId': 'String',
          'SnapshotName': 'String',
          'SnapshotDesc': 'String',
          'SnapshotType': 'String'
        }
      },
      'DeleteSnapshot': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DeleteSnapshot'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'SnapshotId': 'String'
        }
      },
      'RollbackSnapshot': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'RollbackSnapshot'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'VolumeId': 'String',
          'SnapshotId': 'String'
        }
      },
      'ModifySnapshot': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'ModifySnapshot'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'SnapshotId': 'String',
          'SnapshotName': 'String',
          'SnapshotDesc': 'String'
        }
      },
      'RecoveryVolume': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'RecoveryVolume'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'VolumeId': 'String'
        }
      },
      'ValidateAttachInstance': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'ValidateAttachInstance'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'VolumeType': 'String',
          'InstanceId': 'String'
        }
      },
      'DescribeCreateVolumePrice': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribeCreateVolumePrice'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'VolumeType': 'String',
          'Size': 'Int',
          'AvailabilityZone': 'String',
          'ChargeType': 'String',
          'PurchaseTime': 'Int'
        }
      }
    });
  }
};