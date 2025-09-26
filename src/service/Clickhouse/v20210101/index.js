const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "clickhouse.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "clickhouse",
      },
    },
  };
  _apiList = {
    ListInstance: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-01-01",
          Action: "ListInstance",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ProductType: "String",
        TagId: "String",
        ProjectIds: "Filter",
        FuzzySearch: "String",
        OrderBy: "Filter",
        Offset: "Int",
        Limit: "Int",
      },
    },
    DescribeInstance: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-01-01",
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
    CreateInstance: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-01-01",
          Action: "CreateInstance",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ProductType: "String",
        InstanceName: "String",
        InstanceType: "String",
        AdminUser: "String",
        AdminPassword: "String",
        VpcId: "String",
        SubnetId: "String",
        Engine: "String",
        EngineVersion: "String",
        ProjectId: "String",
        BillType: "Int",
        Duration: "Int",
        EbsSize: "Int",
        EbsType: "String",
        Mem: "Int",
        Cpu: "Int",
        TcpPort: "Int",
        HttpPort: "Int",
        Az: "String",
        NodeNum: "Int",
        PreferredBackupTime: "String",
        SecurityGroupId: "String",
      },
    },
    DeleteInstance: {
      url: "/",
      method: "DELETE",
      config: {
        query: {
          Version: "2021-01-01",
          Action: "DeleteInstance",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceIds: "Filter",
        DeleteDirectly: "Boolean",
      },
    },
    RenameInstance: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-01-01",
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
    ListSecurityGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-01-01",
          Action: "ListSecurityGroup",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ProductType: "Int",
      },
    },
    DescribeSecurityGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-01-01",
          Action: "DescribeSecurityGroup",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ProductType: "Int",
        SecurityGroupId: "String",
      },
    },
    CreateSecurityGroup: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-01-01",
          Action: "CreateSecurityGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ProductType: "Int",
        SecurityGroupName: "String",
        Description: "String",
      },
    },
    DeleteSecurityGroup: {
      url: "/",
      method: "DELETE",
      config: {
        query: {
          Version: "2021-01-01",
          Action: "DeleteSecurityGroup",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        SecurityGroupIds: "String",
        ProductType: "Int",
      },
    },
    RenameSecurityGroup: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-01-01",
          Action: "RenameSecurityGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ProductType: "Int",
        SecurityGroupId: "String",
        SecurityGroupName: "String",
        Description: "String",
      },
    },
    CloneSecurityGroup: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-01-01",
          Action: "CloneSecurityGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ProductType: "Int",
        SrcSecurityGroupId: "String",
        SecurityGroupName: "String",
        Description: "String",
      },
    },
    BindSecurityGroup: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-01-01",
          Action: "BindSecurityGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ProductType: "Int",
        SecurityGroupIds: "Array",
        InstanceIds: "String",
      },
    },
    UnbindSecurityGroup: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-01-01",
          Action: "UnbindSecurityGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ProductType: "Int",
        SecurityGroupId: "String",
        InstanceIds: "Array",
      },
    },
    CreateSecurityRule: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-01-01",
          Action: "CreateSecurityRule",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ProductType: "Int",
        SecurityGroupId: "String",
        Cidrs: "Array",
      },
    },
    DeleteSecurityRule: {
      url: "/",
      method: "DELETE",
      config: {
        query: {
          Version: "2021-01-01",
          Action: "DeleteSecurityRule",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ProductType: "Int",
        SecurityGroupId: "String",
        RuleIds: "String",
      },
    },
    ListSecuredInstance: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-01-01",
          Action: "ListSecuredInstance",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        SecurityGroupId: "String",
        ProjectIds: "Filter",
        FuzzySearch: "String",
        Offset: "Int",
        Limit: "Int",
        OrderBy: "Filter",
      },
    },
    ListUnsecuredInstance: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-01-01",
          Action: "ListUnsecuredInstance",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        FuzzySearch: "String",
        Offset: "Int",
        Limit: "Int",
        OrderBy: "Filter",
      },
    },
    ListRecycledInstance: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-01-01",
          Action: "ListRecycledInstance",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ProductType: "String",
        ProjectIds: "Filter",
        FuzzySearch: "String",
        OrderBy: "Filter",
        Offset: "Int",
        Limit: "Int",
      },
    },
    RecoverRecycledInstance: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-01-01",
          Action: "RecoverRecycledInstance",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceIds: "Array",
      },
    },
    DropRecycledInstance: {
      url: "/",
      method: "DELETE",
      config: {
        query: {
          Version: "2021-01-01",
          Action: "DropRecycledInstance",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceIds: "Filter",
      },
    },
    ListRegion: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-01-01",
          Action: "ListRegion",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ProductType: "Int",
      },
    },
    DescRegion: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-01-01",
          Action: "DescRegion",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ProductType: "Int",
        RegionCode: "String",
      },
    },
    UpdateSecurityRule: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-01-01",
          Action: "UpdateSecurityRule",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ProductType: "Int",
        RuleId: "String",
        Description: "String",
      },
    },
    RebindSecurityGroup: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-01-01",
          Action: "RebindSecurityGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ProductType: "Int",
        SecurityGroupId: "String",
        InstanceId: "String",
      },
    },
    DescribeEngineDefaultParameters: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-01-01",
          Action: "DescribeEngineDefaultParameters",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        EngineVersion: "String",
        ConfigType: "String",
      },
    },
    ModifyDBParameterGroup: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-01-01",
          Action: "ModifyDBParameterGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        Parameters: "Filter",
        ConfigType: "String",
      },
    },
    DescribeDBInstanceParameters: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-01-01",
          Action: "DescribeDBInstanceParameters",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        ConfigType: "String",
      },
    },
    ResetDBParameter: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-01-01",
          Action: "ResetDBParameter",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        ConfigType: "String",
      },
    },
  };
};
