"use strict";

require("core-js/modules/es.json.stringify.js");
require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.for-each.js");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const {
  getSignatureHeaders,
  getCanonicalizedQuery
} = require('../lib/signautreV4.js');
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
    params = this.formatParams(apiAction, params);
    let apiConfig = this._apiList[apiAction];
    let protocol = this.httpProfile.protocol || this._baseConfig.protocol;
    let endpoint = this.httpProfile.endpoint || this._baseConfig.endpoint;
    let method = (this.httpProfile.method || apiConfig.method).toUpperCase();
    let region = this.region || this._baseConfig.config.credentials.region;
    let headers = {
      ...(this._baseConfig.config.headers || {}),
      ...(apiConfig.config.headers || {})
    };
    let query = apiConfig.config.query;
    if (['GET', 'OPTION', 'HEAD'].includes(method)) {
      query = {
        ...query,
        ...params
      };
    }
    let body = this.getBody(method, headers['Content-Type'], params);
    let signParams = {
      path: apiConfig.url,
      query,
      body: body || '',
      headers,
      host: endpoint,
      method,
      region,
      service: this._baseConfig.config.credentials.service,
      access_key: this.ak,
      secret_key: this.sk
    };
    let signHeaders = getSignatureHeaders(signParams);
    let url = `${protocol}${endpoint}${apiConfig.url}?${getCanonicalizedQuery(query)}`;
    let timeoutSecond = this.httpProfile.timeout || this._baseConfig.config.timeout;
    return fetch(url, {
      method: method,
      timeout: timeoutSecond * 1000,
      headers: signHeaders,
      body
    });
  }
  /**
   * 格式化参数，对Filter类型做扁平处理
   * @param {string} apiAction 接口名
   * @param {object} params 参数值
   * @returns 格式化后的参数
   */
  formatParams(apiAction, params) {
    let paramsType = this._apiList[apiAction].paramsType;
    if (!paramsType || params == null) {
      return params;
    }
    let res = {};
    Object.keys(params).forEach(key => {
      let type = paramsType[key];
      // 这些类型不用处理，如果为null、undefined则排除掉
      if (['String', 'Int', 'Double', 'Long', 'Boolean', 'Array'].includes(type) && params[key] != null) {
        res[key] = params[key];
      }
      if (type == 'Filter') {
        res = {
          ...res,
          ...this.formatFilter(key, params[key])
        };
      }
    });
    return res;
  }
  formatFilter(pKey, value) {
    let res = {};
    Object.keys(value).forEach(key => {
      let prefixName = `${pKey}.${key}`;
      let childValue = value[key];
      if (typeof childValue == 'object') {
        res = {
          ...res,
          ...this.formatFilter(prefixName, childValue)
        };
      } else {
        res[prefixName] = childValue;
      }
    });
    return res;
  }

  /**
   * 获取body
   * @param {string} method 请求类型
   * @param {string} contentType
   * @param {object} params 参数对象
   * @returns {string}
   */
  getBody(method, contentType, params) {
    if (!['POST', 'PUT'].includes(method) || JSON.stringify(params) == '{}') {
      return null;
    }
    // 目前只有下面这两种
    if (contentType == 'application/x-www-form-urlencoded') {
      return qs.stringify(params);
    }
    if (contentType == 'application/json') {
      return JSON.stringify(params);
    }
    return JSON.stringify(params);
  }
};