const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'kec.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'kec',
            },
        },
    }
    _apiList = {
        'DescribeInstances': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeInstances',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'MaxResults': 'Int',
                'Marker': 'Int',
                'InstanceId': 'Filter',
                'ProjectId': 'Filter',
                'Filter': 'Filter',
                'Sort': 'String',
                'Search': 'String',
            }
        },
        'RunInstances': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'RunInstances',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ImageId': 'String',
                'DedicatedHostId': 'String',
                'InstanceConfigure.VCPU': 'String',
                'InstanceConfigure.MemoryGb': 'String',
                'InstanceType': 'String',
                'DataDiskGb': 'Int',
                'MaxCount': 'Int',
                'MinCount': 'Int',
                'SubnetId': 'String',
                'InstancePassword': 'String',
                'ChargeType': 'String',
                'PurchaseTime': 'Int',
                'SecurityGroupId': 'String',
                'PrivateIpAddress': 'String',
                'InstanceName': 'String',
                'InstanceNameSuffix': 'String',
                'ProjectId': 'Int',
                'DataDisk': 'Filter',
                'NetworkInterface': 'Filter',
                'Userdata': 'String',
                'SystemDisk.DiskType': 'String',
                'SystemDisk.DiskSize': 'Int',
                'ModelId': 'String',
                'ModelVersion': 'Int',
                'AssembledImageDataDiskType': 'String',
                'AutoCreateEbs': 'Boolean',
            }
        },
        'StartInstances': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'StartInstances',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceId': 'Filter',
            }
        },
        'StopInstances': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'StopInstances',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceId': 'Filter',
                'ForceStop': 'Boolean',
                'StoppedMode': 'String',
            }
        },
        'RebootInstances': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'RebootInstances',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceId': 'Filter',
                'ForceReboot': 'Boolean',
            }
        },
        'ModifyInstanceAttribute': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ModifyInstanceAttribute',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
                'InstanceName': 'String',
                'InstancePassword': 'String',
                'HostName': 'String',
                'RestartMode': 'String',
            }
        },
        'ModifyInstanceType': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ModifyInstanceType',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
                'InstanceType': 'String',
                'InstanceConfigure.VCPU': 'String',
                'InstanceConfigure.MemoryGb': 'String',
                'DataDiskGb': 'Int',
                'CrossInstanceMigrate': 'Boolean',
                'SystemDisk.DiskType': 'String',
                'DataDisk': 'Filter',
                'StopInstance': 'Boolean',
                'AutoRestart': 'Boolean',
                'SystemDisk.DiskSize': 'Int',
                'SystemDisk.ResizeType': 'String',
            }
        },
        'TerminateInstances': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'TerminateInstances',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceId': 'Filter',
                'ForceDelete': 'Boolean',
            }
        },
        'DescribeImages': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeImages',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ImageId': 'String',
                'ImageType': 'String',
            }
        },
        'ModifyImageAttribute': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ModifyImageAttribute',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ImageId': 'String',
                'Name': 'String',
                'OsVersion': 'String',
                'CloudInitSupport': 'Boolean',
            }
        },
        'ModifyInstanceImage': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ModifyInstanceImage',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
                'ImageId': 'String',
                'SystemDisk.DiskSize': 'Int',
                'InstancePassword': 'String',
                'KeyId': 'Filter',
                'KeepImageLogin': 'Boolean',
                'SystemDisk.DiskType': 'String',
                'SystemDisk.ResizeType': 'String',
                'UserData': 'String',
            }
        },
        'CreateImage': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'CreateImage',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
                'Name': 'String',
                'Type': 'String',
                'DataDiskIds': 'Filter',
                'SnapshotIds': 'Filter',
            }
        },
        'RemoveImages': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'RemoveImages',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ImageId': 'String',
            }
        },
        'ModifyNetworkInterfaceAttribute': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ModifyNetworkInterfaceAttribute',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
                'NetworkInterfaceId': 'String',
                'SubnetId': 'String',
                'SecurityGroupId': 'String',
                'PrivateIpAddress': 'String',
                'DNS1': 'String',
                'DNS2': 'String',
            }
        },
        'AttachNetworkInterface': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'AttachNetworkInterface',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
                'NetworkInterfaceId': 'String',
                'SubnetId': 'String',
                'SecurityGroupId': 'String',
                'PrivateIpAddress': 'String',
                'SecurityGroupIds': 'Array',
                'VpcIpv6': 'String',
                'MacAddress': 'String',
            }
        },
        'DetachNetworkInterface': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DetachNetworkInterface',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
                'NetworkInterfaceId': 'String',
            }
        },
        'DescribeLocalVolumes': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeLocalVolumes',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceName': 'String',
            }
        },
        'CreateLocalVolumeSnapshot': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'CreateLocalVolumeSnapshot',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'LocalVolumeId': 'String',
                'LocalVolumeSnapshotName': 'String',
                'LocalVolumeSnapshotDesc': 'String',
            }
        },
        'DescribeLocalVolumeSnapshots': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeLocalVolumeSnapshots',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'Action': 'String',
                'Version': 'String',
                'LocalVolumeName': 'String',
                'SourceLocalVolumeId': 'String',
            }
        },
        'RollbackLocalVolume': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'RollbackLocalVolume',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'LocalVolumeSnapshotId': 'String',
            }
        },
        'DeleteLocalVolumeSnapshot': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DeleteLocalVolumeSnapshot',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'LocalVolumeSnapshotId': 'Filter',
            }
        },
        'ModifyDataGuardGroups': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ModifyDataGuardGroups',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'DataGuardId': 'String',
                'DataGuardName': 'String',
            }
        },
        'DescribeDataGuardCapacity': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeDataGuardCapacity',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
            }
        },
        'CreateDataGuardGroup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'CreateDataGuardGroup',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'DataGuardName': 'String',
            }
        },
        'DeleteDataGuardGroups': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DeleteDataGuardGroups',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'DataGuardId': 'Filter',
            }
        },
        'DescribeDataGuardGroup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeDataGuardGroup',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'DataGuardId': 'String',
                'DataGuardName': 'String',
            }
        },
        'RemoveVmFromDataGuard': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'RemoveVmFromDataGuard',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'DataGuardId': 'String',
                'InstanceId': 'Filter',
            }
        },
        'CreateDedicatedHosts': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'CreateDedicatedHosts',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'DedicatedType': 'String',
                'Number': 'Int',
                'Name': 'String',
                'ChargeType': 'String',
                'PurchaseTime': 'Int',
                'InstanceNameSuffix': 'String',
                'DedicatedClusterId': 'String',
                'Tag': 'Filter',
            }
        },
        'RenameDedicatedHost': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'RenameDedicatedHost',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'DedicatedHostId': 'String',
                'NewDedicatedHostName': 'String',
            }
        },
        'DescribeDedicatedHosts': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeDedicatedHosts',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'DedicatedHostId': 'String',
                'search': 'String',
                'ProjectId': 'Filter',
            }
        },
        'DescribeScalingConfiguration': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeScalingConfiguration',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ScalingConfigurationName': 'String',
                'ScalingConfigurationId': 'Filter',
                'Marker': 'Int',
                'ProjectId': 'Filter',
                'MaxResults': 'Int',
            }
        },
        'CreateScalingConfiguration': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'CreateScalingConfiguration',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ScalingConfigurationName': 'String',
                'ImageId': 'String',
                'Password': 'String',
                'InstanceType': 'String',
                'ChargeType': 'String',
                'DataDiskGb': 'Int',
                'ProjectId': 'Int',
                'KeepImageLogin': 'Boolean',
                'KeyId': 'Filter',
                'DataDisk': 'Filter',
                'SystemDisk.DiskSize': 'String',
                'AddressBandWidth': 'Int',
                'BandWidthShareId': 'String',
                'LineId': 'String',
                'AddressProjectId': 'Int',
                'InstanceName': 'String',
                'InstanceNameSuffix': 'String',
                'UserData': 'String',
                'InstanceNameTimeSuffix': 'Boolean',
                'Tag': 'Filter',
                'SystemDisk.DiskType': 'String',
                'SystemDisk.ResizeType': 'String',
            }
        },
        'DeleteScalingConfiguration': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DeleteScalingConfiguration',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ScalingConfigurationId': 'Filter',
            }
        },
        'CreateScalingGroup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'CreateScalingGroup',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ScalingGroupName': 'String',
                'ScalingConfigurationId': 'String',
                'MinSize': 'String',
                'DesiredCapacity': 'Int',
                'RemovePolicy': 'String',
                'SubnetId': 'Filter',
                'SubnetStrategy': 'String',
                'SecurityGroupId': 'String',
                'Slb': 'Filter',
            }
        },
        'DescribeScalingGroup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeScalingGroup',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ScalingGroupId': 'Filter',
                'ScalingGroupName': 'String',
                'ScalingConfigurationId': 'String',
                'VpcId': 'String',
                'Marker': 'Int',
                'MaxResults': 'Int',
                'ScalingActivityId': 'Filter',
            }
        },
        'ModifyScalingGroup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ModifyScalingGroup',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ScalingGroupId': 'String',
                'MinSize': 'Int',
                'MaxSize': 'Int',
                'DesiredCapacity': 'Int',
                'RemovePolicy': 'String',
                'ScalingGroupName': 'String',
                'ScalingConfigurationId': 'String',
                'SubnetId': 'Filter',
                'SubnetStrategy': 'String',
                'Slb': 'Filter',
                'ContainerSubnetId': 'Filter',
            }
        },
        'SetKvmProtectedDetach': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'SetKvmProtectedDetach',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ScalingGroupId': 'String',
                'ScalingInstanceId': 'Filter',
                'ProtectedFromDetach': 'Int',
            }
        },
        'DescribeScalingInstance': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeScalingInstance',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ScalingGroupId': 'String',
                'ScalingInstanceId': 'Filter',
                'CreationType': 'String',
                'HealthStatus': 'String',
                'Marker': 'Int',
                'MaxResults': 'Int',
            }
        },
        'AttachInstance': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'AttachInstance',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ScalingGroupId': 'String',
                'ScalingInstanceId': 'Filter',
            }
        },
        'DetachInstance': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DetachInstance',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ScalingGroupId': 'String',
                'ScalingInstanceId': 'Filter',
            }
        },
        'DescribeScalingActivity': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeScalingActivity',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ScalingGroupId': 'String',
                'ScalingActivityId': 'Filter',
                'Marker': 'Int',
                'MaxResults': 'Int',
                'StartTime': 'String',
                'EndTime': 'String',
            }
        },
        'DeleteScalingGroup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DeleteScalingGroup',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ScalingGroupId': 'String',
            }
        },
        'DisableScalingGroup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DisableScalingGroup',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ScalingGroupId': 'String',
            }
        },
        'EnableScalingGroup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'EnableScalingGroup',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ScalingGroupId': 'String',
            }
        },
        'DescribeScalingNotification': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeScalingNotification',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ScalingGroupId': 'String',
                'ScalingNotificationId': 'Filter',
                'Marker': 'Int',
                'MaxResults': 'Int',
            }
        },
        'CreateScalingNotification': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'CreateScalingNotification',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ScalingNotificationType': 'Filter',
                'ScalingGroupId': 'String',
                'Description': 'String',
            }
        },
        'ModifyScalingNotification': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ModifyScalingNotification',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ScalingGroupId': 'String',
                'ScalingNotificationId': 'Int',
                'NotificationType': 'Filter',
            }
        },
        'CreateScheduledTask': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'CreateScheduledTask',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ScalingGroupId': 'String',
                'ScalingScheduledTaskName': 'String',
                'ReadjustMinSize': 'Int',
                'ReadjustMaxSize': 'Int',
                'ReadjustExpectSize': 'Int',
                'StartTime': 'String',
                'EndTime': 'String',
                'Recurrence': 'String',
                'RepeatUnit': 'String',
                'RepeatCycle': 'String',
            }
        },
        'DescribeScheduledTask': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeScheduledTask',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ScalingGroupId': 'String',
                'ScalingScheduledTaskId': 'Filter',
                'ScalingScheduledTaskName': 'String',
                'Marker': 'Int',
                'MaxResults': 'Int',
            }
        },
        'ModifyScheduledTask': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ModifyScheduledTask',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
            }
        },
        'DeleteScheduledTask': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DeleteScheduledTask',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ScalingScheduledTaskId': 'String',
                'ScalingGroupId': 'String',
            }
        },
        'CreateScalingPolicy': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'CreateScalingPolicy',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ScalingGroupId': 'String',
                'ScalingPolicyName': 'String',
                'Metric': 'String',
                'AdjustmentType': 'String',
                'AdjustmentValue': 'Int',
                'CoolDown': 'Int',
            }
        },
        'DescribeScalingPolicy': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeScalingPolicy',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ScalingGroupId': 'String',
                'ScalingPolicyId': 'Filter',
                'ScalingPolicyName': 'String',
                'Marker': 'Int',
                'MaxResults': 'Int',
            }
        },
        'ModifyScalingPolicy': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ModifyScalingPolicy',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ScalingPolicyId': 'String',
                'ScalingGroupId': 'String',
                'ScalingPolicyName': 'String',
                'Metric': 'String',
                'AdjustmentType': 'String',
                'AdjustmentValue': 'Int',
                'CoolDown': 'Int',
            }
        },
        'DeleteScalingPolicy': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DeleteScalingPolicy',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ScalingGroupId': 'String',
                'ScalingPolicyId': 'String',
            }
        },
        'ImportImage': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ImportImage',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ImageName': 'String',
                'Architecture': 'String',
                'Platform': 'String',
                'ImageUrl': 'String',
                'ImageFormat': 'String',
                'DataImageUrl': 'Filter',
                'DataImageSize': 'Filter',
                'DataImageFormat': 'Filter',
            }
        },
        'CopyImage': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'CopyImage',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ImageId': 'Filter',
                'DestinationRegion': 'Filter',
                'DestinationImageName': 'String',
            }
        },
        'ModifyImageSharePermission': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ModifyImageSharePermission',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ImageId': 'String',
                'AccountId': 'Filter',
                'Permission': 'String',
            }
        },
        'DescribeImageSharePermission': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeImageSharePermission',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ImageId': 'String',
            }
        },
        'DescribeRegions': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeRegions',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
            }
        },
        'AttachKey': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'AttachKey',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'Action': 'String',
                'InstanceId': 'Filter',
                'KeyId': 'Filter',
            }
        },
        'DetachKey': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DetachKey',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'Action': 'String',
                'InstanceId': 'Filter',
                'KeyId': 'Filter',
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
            }
        },
        'DescribeInstanceTypeConfigs': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeInstanceTypeConfigs',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
            }
        },
        'DescribeInstanceFamilys': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeInstanceFamilys',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
            }
        },
        'AddVmIntoDataGuard': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'AddVmIntoDataGuard',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'DataGuardId': 'String',
                'InstanceId': 'Filter',
            }
        },
        'CreateFileSystem': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'CreateFileSystem',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'AvailabilityZone': 'String',
                'VpcId': 'String',
                'StorageType': 'String',
                'ProtocolType': 'String',
                'FileSystemName': 'String',
            }
        },
        'DeleteFileSystem': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DeleteFileSystem',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'FileSystemId': 'String',
            }
        },
        'DescribeFileSystems': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeFileSystems',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'FileSystemId': 'String',
                'MaxResults': 'Int',
                'Marker': 'Int',
            }
        },
        'ModifyFileSystem': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ModifyFileSystem',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'FileSystemId': 'String',
                'FileSystemName': 'String',
            }
        },
        'CreateMountTarget': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'CreateMountTarget',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'FileSystemId': 'String',
                'SubnetId': 'String',
                'IpVersion': 'String',
            }
        },
        'DeleteMountTarget': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DeleteMountTarget',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'MountTargetId': 'String',
            }
        },
        'DescribeMountTargets': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeMountTargets',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'FileSystemId': 'String',
                'MountTargetId': 'String',
                'MaxResults': 'Int',
                'Marker': 'Int',
            }
        },
        'CreateModel': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'CreateModel',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ImageId': 'String',
                'InstanceType': 'String',
                'SystemDisk.DiskSize': 'String',
                'DataDiskGb': 'Int',
                'SubnetId': 'String',
                'DataDisk': 'Filter',
                'KeepImageLogin': 'Boolean',
                'KeyId': 'String',
                'ChargeType': 'String',
                'PurchaseTime': 'Int',
                'SecurityGroupId': 'String',
                'PrivateIpAddress': 'String',
                'InstanceName': 'String',
                'InstanceNameSuffix': 'String',
                'SriovNetSupport': 'String',
                'ProjectId': 'Int',
                'DataGuardId': 'String',
                'AddressBandWidth': 'Int',
                'LineId': 'String',
                'AddressChargeType': 'String',
                'AddressPurchaseTime': 'Int',
                'AddressProjectId': 'String',
                'ModelName': 'String',
                'SystemDisk.DiskType': 'String',
                'SystemDisk.ResizeType': 'String',
                'VersionDetail': 'String',
            }
        },
        'TerminateModels': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'TerminateModels',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ModelId': 'String',
                'ModelVersion': 'Int',
            }
        },
        'DescribeModels': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeModels',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ModelId': 'Filter',
                'MaxResults': 'Int',
                'Marker': 'Int',
            }
        },
        'DescribeDedicatedCluster': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeDedicatedCluster',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'DedicatedClusterId': 'Filter',
            }
        },
        'CreateDedicatedCluster': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'CreateDedicatedCluster',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'DedicatedClusterName': 'String',
                'Model': 'String',
                'AvailabilityZone': 'String',
            }
        },
        'DeleteDedicatedCluster': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DeleteDedicatedCluster',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'DedicatedClusterId': 'Filter',
            }
        },
        'SetvCPU': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'SetvCPU',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'DedicatedHostId': 'Filter',
                'VCPU': 'Int',
            }
        },
        'DedicatedHostMigrate': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DedicatedHostMigrate',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'DedicatedClusterId': 'String',
                'DedicatedHostId': 'Filter',
            }
        },
        'ModifyDedicatedClusterName': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ModifyDedicatedClusterName',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'DedicatedClusterId': 'String',
                'DedicatedClusterName': 'String',
            }
        },
        'ModifyInstanceAutoDeleteTime': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ModifyInstanceAutoDeleteTime',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceId': 'Filter',
                'AutoDeleteTime': 'String',
                'AutoDeleteEip': 'Boolean',
            }
        },
        'ModifyScalingConfiguration': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ModifyScalingConfiguration',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ScalingConfigurationId': 'String',
                'ScalingConfigurationName': 'String',
                'ImageId': 'String',
                'Password': 'String',
                'InstanceType': 'String',
                'ChargeType': 'String',
                'DataDiskGb': 'Int',
                'ProjectId': 'Int',
                'KeepImageLogin': 'Boolean',
                'KeyId': 'Filter',
                'DataDisk': 'Filter',
                'SystemDisk.DiskSize': 'Int',
                'AddressBandWidth': 'Int',
                'BandWidthShareId': 'String',
                'LineId': 'String',
                'AddressProjectId': 'Int',
                'InstanceName': 'String',
                'InstanceNameSuffix': 'String',
                'UserData': 'String',
                'InstanceNameTimeSuffix': 'Boolean',
                'Tag': 'Filter',
                'LoginSetAfter': 'Boolean',
                'IpBindAfter': 'Boolean',
                'InstanceNameRandom': 'Boolean',
                'SystemDisk.DiskType': 'String',
                'SystemDisk.ResizeType': 'String',
            }
        },
        'DescribeSpotPriceHistory': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeSpotPriceHistory',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceType': 'String',
                'AvailabilityZone': 'String',
                'StartTime': 'String',
                'EndTime': 'String',
            }
        },
        'DescribePrice': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribePrice',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceType': 'String',
                'SystemDisk.DiskSize': 'String',
                'ImageId': 'String',
                'ChargeType': 'String',
                'PurchaseTime': 'Int',
                'DataDiskGb': 'Int',
                'DataDisk': 'Filter',
                'MaxCount': 'Int',
                'SystemDisk.DiskType': 'String',
            }
        },
        'EnableImageCaching': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'EnableImageCaching',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ImageId': 'Filter',
            }
        },
        'DisableImageCaching': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DisableImageCaching',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ImageId': 'Filter',
            }
        },
        'ModifyLoadBalancers': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ModifyLoadBalancers',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ScalingGroupId': 'String',
            }
        },
        'AttachInstancesIamRole': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'AttachInstancesIamRole',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceId': 'Filter',
                'IamRoleName': 'String',
            }
        },
        'DetachInstancesIamRole': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DetachInstancesIamRole',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceId': 'Filter',
            }
        },
        'PreMigrateInstance': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'PreMigrateInstance',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
                'InstanceType': 'String',
                'SystemDiskType': 'String',
                'DataDiskType': 'String',
            }
        },
        'CancelPreMigrateInstance': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'CancelPreMigrateInstance',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
            }
        },
        'DescribeInstanceKmr': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeInstanceKmr',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
            }
        },
        'DescribeMinFlavorCount': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeMinFlavorCount',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
            }
        },
        'DescribeProjectMaxNum': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeProjectMaxNum',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
            }
        },
    }
}