const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "ked.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "ked",
      },
    },
  };
  _apiList = {
    CloudDeskreinstall: {
      url: "/",
      method: "PUT",
      config: {
        query: {
          Version: "V1",
          Action: "CloudDeskreinstall",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        instanceId: "String",
        imageId: "String",
      },
    },
    CloudDeskmanage: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "V1",
          Action: "CloudDeskmanage",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        instanceIds: "Array",
        action1: "String",
      },
    },
    CloudDeskedit: {
      url: "/",
      method: "PUT",
      config: {
        query: {
          Version: "V1",
          Action: "CloudDeskedit",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        instanceId: "String",
        name: "String",
      },
    },
    CloudDeskcreate: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "V1",
          Action: "CloudDeskcreate",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        instanceName: "String",
        instanceType: "String",
        imageId: "String",
        edgeNodeId: "String",
        systemDisk: "Int",
        dataDisk: "Int",
        billType: "Int",
        duration: "Int",
        securityGroupId: "String",
        gpu: "String",
        quantity: "Int",
        uniqueSuffix: "Boolean",
      },
    },
    CloudDesklist: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V1",
          Action: "CloudDesklist",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        page: "Int",
        size: "Int",
        connected: "String",
        labelIds: "String",
        name: "String",
        userName: "String",
      },
    },
    Strategyruleedit: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "V1",
          Action: "Strategyruleedit",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        securityGroupId: "String",
        policies: "Array",
      },
    },
    Strategyrulecreate: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "V1",
          Action: "Strategyrulecreate",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        name: "String",
        description: "String",
        policies: "Array",
      },
    },
    Strategyunbound: {
      url: "/",
      method: "PUT",
      config: {
        query: {
          Version: "V1",
          Action: "Strategyunbound",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        securityGroupId: "String",
        instanceId: "String",
      },
    },
    Strategybound: {
      url: "/",
      method: "PUT",
      config: {
        query: {
          Version: "V1",
          Action: "Strategybound",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        securityGroupId: "String",
        instanceId: "String",
      },
    },
    Strategydelete: {
      url: "/",
      method: "DELETE",
      config: {
        query: {
          Version: "V1",
          Action: "Strategydelete",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        id: "Array",
      },
    },
    Strategyedit: {
      url: "/",
      method: "PUT",
      config: {
        query: {
          Version: "V1",
          Action: "Strategyedit",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        securityGroupId: "String",
        name: "String",
        description: "String",
      },
    },
    Strategycreate: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "V1",
          Action: "Strategycreate",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        name: "String",
        description: "String",
      },
    },
    Strategylist: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V1",
          Action: "Strategylist",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        size: "Int",
        page: "Int",
        name: "String",
      },
    },
    Rolesdelete: {
      url: "/",
      method: "DELETE",
      config: {
        query: {
          Version: "V1",
          Action: "Rolesdelete",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        id: "Int",
      },
    },
    Rolesedit: {
      url: "/",
      method: "PUT",
      config: {
        query: {
          Version: "V1",
          Action: "Rolesedit",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        id: "Int",
        name: "String",
        description: "String",
        fileTransfer: "Int",
        clipboard: "Int",
        disk: "Int",
        usb: "Int",
      },
    },
    Rolescreate: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "V1",
          Action: "Rolescreate",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        name: "String",
        description: "String",
        fileTransfer: "Int",
        clipboard: "Int",
        disk: "Int",
        usb: "Int",
      },
    },
    Roleslist: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V1",
          Action: "Roleslist",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        size: "Int",
        page: "Int",
        name: "String",
      },
    },
    Imagedelete: {
      url: "/",
      method: "DELETE",
      config: {
        query: {
          Version: "V1",
          Action: "Imagedelete",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        imageId: "String",
      },
    },
    Imageedit: {
      url: "/",
      method: "PUT",
      config: {
        query: {
          Version: "V1",
          Action: "Imageedit",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        id: "Int",
        imageId: "String",
        imageName: "String",
        description: "String",
      },
    },
    Imagecreate: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "V1",
          Action: "Imagecreate",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        imageName: "String",
        description: "String",
        instanceId: "String",
      },
    },
    Imagelist: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V1",
          Action: "Imagelist",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        size: "Int",
        page: "Int",
        name: "String",
      },
    },
    StrategyrulebatchEdit: {
      url: "/",
      method: "DELETE",
      config: {
        query: {
          Version: "V1",
          Action: "StrategyrulebatchEdit",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        securityGroupIds: "Array",
      },
    },
    Monitorregions: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V1",
          Action: "Monitorregions",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {},
    },
    Usersinstancebind: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "V1",
          Action: "Usersinstancebind",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        id: "Int",
        instanceId: "String",
      },
    },
    Userspasswordreset: {
      url: "/",
      method: "PUT",
      config: {
        query: {
          Version: "V1",
          Action: "Userspasswordreset",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        id: "Int",
        password: "String",
      },
    },
    Usersdelete: {
      url: "/",
      method: "DELETE",
      config: {
        query: {
          Version: "V1",
          Action: "Usersdelete",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        id: "Int",
      },
    },
    Usersedit: {
      url: "/",
      method: "PUT",
      config: {
        query: {
          Version: "V1",
          Action: "Usersedit",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        id: "Int",
        name: "String",
        phoneOrEmail: "String",
        nickName: "String",
        status: "Int",
      },
    },
    Userscreate: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "V1",
          Action: "Userscreate",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        name: "String",
        password: "String",
        phoneOrEmail: "String",
        roleId: "Int",
      },
    },
    Userslist: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V1",
          Action: "Userslist",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        size: "Int",
        page: "Int",
        username: "String",
        phone: "String",
        email: "String",
      },
    },
    CloudDeskgetDesktopUrl: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "V1",
          Action: "CloudDeskgetDesktopUrl",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        token: "String",
        instanceId: "String",
      },
    },
    QueryCloudDesksubmitShell: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "V1",
          Action: "QueryCloudDesksubmitShell",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        instanceIds: "Array",
        name: "String",
        shellContent: "String",
      },
    },
    CreateCloudDeskgetToken: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "V1",
          Action: "CreateCloudDeskgetToken",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        username: "String",
        password: "String",
      },
    },
    QueryShellStatus: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V1",
          Action: "QueryShellStatus",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        instanceIds: "String",
        planId: "Int",
      },
    },
    SetProxyIp: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "V1",
          Action: "SetProxyIp",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        instanceIds: "Array",
        province: "String",
        isp: "String",
        city: "String",
      },
    },
    GetProxyConfig: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V1",
          Action: "GetProxyConfig",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        instanceId: "String",
      },
    },
    QueryRuledetail: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V1",
          Action: "QueryRuledetail",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        securityGroupId: "String",
      },
    },
    QueryUsersinfo: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "V1",
          Action: "QueryUsersinfo",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        username: "String",
        phone: "String",
        email: "String",
      },
    },
    GetDetail: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V1",
          Action: "GetDetail",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        instanceId: "String",
      },
    },
    ListLabel: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V1",
          Action: "ListLabel",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        name: "String",
      },
    },
    CancelInstanceLabel: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "V1",
          Action: "CancelInstanceLabel",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        labelId: "Array",
        instanceId: "String",
      },
    },
    UpdateInstanceLabel: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "V1",
          Action: "UpdateInstanceLabel",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        labelId: "Array",
        instanceId: "String",
      },
    },
    DeleteLabel: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "V1",
          Action: "DeleteLabel",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        id: "Array",
      },
    },
    UpdateLabel: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "V1",
          Action: "UpdateLabel",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        id: "Int",
        name: "String",
      },
    },
    CreateLabel: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "V1",
          Action: "CreateLabel",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        name: "String",
      },
    },
  };
};
