const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'epc.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'epc',
            },
        },
    }
    _apiList = {
        'CreateEpc': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'CreateEpc',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'HostType': 'String',
                'AvailabilityZone': 'String',
                'Raid': 'String',
                'RaidId': 'String',
                'ImageId': 'String',
                'NetworkInterfaceMode': 'String',
                'SubnetId': 'String',
                'PrivateIpAddress': 'String',
                'keyId': 'String',
                'SecurityGroupId': 'Filter',
                'DNS1': 'String',
                'DNS2': 'String',
                'HostName': 'String',
                'ProjectId': 'String',
                'ChargeType': 'String',
                'PurchaseTime': 'Int',
                'Password': 'String',
                'CloudMonitorAgent': 'String',
                'ExtensionSubnetId': 'String',
                'ExtensionPrivateIpAddress': 'String',
                'ExtensionDNS1': 'String',
                'ExtensionDNS2': 'String',
                'Description': 'String',
                'AddressBandWidth': 'String',
                'LineId': 'String',
                'BandWidthShareId': 'String',
                'AddressChargeType': 'String',
                'AddressPurchaseTime': 'String',
                'AddressProjectId': 'String',
                'SystemFileType': 'String',
                'DataFileType': 'String',
                'DataDiskCatalogue': 'String',
                'DataDiskCatalogueSuffix': 'String',
                'HyperThreading': 'String',
                'NvmeDataFileType': 'String',
                'NvmeDataDiskCatalogue': 'String',
                'NvmeDataDiskCatalogueSuffix': 'String',
                'BondAttribute': 'String',
                'ContainerAgent': 'String',
                'KesAgent': 'String',
                'KmrAgent': 'String',
                'ComputerName': 'String',
                'OverclockingAttribute': 'String',
                'GpuImageDriverId': 'String',
                'SystemVolumeType': 'String',
                'SystemVolumeSize': 'String',
                'RoceNetwork': 'String',
                'ZoneId': 'String',
                'ZoneType': 'String',
                'UseHotStandby': 'String',
                'TimedRegularization': 'String',
                'PasswordInherit': 'String',
                'DataDiskMount': 'String',
                'StorageRoceNetworkCardName': 'String',
                'Anaconda.N': 'String',
                'Framework.N': 'String',
                'Engine.N': 'String',
                'AiModel.N': 'String',
                'UserData': 'String',
                'StorageRoceNetworkInterfaceMode': 'String',
                'RoceCluster': 'String',
                'SRoceCluster': 'String',
                'UserDefinedData': 'String',
            }
        },
        'StartEpc': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'StartEpc',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'HostId': 'String',
            }
        },
        'RebootEpc': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'RebootEpc',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'HostId': 'String',
            }
        },
        'DeleteEpc': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DeleteEpc',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'HostId': 'String',
            }
        },
        'ReinstallEpc': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ReinstallEpc',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'HostId': 'String',
                'ImageId': 'String',
                'keyId': 'String',
                'Password': 'String',
                'NetworkInterfaceMode': 'String',
                'CloudMonitorAgent': 'String',
                'Raid': 'String',
                'RaidId': 'String',
                'HostName': 'String',
                'SystemFileType': 'String',
                'DataFileType': 'String',
                'DataDiskCatalogue': 'String',
                'DataDiskCatalogueSuffix': 'String',
                'HyperThreading': 'String',
                'NvmeDataFileType': 'String',
                'NvmeDataDiskCatalogue': 'String',
                'NvmeDataDiskCatalogueSuffix': 'String',
                'BondAttribute': 'String',
                'KesAgent': 'String',
                'KmrAgent': 'String',
                'ComputerName': 'String',
                'OverclockingAttribute': 'String',
                'DelayStart': 'Int',
                'AvailabilityZone': 'String',
                'GpuImageDriverId': 'String',
                'ContainerAgent': 'String',
                'PasswordInherit': 'String',
                'DataDiskMount': 'String',
                'StorageRoceNetworkCardName': 'String',
                'UserDefinedData': 'String',
            }
        },
        'ModifySecurityGroup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ModifySecurityGroup',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'HostId': 'String',
                'NetworkInterfaceId': 'String',
                'SecurityGroupId': 'Filter',
            }
        },
        'CreateKey': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'CreateKey',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'KeyName': 'String',
                'Description': 'String',
            }
        },
        'DescribeEpcs': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeEpcs',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ProjectId': 'Filter',
                'HostId': 'Filter',
                'Filter': 'Filter',
                'MaxResults': 'Int',
                'NextToken': 'String',
            }
        },
        'GetDynamicCode': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'GetDynamicCode',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'RemoteManagementId': 'String',
            }
        },
        'DescribeVpns': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeVpns',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'DynamicCode': 'String',
                'Pin': 'String',
                'RemoteManagementId': 'String',
            }
        },
        'CreateImage': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'CreateImage',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'HostId': 'String',
                'ImageName': 'String',
                'ImageMode': 'String',
                'ImageInitialization': 'String',
            }
        },
        'ModifyImage': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ModifyImage',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ImageName': 'String',
                'ImageId': 'String',
            }
        },
        'DeleteImage': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DeleteImage',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ImageId': 'String',
            }
        },
        'DescribeImages': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeImages',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'MaxResults': 'Int',
                'NextToken': 'String',
                'ImageId.N': 'String',
                'Filter': 'Filter',
            }
        },
        'ModifyDns': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ModifyDns',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'NetworkInterfaceId': 'String',
                'HostId': 'String',
                'DNS1': 'String',
                'DNS2': 'String',
            }
        },
        'ModifyNetworkInterfaceAttribute': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ModifyNetworkInterfaceAttribute',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'NetworkInterfaceId': 'String',
                'HostId': 'String',
                'SubnetId': 'String',
                'IpAddress': 'String',
                'SecurityGroupIdList': 'Array',
                'SecurityGroupId': 'Filter',
            }
        },
        'DescribePhysicalMonitor': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribePhysicalMonitor',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'HostId': 'String',
            }
        },
        'DescribeEpcManagements': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeEpcManagements',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'MaxResults': 'Int',
                'NextToken': 'String',
                'DynamicCode': 'String',
                'Pin': 'String',
                'EpcManagementId': 'Filter',
                'RemoteManagementId': 'String',
                'ProjectId': 'Filter',
            }
        },
        'DescribeRemoteManagements': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeRemoteManagements',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'RemoteManagementId': 'Filter',
            }
        },
        'StopEpc': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'StopEpc',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'HostId': 'String',
            }
        },
        'ModifyEpc': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ModifyEpc',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'HostId': 'String',
                'HostName': 'String',
                'Description': 'String',
            }
        },
        'ModifyRemoteManagement': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ModifyRemoteManagement',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'RemoteManagementId': 'String',
                'DynamicCode': 'String',
                'Pin': 'String',
                'NewPhoneNumber': 'String',
                'NewPin': 'String',
                'Name': 'String',
                'VersionId': 'Long',
            }
        },
        'CreateRemoteManagement': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'CreateRemoteManagement',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'DynamicCode': 'String',
                'Pin': 'String',
                'PhoneNumber': 'String',
                'Name': 'String',
                'VersionId': 'Long',
            }
        },
        'ReinstallCustomerEpc': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ReinstallCustomerEpc',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'HostId': 'String',
                'ServerIp': 'String',
                'Path': 'String',
            }
        },
        'DeleteRemoteManagement': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DeleteRemoteManagement',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'RemoteManagementId': 'String',
            }
        },
        'ResetPassword': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ResetPassword',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'HostId': 'String',
                'Password': 'String',
            }
        },
        'ModifyHyperThreading': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ModifyHyperThreading',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'HostId': 'String',
                'HyperThreadingStatus': 'String',
            }
        },
        'AssociateCluster': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'AssociateCluster',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'HostId': 'String',
                'ClusterId': 'String',
            }
        },
        'DisassociateCluster': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DisassociateCluster',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'HostId': 'String',
            }
        },
        'DescribeInspections': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeInspections',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'MaxResults': 'Int',
                'NextToken': 'String',
                'Filter': 'Filter',
            }
        },
        'DescribeEpcStocks': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeEpcStocks',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'Filter': 'Filter',
            }
        },
        'DescribeEpcDeviceAttributes': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeEpcDeviceAttributes',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'Filter': 'Filter',
                'DeviceAttributeId': 'Filter',
                'MaxResults': 'Int',
                'NextToken': 'String',
            }
        },
        'DescribeProcesses': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeProcesses',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'OperationProcessId': 'Filter',
                'Filter': 'Filter',
                'MaxResults': 'Int',
                'NextToken': 'String',
            }
        },
        'CreateProcess': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'CreateProcess',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ProcessId': 'String',
                'InstanceId': 'String',
                'Sn': 'String',
                'AvailabilityZone': 'String',
                'CreateTime': 'String',
                'Attribute': 'String',
                'Content': 'String',
                'MachineCount': 'Int',
                'Title': 'String',
                'Type': 'String',
                'Confirm': 'String',
                'ProcessSource': 'Int',
                'autoNocCase': 'Int',
                'LogFileName': 'Filter',
                'LogFile': 'Filter',
                'LogUrl': 'Filter',
                'AuthorizeCableReplace': 'Int',
                'EventId': 'String',
            }
        },
        'DeleteProcess': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DeleteProcess',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'OperationProcessId': 'String',
            }
        },
        'ReplyProcess': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ReplyProcess',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'OperationProcessId': 'String',
                'Remarks': 'String',
            }
        },
        'DescribeEpcTrashes': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeEpcTrashes',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'MaxResults': 'Int',
                'NextToken': 'String',
            }
        },
        'ReturnEpc': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ReturnEpc',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'HostId': 'String',
            }
        },
        'CreateResourceRequirement': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'CreateResourceRequirement',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'AvailabilityZone': 'String',
                'RequirementCount': 'Int',
                'ProjectName': 'String',
                'UsageDate': 'String',
                'Description': 'String',
                'HostType': 'String',
            }
        },
        'AttachVolume': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'AttachVolume',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'HostId': 'String',
                'VolumeId': 'String',
            }
        },
        'DetachVolume': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DetachVolume',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'HostId': 'String',
                'VolumeId': 'String',
            }
        },
        'DescribePrice': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribePrice',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ChargeType': 'String',
                'HostType': 'String',
                'AvailabilityZone': 'String',
                'PurchaseTime': 'Int',
                'Amount': 'Int',
            }
        },
        'UpdateConfirm': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'UpdateConfirm',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
            }
        },
        'ModifyOverclockingAttribute': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ModifyOverclockingAttribute',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'HostId': 'String',
                'OverclockingAttribute': 'String',
            }
        },
        'CopyImage': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'CopyImage',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'DestinationName': 'String',
                'ImageId': 'String',
                'DestinationRegion': 'String',
                'CopyTag': 'String',
            }
        },
        'DescribeEpcRaidAttributes': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeEpcRaidAttributes',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'Filter': 'Filter',
                'MaxResults': 'Int',
                'NextToken': 'String',
            }
        },
        'DescribeGpuImageDriver': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeGpuImageDriver',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'MaxResults': 'Int',
                'NextToken': 'String',
                'ImageId': 'String',
                'HostType': 'String',
            }
        },
        'CreateShareImage': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'CreateShareImage',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ImageId': 'String',
                'AccountId': 'Filter',
            }
        },
        'DeleteShareImage': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DeleteShareImage',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ImageId': 'String',
                'AccountId': 'Filter',
            }
        },
        'DescribeShareImageAccountList': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeShareImageAccountList',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ImageId': 'String',
            }
        },
        'DescribeShareImage': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeShareImage',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'MaxResults': 'Int',
                'NextToken': 'String',
            }
        },
        'AcceptShareImage': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'AcceptShareImage',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ImageId': 'String',
            }
        },
        'RejectShareImage': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'RejectShareImage',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ImageId': 'String',
            }
        },
        'DescribeManagedAccessory': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeManagedAccessory',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
            }
        },
        'AutoDeleteEpc': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'AutoDeleteEpc',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'HostId': 'String',
                'AutoDeleteTime': 'String',
                'AutoDeleteEip': 'String',
            }
        },
        'ExportImage': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ExportImage',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ImageId': 'String',
                'Ks3Bucket': 'String',
                'ObjectName': 'String',
            }
        },
        'QueryBuckets': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'QueryBuckets',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
            }
        },
        'CancelImageExport': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'CancelImageExport',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ImageId': 'String',
            }
        },
        'UseHotStandByEpc': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'UseHotStandByEpc',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'HostId': 'String',
                'HotStandByHostId': 'String',
                'RetainInstanceInfo': 'String',
            }
        },
        'ActivateHotStandbyEpc': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ActivateHotStandbyEpc',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'HostId': 'String',
            }
        },
        'BatchCreateEpc': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'BatchCreateEpc',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'HostType': 'String',
                'AvailabilityZone': 'String',
                'Raid': 'String',
                'RaidId': 'String',
                'ImageId': 'String',
                'NetworkInterfaceMode': 'String',
                'SubnetId': 'String',
                'keyId': 'String',
                'SecurityGroupId': 'Filter',
                'DNS1': 'String',
                'DNS2': 'String',
                'HostName': 'String',
                'ProjectId': 'String',
                'ChargeType': 'String',
                'Sn': 'String',
                'PurchaseTime': 'Int',
                'Password': 'String',
                'CloudMonitorAgent': 'String',
                'ExtensionSubnetId': 'String',
                'ExtensionDNS1': 'String',
                'ExtensionDNS2': 'String',
                'Description': 'String',
                'AddressBandWidth': 'String',
                'LineId': 'String',
                'BandWidthShareId': 'String',
                'AddressChargeType': 'String',
                'AddressPurchaseTime': 'String',
                'AddressProjectId': 'String',
                'SystemFileType': 'String',
                'DataFileType': 'String',
                'DataDiskCatalogue': 'String',
                'DataDiskCatalogueSuffix': 'String',
                'HyperThreading': 'String',
                'NvmeDataFileType': 'String',
                'NvmeDataDiskCatalogue': 'String',
                'NvmeDataDiskCatalogueSuffix': 'String',
                'BondAttribute': 'String',
                'ContainerAgent': 'String',
                'KesAgent': 'String',
                'KmrAgent': 'String',
                'ComputerName': 'String',
                'OverclockingAttribute': 'String',
                'GpuImageDriverId': 'String',
                'SystemVolumeType': 'String',
                'SystemVolumeSize': 'String',
                'RoceNetwork': 'String',
                'ZoneId': 'String',
                'ZoneType': 'String',
                'HostNameStartNo': 'Int',
                'ComputerNameStartNo': 'Int',
                'Amount': 'Int',
                'TimedRegularization': 'String',
                'PasswordInherit': 'String',
                'DataDiskMount': 'String',
                'StorageRoceNetworkCardName': 'String',
                'SRoceCluster': 'String',
                'RoceCluster': 'String',
            }
        },
        'DescribeUseHotStandbyRecords': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeUseHotStandbyRecords',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'Filter.N': 'Object',
                'MaxResults': 'Int',
                'NextToken': 'String',
            }
        },
        'DescribeGpuRoceTopology': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeGpuRoceTopology',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'SpineName': 'String',
            }
        },
        'ModifyProcess': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ModifyProcess',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'OperationProcessId': 'String',
                'Confirm': 'String',
                'Status': 'String',
                'Content': 'String',
            }
        },
        'ConfirmProcess': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ConfirmProcess',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'OperationProcessId': 'String',
                'UserConfirmAvailable': 'String',
            }
        },
        'DescribeModelConfig': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeModelConfig',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'MaxResults': 'Int',
                'NextToken': 'String',
                'ImageId': 'String',
                'HostType': 'String',
                'GpuImageDriverId': 'String',
            }
        },
        'DescribeRoceEvent': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeRoceEvent',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'MaxResults': 'Int',
                'NextToken': 'String',
                'Filter.N': 'Object',
                'HostId.N': 'String',
            }
        },
        'DescribeRoceEventDetails': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeRoceEventDetails',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'EventId': 'String',
                'MaxResults': 'Int',
                'NextToken': 'String',
            }
        },
        'BatchCreateProcess': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'BatchCreateProcess',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceId': 'Filter',
                'AvailabilityZone': 'String',
                'Attribute': 'String',
                'Content': 'String',
                'LogFileName': 'Filter',
                'LogFile': 'Filter',
                'LogUrl': 'Filter',
                'MachineCount': 'Int',
                'Title': 'String',
                'Type': 'String',
                'Confirm': 'String',
                'ProcessSource': 'Int',
                'AutoNocCase': 'Int',
            }
        },
        'CreateInspectHost': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'CreateInspectHost',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InspectType': 'String',
                'InspectName': 'String',
                'HostId': 'Filter',
            }
        },
        'DescribeInspectHostResults': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeInspectHostResults',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InspectId': 'Filter',
                'MaxResults': 'Int',
                'NextToken': 'String',
            }
        },
        'DescribeXidDetails': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeXidDetails',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'StartTime': 'String',
                'EndTime': 'String',
                'InstanceId': 'String',
                'Name': 'String',
                'MaxResults': 'Int',
                'NextToken': 'String',
            }
        },
        'RunSoInstances': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'RunSoInstances',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ImageId': 'String',
                'InstanceName': 'String',
                'InstanceTypeId': 'String',
                'SecurityGroupId': 'Filter',
                'SubnetId': 'String',
                'Volumes': 'Object',
                'ZoneId': 'String',
                'Description': 'String',
                'HostName': 'String',
                'InstanceChargeType': 'String',
                'KeepImageCredential': 'Boolean',
                'KeyPairName': 'String',
                'Password': 'String',
                'Period': 'Int',
                'SuffixIndex': 'Int',
                'UniqueSuffix': 'Boolean',
                'InstallRunCommandAgent': 'Boolean',
                'Count': 'Int',
                'SoZoneId': 'String',
                'UserData': 'String',
            }
        },
        'DescribeSoImages': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeSoImages',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ImageId': 'Filter',
                'ImageName': 'String',
                'IsSupportCloudInit': 'Boolean',
                'MaxResults': 'Int',
                'NextToken': 'String',
                'OsType': 'String',
                'Platform': 'String',
                'Status': 'Filter',
                'Visibility': 'String',
                'SoZoneId': 'String',
            }
        },
        'RebootSoInstance': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'RebootSoInstance',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ForceStop': 'Boolean',
                'InstanceIds': 'Filter',
                'SoZoneId': 'String',
            }
        },
        'DeleteSoImages': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DeleteSoImages',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ImageIds': 'Filter',
                'SoZoneId': 'String',
            }
        },
        'DeleteSoVpc': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DeleteSoVpc',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'VpcId': 'String',
                'SoZoneId': 'String',
            }
        },
        'DescribeSoAvailableResource': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeSoAvailableResource',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceChargeType': 'String',
                'InstanceTypeId': 'String',
                'ZoneId': 'String',
                'SoZoneId': 'String',
            }
        },
        'DescribeSoInstances': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeSoInstances',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceChargeType': 'String',
                'InstanceTypeId': 'Filter',
                'KeyPairName': 'String',
                'MaxResults': 'Int',
                'NextToken': 'String',
                'PrimaryIpAddress': 'String',
                'Status': 'String',
                'VpcId': 'String',
                'ZoneId': 'String',
                'InstanceIds': 'Filter',
                'SoZoneId': 'String',
            }
        },
        'DeleteSoInstance': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DeleteSoInstance',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceIds': 'Filter',
                'SoZoneId': 'String',
            }
        },
        'DescribeSoSecurityGroups': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeSoSecurityGroups',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'VpcId': 'String',
                'SecurityGroupIds': 'Filter',
                'NextToken': 'String',
                'MaxResults': 'Int',
                'SoZoneId': 'String',
            }
        },
        'CreateSoVpc': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'CreateSoVpc',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'VpcName': 'String',
                'Description': 'String',
                'CidrBlock': 'String',
                'DnsServers': 'Filter',
                'AttachVpcId': 'String',
                'SoZoneId': 'String',
            }
        },
        'DeleteSoSubnet': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DeleteSoSubnet',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'SubnetId': 'String',
                'SoZoneId': 'String',
            }
        },
        'DescribeSoKeyPairs': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeSoKeyPairs',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'FingerPrint': 'String',
                'KeyPairIds': 'Filter',
                'KeyPairName': 'String',
                'KeyPairNames': 'Filter',
                'MaxResults': 'Int',
                'NextToken': 'String',
                'SoZoneId': 'String',
            }
        },
        'StartSoInstance': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'StartSoInstance',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceIds': 'Filter',
                'SoZoneId': 'String',
            }
        },
        'DescribeSoInstanceTypes': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeSoInstanceTypes',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ImageId': 'String',
                'InstanceTypeId': 'Filter',
                'SoZoneId': 'String',
            }
        },
        'ModifySoSubnetAttributes': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ModifySoSubnetAttributes',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'SubnetId': 'String',
                'SubnetName': 'String',
                'Description': 'String',
                'SoZoneId': 'String',
            }
        },
        'DescribeSoSubnet': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeSoSubnet',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ZoneId': 'String',
                'SubnetName': 'String',
                'VpcId': 'String',
                'SubnetIds': 'Filter',
                'NextToken': 'String',
                'MaxResults': 'Int',
                'SoZoneId': 'String',
            }
        },
        'ModifySoKeyPairAttribute': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ModifySoKeyPairAttribute',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'Description': 'String',
                'KeyPairId': 'String',
                'KeyPairName': 'String',
                'SoZoneId': 'String',
            }
        },
        'ModifySoImageAttribute': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ModifySoImageAttribute',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'BootMode': 'String',
                'Description': 'String',
                'ImageId': 'String',
                'ImageName': 'String',
                'SoZoneId': 'String',
            }
        },
        'ModifySoVpcAttributes': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ModifySoVpcAttributes',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'VpcId': 'String',
                'Description': 'String',
                'DnsServers': 'Filter',
                'VpcName': 'String',
                'SoZoneId': 'String',
            }
        },
        'ReplaceSoSystemVolume': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ReplaceSoSystemVolume',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ImageId': 'String',
                'InstanceId': 'String',
                'KeepImageCredential': 'Boolean',
                'KeyPairName': 'String',
                'Password': 'String',
                'SoZoneId': 'String',
            }
        },
        'CreateSoSubnet': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'CreateSoSubnet',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'VpcId': 'String',
                'ZoneId': 'String',
                'SubnetName': 'String',
                'Description': 'String',
                'CidrBlock': 'String',
                'SoZoneId': 'String',
            }
        },
        'DescribeSoVpcs': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeSoVpcs',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'VpcName': 'String',
                'VpcIds': 'Filter',
                'NextToken': 'String',
                'MaxResults': 'Int',
                'SoZoneId': 'String',
            }
        },
        'StopSoInstance': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'StopSoInstance',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ForceStop': 'Boolean',
                'InstanceIds': 'Filter',
                'SoZoneId': 'String',
            }
        },
        'DeleteSoKeyPairs': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DeleteSoKeyPairs',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'KeyPairNames': 'Filter',
                'SoZoneId': 'String',
            }
        },
        'CreateSoImage': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'CreateSoImage',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ForceStop': 'Boolean',
                'InstanceIds': 'Filter',
                'SoZoneId': 'String',
            }
        },
        'ModifySoInstanceAttribute': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ModifySoInstanceAttribute',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'DeletionProtection': 'String',
                'Description': 'String',
                'Hostname': 'String',
                'InstanceId': 'String',
                'InstanceName': 'String',
                'Password': 'String',
                'SoZoneId': 'String',
                'UserData': 'String',
            }
        },
        'CreateSoKeyPair': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'CreateSoKeyPair',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'KeyPairName': 'String',
                'Description': 'String',
                'SoZoneId': 'String',
            }
        },
        'InstallAgent': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'InstallAgent',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'HostId': 'String',
                'AgentId': 'String',
                'Username': 'String',
                'Password': 'String',
                'Key': 'String',
            }
        },
        'DescribeAgent': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeAgent',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'AgentName': 'String',
                'AgentId': 'String',
                'AgentType': 'String',
            }
        },
        'DescribeAgentInstallStatus': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeAgentInstallStatus',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'HostId': 'Filter',
                'AgentId': 'String',
                'Status': 'String',
                'NextToken': 'String',
                'MaxResults': 'Int',
            }
        },
        'DescribeSoUserData': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeSoUserData',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
            }
        },
        'DescribeUserData': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DescribeUserData',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'HostId': 'String',
            }
        },
    }
}