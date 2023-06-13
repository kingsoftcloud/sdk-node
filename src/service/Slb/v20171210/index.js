const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'slb.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'slb',
            },
        },
    }
    _apiList = {
        'DescribeLoadBalancers': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2017-12-10',
                    'Action': 'DescribeLoadBalancers',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'LoadBalancerId': 'Filter',
                'State': 'String',
                'ProjectId': 'Filter',
                'Filter': 'Filter',
            }
        },
    }
}