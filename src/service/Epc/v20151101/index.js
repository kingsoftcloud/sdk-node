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
                'Sn': 'String',
                'PurchaseTime': 'Int',
                'Password': 'String',
                'SecurityAgent': 'String',
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
                'bondAttribute': 'String',
                'ContainerAgent': 'String',
                'KesAgent': 'String',
                'KmrAgent': 'String',
                'ComputerName': 'String',
                'OverclockingAttribute': 'String',
                'GpuImageDriverId': 'String',
                'SystemVolumeType': 'String',
                'SystemVolumeSize': 'String',
                'RoceNetwork': 'String',
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
                    'Content-Type': 'application/json'
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
                    'Content-Type': 'application/json'
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
                    'Content-Type': 'application/json'
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
                'SecurityAgent': 'String',
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
                'bondAttribute': 'String',
                'KesAgent': 'String',
                'KmrAgent': 'String',
                'ComputerName': 'String',
                'OverclockingAttribute': 'String',
                'DelayStart': 'Int',
                'AvailabilityZone': 'String',
                'GpuImageDriverId': 'String',
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
                    'Content-Type': 'application/json'
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
                'VersionId': 'Int',
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
                'VersionId': 'Int',
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
                'AccountId.N': 'String',
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
                'AccountId.N': 'String',
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
                    'Content-Type': 'application/json'
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
    }
}