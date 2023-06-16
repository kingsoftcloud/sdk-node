"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_baseConfig", {
      'protocol': 'http://',
      'endpoint': 'slb.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'slb'
        }
      }
    });

    _defineProperty(this, "_apiList", {
      'DescribeListeners': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribeListeners'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ListenerId': 'Filter',
          'Filter': 'Filter',
          'MaxResults': 'Int',
          'NextToken': 'String'
        }
      },
      'ModifyListeners': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'ModifyListeners'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ListenerId': 'String',
          'ListenerName': 'String',
          'ListenerState': 'String',
          'Method': 'String',
          'BandWidthIn': 'Int',
          'BandWidthOut': 'Int',
          'HttpProtocol': 'String',
          'TlsCipherPolicy': 'String',
          'EnableHttp2': 'Boolean',
          'SessionState': 'String',
          'SessionPersistencePeriod': 'Int',
          'CookieType': 'String',
          'CookieName': 'String',
          'CertificateId': 'String'
        }
      },
      'CreateListeners': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'CreateListeners'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'LoadBalancerId': 'String',
          'ListenerName': 'String',
          'ListenerState': 'String',
          'ListenerProtocol': 'String',
          'ListenerPort': 'Int',
          'Method': 'String',
          'BandWidthIn': 'Int',
          'BandWidthOut': 'Int',
          'LoadBalancerAclId': 'String',
          'HttpProtocol': 'String',
          'TlsCipherPolicy': 'String',
          'EnableHttp2': 'Boolean',
          'RedirectListenerId': 'String',
          'SessionState': 'String',
          'SessionPersistencePeriod': 'Int',
          'CookieType': 'String',
          'CookieName': 'String',
          'CertificateId': 'String'
        }
      },
      'ModifyInstancesWithListener': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'ModifyInstancesWithListener'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'RegisterId': 'String',
          'Weight': 'Int',
          'RealServerPort': 'Int',
          'MasterSlaveType': 'String',
          'Tag': 'String'
        }
      },
      'RegisterInstancesWithListener': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'RegisterInstancesWithListener'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'RealServerType': 'String',
          'ListenerId': 'String',
          'Weight': 'Int',
          'RealServerIp': 'String',
          'RealServerPort': 'Int',
          'InstanceId': 'String',
          'Tag': 'String',
          'MasterSlaveType': 'String'
        }
      },
      'DeregisterInstancesFromListener': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DeregisterInstancesFromListener'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'RegisterId': 'String'
        }
      },
      'DescribeInstancesWithListener': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribeInstancesWithListener'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'RegisterId': 'Filter',
          'Filter': 'Filter',
          'MaxResults': 'Int',
          'NextToken': 'String'
        }
      },
      'ModifyHealthCheck': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'ModifyHealthCheck'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'HealthCheckId': 'String',
          'HealthCheckState': 'String',
          'HealthCheckConnectPort': 'Int',
          'HealthyThreshold': 'Int',
          'Interval': 'Int',
          'Timeout': 'Int',
          'UnhealthyThreshold': 'Int',
          'HttpMethod': 'String',
          'UrlPath': 'String',
          'HostName': 'String',
          'HealthCheckReq': 'String',
          'HealthCheckExp': 'String'
        }
      },
      'DescribeHealthChecks': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribeHealthChecks'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'HealthCheckId': 'Filter',
          'Filter': 'Filter',
          'Limit': 'Int',
          'Marker': 'String'
        }
      },
      'ConfigureHealthCheck': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'ConfigureHealthCheck'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ListenerId': 'String',
          'HealthCheckState': 'String',
          'HealthCheckConnectPort': 'Int',
          'HealthyThreshold': 'Int',
          'Interval': 'Int',
          'Timeout': 'Int',
          'UnhealthyThreshold': 'Int',
          'HttpMethod': 'String',
          'UrlPath': 'String',
          'HostName': 'String',
          'HealthCheckReq': 'String',
          'HealthCheckExp': 'String'
        }
      },
      'DescribeLoadBalancers': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribeLoadBalancers'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ProjectId': 'Filter',
          'LoadBalancerId': 'Filter',
          'Filter': 'Filter',
          'MaxResults': 'Int',
          'NextToken': 'String',
          'State': 'String'
        }
      },
      'ModifyLoadBalancer': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'ModifyLoadBalancer'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'LoadBalancerId': 'String',
          'LoadBalancerName': 'String',
          'LoadBalancerState': 'String'
        }
      },
      'CreateLoadBalancer': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'CreateLoadBalancer'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'VpcId': 'String',
          'LoadBalancerName': 'String',
          'Type': 'String',
          'SubnetId': 'String',
          'PrivateIpAddress': 'String',
          'IpVersion': 'String',
          'LbType': 'String',
          'ProjectId': 'String'
        }
      },
      'CreateHostHeader': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'CreateHostHeader'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ListenerId': 'String',
          'CertificateId': 'String',
          'HostHeader': 'String'
        }
      },
      'ModifyHostHeader': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'ModifyHostHeader'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'HostHeaderId': 'String',
          'CertificateId': 'String'
        }
      },
      'DeleteHostHeader': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DeleteHostHeader'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'HostHeaderId': 'String'
        }
      },
      'DescribeHostHeaders': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribeHostHeaders'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'HostHeaderId': 'Filter',
          'Filter': 'Filter',
          'MaxResults': 'Int',
          'NextToken': 'String'
        }
      },
      'DeleteRule': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DeleteRule'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'RuleId': 'String'
        }
      },
      'DescribeRules': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribeRules'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'RuleId': 'Filter',
          'Filter': 'Filter',
          'MaxResults': 'Int',
          'NextToken': 'String'
        }
      },
      'CreateBackendServerGroup': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'CreateBackendServerGroup'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'VpcId': 'String',
          'BackendServerGroupName': 'String',
          'BackendServerGroupType': 'String',
          'HostName': 'String',
          'HealthCheckState': 'String',
          'HealthyThreshold': 'Int',
          'Interval': 'Int',
          'Timeout': 'Int',
          'UnhealthyThreshold': 'Int',
          'UrlPath': 'String',
          'Region': 'String'
        }
      },
      'DeleteBackendServerGroup': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DeleteBackendServerGroup'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'BackendServerGroupId': 'String'
        }
      },
      'ModifyBackendServerGroup': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'ModifyBackendServerGroup'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'BackendServerGroupId': 'String',
          'BackendServerGroupName': 'String'
        }
      },
      'DescribeBackendServerGroups': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribeBackendServerGroups'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'BackendServerGroupId': 'Filter',
          'Filter': 'Filter',
          'MaxResults': 'Int',
          'NextToken': 'String'
        }
      },
      'RegisterBackendServer': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'RegisterBackendServer'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'BackendServerGroupId': 'String',
          'BackendServerIp': 'String',
          'BackendServerPort': 'Int',
          'Weight': 'Int'
        }
      },
      'DeregisterBackendServer': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DeregisterBackendServer'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'RegisterId': 'String'
        }
      },
      'DescribeBackendServers': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribeBackendServers'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'RegisterId': 'Filter',
          'Filter': 'Filter',
          'MaxResults': 'Int',
          'NextToken': 'String'
        }
      },
      'CreateLoadBalancerAcl': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'CreateLoadBalancerAcl'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'LoadBalancerAclName': 'String',
          'IpVersion': 'String'
        }
      },
      'DeleteLoadBalancerAcl': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DeleteLoadBalancerAcl'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'LoadBalancerAclId': 'String'
        }
      },
      'ModifyLoadBalancerAcl': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'ModifyLoadBalancerAcl'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'LoadBalancerAclId': 'String',
          'LoadBalancerAclName': 'String'
        }
      },
      'CreateLoadBalancerAclEntry': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'CreateLoadBalancerAclEntry'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'LoadBalancerAclId': 'String',
          'CidrBlock': 'String',
          'RuleNumber': 'Int',
          'RuleAction': 'String',
          'Protocol': 'String',
          'Description': 'String'
        }
      },
      'DeleteLoadBalancerAclEntry': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DeleteLoadBalancerAclEntry'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'LoadBalancerAclEntryId': 'String'
        }
      },
      'AssociateLoadBalancerAcl': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'AssociateLoadBalancerAcl'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'LoadBalancerAclId': 'String',
          'ListenerId': 'String'
        }
      },
      'DisassociateLoadBalancerAcl': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DisassociateLoadBalancerAcl'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ListenerId': 'String'
        }
      },
      'DescribeLoadBalancerAcls': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribeLoadBalancerAcls'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'LoadBalancerAclId': 'Filter',
          'MaxResults': 'Int',
          'NextToken': 'String'
        }
      },
      'CreateSlbRule': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'CreateSlbRule'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'Path': 'String',
          'HostHeaderId': 'String',
          'BackendServerGroupId': 'String',
          'ListenerSync': 'String',
          'Method': 'String',
          'SessionState': 'String',
          'SessionPersistencePeriod': 'Int',
          'cookieType': 'String',
          'CookieName': 'String',
          'HealthCheckState': 'String',
          'HealthyThreshold': 'String',
          'Interval': 'Int',
          'Timeout': 'Int',
          'UnhealthyThreshold': 'Int',
          'UrlPath': 'String',
          'HostName': 'String'
        }
      },
      'ModifySlbRule': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'ModifySlbRule'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'Path': 'String',
          'RuleId': 'String',
          'BackendServerGroupId': 'String',
          'ListenerSync': 'String',
          'Method': 'String',
          'SessionState': 'String',
          'SessionPersistencePeriod': 'Int',
          'cookieType': 'String',
          'CookieName': 'String',
          'HealthCheckState': 'String',
          'HealthyThreshold': 'String',
          'Interval': 'Int',
          'Timeout': 'Int',
          'UnhealthyThreshold': 'Int',
          'UrlPath': 'String',
          'HostName': 'String'
        }
      },
      'CreatePrivateLinkServer': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'CreatePrivateLinkServer'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'PrivateLinkServerName': 'String',
          'ListenerId': 'String',
          'Description': 'String',
          'ProjectId': 'String'
        }
      },
      'DescribePrivateLinkServer': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribePrivateLinkServer'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'PrivateLinkServerId': 'Filter',
          'ProjectId': 'Filter',
          'MaxResults': 'Int',
          'NextToken': 'String'
        }
      },
      'DeletePrivateLinkServer': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DeletePrivateLinkServer'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'PrivateLinkServerId': 'String'
        }
      },
      'ModifyPrivateLinkServer': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'ModifyPrivateLinkServer'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'PrivateLinkServerId': 'String',
          'PrivateLinkServerName': 'String',
          'Description': 'String'
        }
      },
      'AssociatePrivateLinkServer': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'AssociatePrivateLinkServer'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'PrivateLinkServerId': 'String',
          'LoadBalancerId': 'String',
          'ListenerPort': 'Int',
          'ProjectId': 'String'
        }
      },
      'DescribePrivateLink': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribePrivateLink'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'PrivateLinkId': 'Filter',
          'ProjectId': 'Filter',
          'MaxResults': 'Int',
          'NextToken': 'String'
        }
      },
      'DeletePrivateLink': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DeletePrivateLink'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'PrivateLinkId': 'String'
        }
      },
      'ModifyLoadBalancerAclEntry': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'ModifyLoadBalancerAclEntry'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'LoadBalancerAclEntryId': 'String',
          'RuleNumber': 'Int',
          'RuleAction': 'String',
          'Description': 'String'
        }
      },
      'AcceptPrivateLink': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'AcceptPrivateLink'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'PrivateLinkId': 'String'
        }
      },
      'RejectPrivateLink': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'RejectPrivateLink'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'PrivateLinkId': 'String'
        }
      },
      'ListPrivateLinkServer': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'ListPrivateLinkServer'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'PrivateLinkServerId': 'String',
          'Filter': 'Filter'
        }
      },
      'RemovePrivateLink': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'RemovePrivateLink'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'PrivateLinkServerId': 'String',
          'PrivateLinkId': 'String'
        }
      }
    });
  }

};