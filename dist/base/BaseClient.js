"use strict";

require("core-js/modules/es.json.stringify.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const getSignedParams = require('../lib/sign.js').getSignedParams;

const fetch = require('../lib/fetch.js');

const dayjs = require('dayjs');

const utc = require('dayjs/plugin/utc.js');

const qs = require('qs');

dayjs.extend(utc);
module.exports = class BaseClient {
  constructor(clientConfig) {
    _defineProperty(this, "_baseConfig", {});

    _defineProperty(this, "_apiList", {});

    this.ak = clientConfig.credential.secretId, this.sk = clientConfig.credential.secretKey;
    this.region = clientConfig.region;
    this.httpProfile = clientConfig.httpProfile || {};

    if (!this.ak || !this.sk) {
      throw new Error('secretId and secretKey are required');
    }
  }
  /**
   * 发起请求
   * @param {string} apiAction 接口名
   * @param {object} data 参数 { body, query }
   */


  request(apiAction, params = {}) {
    let apiConfig = this._apiList[apiAction];
    let publicParams = {
      Accesskey: this.ak,
      Service: this._baseConfig.config.credentials.service,
      Action: apiAction,
      Version: apiConfig.config.query.Version,
      Timestamp: dayjs().utc().format('YYYY-MM-DDThh:mm:ss') + 'Z',
      SignatureVersion: '1.0',
      SignatureMethod: 'HMAC-SHA256',
      Region: this.region || this._baseConfig.config.credentials.region
    };
    let combainParams = { ...publicParams,
      ...params
    };
    let signedParams = getSignedParams(combainParams, this.sk);
    let protocol = this.httpProfile.protocol || this._baseConfig.protocol;
    let endpoint = this.httpProfile.endpoint || this._baseConfig.endpoint;
    let method = this.httpProfile.method || apiConfig.method;
    let url = `${protocol}${endpoint}${apiConfig.url}`;

    if (['GET', 'DELETE', 'OPTION', 'HEAD'].includes(method.toUpperCase())) {
      url += `?${qs.stringify(signedParams)}`;
    }

    let headers = { ...(this._baseConfig.config.headers || {}),
      ...(apiConfig.config.headers || {}),
      // 目前kop只支持application/x-www-form-urlencoded类型的签名解析
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    let body = this.getBody(method, headers['Content-Type'], signedParams);
    let timeoutSecond = this.httpProfile.timeout || this._baseConfig.config.timeout;
    return fetch(url, {
      method: method,
      timeout: timeoutSecond * 1000,
      headers,
      body
    });
  }
  /**
   * 获取body
   * @param {string} method 请求类型
   * @param {string} contentType
   * @param {object} signedParams 参数对象
   * @returns {string}
   */


  getBody(method, contentType, signedParams) {
    if (!['POST', 'PUT'].includes(method.toUpperCase())) {
      return undefined;
    } // 目前只有下面这两种


    if (contentType == 'application/x-www-form-urlencoded') {
      return qs.stringify(signedParams);
    }

    if (contentType == 'application/json') {
      return JSON.stringify(signedParams);
    }

    return JSON.stringify(signedParams);
  }

};