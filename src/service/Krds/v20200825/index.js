const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "krds.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "krds",
      },
    },
  };
  _apiList = {
    CreateSecurityGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-08-25",
          Action: "CreateSecurityGroup",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        SecurityGroupName: "String",
        SecurityGroupDescription: "String",
        SecurityGroupType: "String",
        DBInstanceIdentifier: "Filter",
        "SecurityGroupRule.SecurityGroupRuleName.N": "String",
        "SecurityGroupRule.SecurityGroupRuleCidr.N": "String",
      },
    },
    DescribeSecurityGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-08-25",
          Action: "DescribeSecurityGroup",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        "SecurityGroupId.N": "String",
        SecurityGroupType: "String",
      },
    },
    DeleteSecurityGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-08-25",
          Action: "DeleteSecurityGroup",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        SecurityGroupIds: "String",
      },
    },
    ModifySecurityGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-08-25",
          Action: "ModifySecurityGroup",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        SecurityGroupId: "String",
        SecurityGroupName: "String",
        SecurityGroupDescription: "String",
      },
    },
    CloneSecurityGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-08-25",
          Action: "CloneSecurityGroup",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        SecurityGroupId: "String",
        SecurityGroupName: "String",
        SecurityGroupDescription: "String",
      },
    },
    ModifySecurityGroupRule: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-08-25",
          Action: "ModifySecurityGroupRule",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        SecurityGroupRuleAction: "String",
        SecurityGroupId: "String",
        "SecurityGroupRule.SecurityGroupRuleId": "Filter",
        "SecurityGroupRule.SecurityGroupRuleName": "Filter",
        "SecurityGroupRule.SecurityGroupRuleCidr": "Filter",
      },
    },
    SecurityGroupRelation: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-08-25",
          Action: "SecurityGroupRelation",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        RelationAction: "String",
        SecurityGroupId: "String",
        DBInstanceIdentifier: "String",
      },
    },
    ModifySecurityGroupRuleName: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-08-25",
          Action: "ModifySecurityGroupRuleName",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        SecurityGroupId: "String",
        SecurityGroupRuleId: "String",
        SecurityGroupRuleName: "String",
      },
    },
  };
};
