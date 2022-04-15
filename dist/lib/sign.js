"use strict";

require("core-js/modules/es.array.sort.js");

const crypto = require("crypto-js"); // const qs = require("qs")


module.exports = {
  getSignedParams,
  fixedEncodeURIComponent,
  getFlatParams,
  flatObj,
  getFormatParams,
  isArrayOrObjectNotNull
};
/**
 * 简化版签名算法
 * @param {*} params 参数
 * @param {*} sk
 */

function getSignedParams(params, sk) {
  if (!sk) {
    throw new Error('need sk');
  } // 第零点一步：参数扁平化处理


  let flatParams = getFlatParams(params); // 第零点二步：去除值为null的参数, boolean转字符串

  flatParams = getFormatParams(flatParams); // 第一步：请求参数排序 请求参数包括公共参数和业务参数，不包含公共参数Signature。 排序规则以参数名按照字典排序.

  let sortParamKeys = Object.keys(flatParams).sort(); // 第二步：请求参数编码
  // 使用UTF-8字符集按照RFC3986规则编码请求参数和参数取值
  // 第三步：请求参数拼接成CanonicalizedQueryString
  // 每对URLEncode后的参数名称和参数值，用=进行连接。每对之间使用&进行连接。得到规范化请求字符串CanonicalizedQueryString

  let canonicalizedQueryString = sortParamKeys.map(key => {
    let value = flatParams[key];
    return `${fixedEncodeURIComponent(key)}=${fixedEncodeURIComponent(value)}`;
  }).join('&'); // 参见源码得qs的处理顺序-符合流程：1. 去除null 2. 排序、3. 编码 4. 按照url参数拼接
  // let canonicalizedQueryString = qs.stringify(flatParams, {
  //     sort: (a, b) => a.localeCompare(b),
  //     format : 'RFC3986',
  //     skipNulls: true,
  //     arrayFormat: 'indices', // 数组转成a[0]
  //     allowDots: true, // 对象转成a.b.c
  //  } )
  // 计算签名。

  let sign = crypto.HmacSHA256(canonicalizedQueryString, sk).toString(); // 添加到请求参数

  return { ...flatParams,
    Signature: sign
  };
}
/**
 * RFC 3986
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
 * @param {*} str
 * @returns
 */


function fixedEncodeURIComponent(str) {
  // encodeURIComponent比RFC 3986少了!'()*这个几个字符的转义
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * 格式化参数，对Array,Filter(Object),Object类型做扁平处理
 * @example
 * 转换前：{ arr: [1,2], filter: {1: {a: 1}} }
 * 转换后：{ 'arr[0]':1, 'arr[1]':2, 'filter.1.a': 1 }
 * @param {string} apiAction 接口名
 * @param {object} params 参数值
 * @returns 格式化后的参数
 */


function getFlatParams(params) {
  let res = {};
  Object.keys(params).forEach(key => {
    let value = params[key];

    if (isArrayOrObjectNotNull(value)) {
      res = { ...res,
        ...flatObj(key, params[key])
      };
    } else {
      res[key] = value;
    }
  });
  return res;
}
/**
 * 扁平化对象
 * @param {string} pKey key
 * @param {*} value 对象或者数组，非null
 * @returns
 */


function flatObj(pKey, value) {
  let res = {};
  let prefixName = '';
  Object.keys(value).forEach(key => {
    if (Array.isArray(value)) {
      prefixName = `${pKey}[${key}]`;
    } else {
      prefixName = `${pKey}.${key}`;
    }

    let childValue = value[key];

    if (isArrayOrObjectNotNull(childValue)) {
      res = { ...res,
        ...flatObj(prefixName, childValue)
      };
    } else {
      res[prefixName] = childValue;
    }
  });
  return res;
}
/**
 * 1. 剔除null、undefined,
 * 2. boolean转字符串
 * @param {object} params 参数对象
 * @returns {object}
 */


function getFormatParams(params) {
  Object.keys(params).forEach(key => {
    if (params[key] == null) {
      delete params[key];
    }

    if (Object.prototype.toString.call(params[key]) == '[object Boolean]') {
      params[key] = params[key].toString();
    }
  });
  return params;
}
/**
 * 是否为数组或者对象，非null
 * @param {any} value
 * @returns {boolean}
 */


function isArrayOrObjectNotNull(value) {
  return Array.isArray(value) || Object.prototype.toString.call(value) == '[object Object]';
}