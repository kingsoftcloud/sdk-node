const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "ket.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "ket",
      },
    },
  };
  _apiList = {
    Preset: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2017-01-01",
          Action: "Preset",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        UniqName: "String",
        App: "String",
        Preset: "String",
        Description: "String",
        Output: "String",
        Video: "String",
      },
    },
    UpdatePreset: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2017-01-01",
          Action: "UpdatePreset",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        UniqName: "String",
        App: "String",
        Preset: "String",
        Description: "String",
        Output: "String",
        Video: "String",
      },
    },
    DelPreset: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2017-01-01",
          Action: "DelPreset",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        UniqName: "String",
        App: "String",
        Preset: "String",
      },
    },
    GetPresetList: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2017-01-01",
          Action: "GetPresetList",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        UniqName: "String",
        App: "String",
      },
    },
    GetPresetDetail: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2017-01-01",
          Action: "GetPresetDetail",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        UniqName: "String",
        App: "String",
        Preset: "String",
      },
    },
    GetStreamTranList: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2017-01-01",
          Action: "GetStreamTranList",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        UniqName: "String",
        App: "String",
        StreamID: "String",
      },
    },
  };
};
