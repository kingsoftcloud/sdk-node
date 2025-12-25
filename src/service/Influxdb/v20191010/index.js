const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "Influxdb.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "Influxdb",
      },
    },
  };
  _apiList = {
    CreateInstance: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-10-10",
          Action: "CreateInstance",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ProjectId: "String",
        InstanceName: "String",
        ProductType: "String",
        EngineVersion: "String",
        InstanceType: "String",
        EbsType: "String",
        EbsSize: "Int",
        VpcId: "String",
        SubnetId: "String",
        BillType: "Int",
      },
    },
    DeleteInstance: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-10-10",
          Action: "DeleteInstance",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceIds: "String",
      },
    },
    DescribeInstance: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-10-10",
          Action: "DescribeInstance",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
      },
    },
    DescribeInstances: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-10-10",
          Action: "DescribeInstances",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        InstanceName: "String",
        Vip: "String",
        VpcId: "String",
        FuzzySearch: "String",
      },
    },
    DescribeInstanceNode: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-10-10",
          Action: "DescribeInstanceNode",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
      },
    },
    RenameInstance: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-10-10",
          Action: "RenameInstance",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        InstanceName: "String",
      },
    },
    DescribeValidRegions: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-10-10",
          Action: "DescribeValidRegions",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        Action: "String",
      },
    },
    DescribeSecurityGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-10-10",
          Action: "DescribeSecurityGroup",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
      },
    },
    CreateSecurityRule: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-10-10",
          Action: "CreateSecurityRule",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        SecurityRuleCidrs: "String",
      },
    },
    DeleteSecurityRule: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-10-10",
          Action: "DeleteSecurityRule",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        SecurityRuleIds: "String",
      },
    },
    DescribeDatabases: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-10-10",
          Action: "DescribeDatabases",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        Offset: "Int",
        Limit: "Int",
      },
    },
    CreateDatabase: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-10-10",
          Action: "CreateDatabase",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        DatabaseName: "String",
      },
    },
    DeleteDatabase: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-10-10",
          Action: "DeleteDatabase",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        DatabaseName: "String",
      },
    },
    DescribeRetentionPolicyList: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-10-10",
          Action: "DescribeRetentionPolicyList",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        DatabaseName: "String",
      },
    },
    CreateRetentionPolicy: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-10-10",
          Action: "CreateRetentionPolicy",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        DatabaseName: "String",
        PolicyName: "String",
        Duration: "String",
        DefaultPolicy: "String",
      },
    },
    DeleteRetentionPolicy: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-10-10",
          Action: "DeleteRetentionPolicy",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        DatabaseName: "String",
        PolicyName: "String",
      },
    },
    ModifyRetentionPolicy: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-10-10",
          Action: "ModifyRetentionPolicy",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        DatabaseName: "String",
        PolicyName: "String",
        Duration: "String",
      },
    },
    DescribeMeasurements: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-10-10",
          Action: "DescribeMeasurements",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        DatabaseName: "String",
      },
    },
    DeleteMeasurement: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-10-10",
          Action: "DeleteMeasurement",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        DatabaseName: "String",
        MeasurementName: "String",
      },
    },
    DescribeAccounts: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-10-10",
          Action: "DescribeAccounts",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
      },
    },
    CreateAccount: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-10-10",
          Action: "CreateAccount",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        AccountName: "String",
        AccountPassword: "String",
      },
    },
    DeleteAccount: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-10-10",
          Action: "DeleteAccount",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        AccountName: "String",
      },
    },
    DescribeAccountPrivileges: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-10-10",
          Action: "DescribeAccountPrivileges",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        AccountName: "String",
      },
    },
    GrantAccountPrivilege: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-10-10",
          Action: "GrantAccountPrivilege",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        AccountName: "String",
        DatabaseName: "String",
        AccountPrivilege: "String",
      },
    },
    RevokeAccountPrivilege: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-10-10",
          Action: "RevokeAccountPrivilege",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        AccountName: "String",
        DatabaseName: "String",
      },
    },
    ResetAccountPassword: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-10-10",
          Action: "ResetAccountPassword",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        AccountName: "String",
        AccountPassword: "String",
      },
    },
    DescribeAccountDetailList: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-10-10",
          Action: "DescribeAccountDetailList",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        Action: "String",
      },
    },
  };
};
