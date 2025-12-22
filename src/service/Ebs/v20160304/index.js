const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'ebs.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'ebs',
            },
        },
    }
    _apiList = {
        'CreateVolume': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'CreateVolume',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
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
                'SubOrderId': 'String',
                'SnapshotId': 'String',
                'ClusterId': 'String',
                'Tag': 'Filter',
                'ProvisionedIops': 'Int',
            }
        },
        'AttachVolume': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'AttachVolume',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'VolumeId': 'String',
                'InstanceId': 'String',
                'DeleteWithInstance': 'String',
            }
        },
        'DetachVolume': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DetachVolume',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
                'VolumeId': 'String',
            }
        },
        'DeleteVolume': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DeleteVolume',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'VolumeId': 'String',
                'ForceDelete': 'Boolean',
            }
        },
        'ResizeVolume': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ResizeVolume',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'VolumeId': 'String',
                'Size': 'String',
                'OnlineResize': 'Boolean',
                'SubOrderId': 'String',
            }
        },
        'DescribeVolumes': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeVolumes',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'VolumeId': 'Filter',
                'VolumeCategory': 'String',
                'VolumeStatus': 'String',
                'VolumeType': 'String',
                'VolumeCreateDate': 'String',
                'Marker': 'Int',
                'MaxResults': 'Int',
                'Tag.N.Key': 'String',
                'Tag.N.Value': 'String',
                'VolumeCreateEndDate': 'String',
                'VolumeCreateStartDate': 'String',
                'SourceSnapshotId': 'String',
            }
        },
        'ModifyVolume': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ModifyVolume',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'VolumeId': 'String',
                'VolumeName': 'String',
                'VolumeDesc': 'String',
                'DeleteWithInstance': 'String',
            }
        },
        'DescribeEbsInstances': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeEbsInstances',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'AvailabilityZone': 'String',
                'VolumeType': 'String',
            }
        },
        'DescribeInstanceVolumes': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeInstanceVolumes',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
            }
        },
        'RenewVolume': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'RenewVolume',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'VolumeId': 'String',
                'PurchaseTime': 'Int',
            }
        },
        'UpdateVolumeProject': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'UpdateVolumeProject',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'VolumeId': 'Filter',
                'ProjectId': 'String',
            }
        },
        'DescribeSnapshots': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeSnapshots',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'VolumeId': 'String',
                'VolumeCategory': 'String',
                'SnapshotId': 'String',
                'AvailabilityZone': 'String',
                'SnapshotName': 'String',
                'PageNumber': 'Int',
                'PageSize': 'Int',
            }
        },
        'CreateSnapshot': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'CreateSnapshot',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'VolumeId': 'String',
                'SnapshotName': 'String',
                'SnapshotDesc': 'String',
                'SnapshotType': 'String',
                'ScheduledDeleteTime': 'String',
            }
        },
        'DeleteSnapshot': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DeleteSnapshot',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
            }
        },
        'RollbackSnapshot': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'RollbackSnapshot',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
            }
        },
        'ModifySnapshot': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ModifySnapshot',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
            }
        },
        'RecoveryVolume': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'RecoveryVolume',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'VolumeId': 'String',
            }
        },
        'ValidateAttachInstance': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ValidateAttachInstance',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'VolumeType': 'String',
                'InstanceId': 'String',
            }
        },
        'DescribeAvailabilityZones': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeAvailabilityZones',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'VolumeType': 'String',
            }
        },
        'DescribeCreateVolumePrice': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeCreateVolumePrice',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'VolumeType': 'String',
                'Size': 'Int',
                'AvailabilityZone': 'String',
                'ChargeType': 'String',
                'PurchaseTime': 'Int',
            }
        },
        'ModifySnapshotType': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ModifySnapshotType',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'SnapshotIds': 'Array',
                'SnapshotId': 'String',
            }
        },
        'ModifyVolumeType': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ModifyVolumeType',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'VolumeId': 'String',
                'PerformanceVolumeSize': 'String',
                'PerformanceLevelVolumeCategory': 'String',
            }
        },
        'ModifyDedicatedBlockStorageClusterAttribute': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ModifyDedicatedBlockStorageClusterAttribute',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'DbscId': 'String',
                'DbscName': 'String',
                'AvailabilityZone': 'String',
                'DbscDesc': 'String',
            }
        },
        'ResizeDedicatedBlockStorageClusters': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ResizeDedicatedBlockStorageClusters',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'DbscId': 'String',
                'Size': 'Int',
                'AvailabilityZone': 'String',
            }
        },
        'DescribeDedicatedBlockStorageClusters': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeDedicatedBlockStorageClusters',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'AvailabilityZone': 'String',
                'DbscName': 'String',
                'Marker': 'Int',
                'MaxResults': 'Int',
                'DbscCreateDate': 'String',
                'DbscId': 'Filter',
            }
        },
        'CreateDedicatedBlockStorageCluster': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'CreateDedicatedBlockStorageCluster',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'DbscName': 'String',
                'DbscType': 'String',
                'Size': 'Int',
                'AvailabilityZone': 'String',
                'PurchaseTime': 'Int',
            }
        },
        'ModifyVolumePreset': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ModifyVolumePreset',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'VolumeId': 'String',
                'ProvisionedIops': 'Int',
            }
        },
        'GetUpgradeVolumeTypeProcessInfo': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'GetUpgradeVolumeTypeProcessInfo',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'VolumeId': 'Filter',
            }
        },
    }
}