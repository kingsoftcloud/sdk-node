const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'kce.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'kce',
            },
        },
    }
    _apiList = {
        'CreateCluster': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2020-12-31',
                    'Action': 'CreateCluster',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ClusterName': 'String',
                'ClusterType': 'String',
                'ClusterManageMode': 'String',
                'ClusterDesc': 'String',
                'VpcId': 'String',
                'PodCidr': 'String',
                'ServiceCidr': 'String',
                'NetworkType': 'String',
                'K8sVersion': 'String',
                'ReserveSubnetId': 'String',
                'PublicApiServer': 'String',
                'ExposePublicApiServer': 'Boolean',
                'MaxPodPerNode': 'String',
                'MasterEtcdSeparate': 'Boolean',
                'ManagedClusterMultiMaster': 'Filter',
                'InstanceForNode': 'Filter',
                'ExistedInstanceForEpc': 'Filter',
                'Component': 'Filter',
                'ControlPlaneLog': 'Object',
                'EnableDelProtection': 'Boolean',
            }
        },
    }
}