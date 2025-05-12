"use strict";

require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.reduce.js");
const fs = require('fs');
const path = require('path');

// /xxx/node-sdk/src/service
let servicePath = path.resolve(__dirname, './service');
// [Iam, Kec]
let serviceDirs = fs.readdirSync(servicePath);

/**
 * {
 *    Iam: {
 *       v20150101: Client
 *    }
 * }
 */
module.exports = serviceDirs.reduce((acc, serviceDir) => {
  // /xxx/node-sdk/src/service/iam
  let versionPath = path.resolve(servicePath, serviceDir);
  if (fs.statSync(versionPath).isDirectory()) {
    // [v20151101, v20160606]
    let versionDirs = fs.readdirSync(versionPath);
    // acc.Iam
    acc[serviceDir] = versionDirs.reduce((accVersion, versionDir) => {
      // /xxx/node-sdk/src/service/iam/v20151101/index.js
      let filePath = path.resolve(versionPath, versionDir, 'index.js');
      if (fs.existsSync(filePath)) {
        // accVersion.v20151101
        accVersion[versionDir] = require(filePath);
      }
      return accVersion;
    }, {});
  }
  return acc;
}, {});