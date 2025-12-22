"use strict";

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const BaseClient = require("../../../base/BaseClient.js");
module.exports = class Client extends BaseClient {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "_baseConfig", {
      'protocol': 'http://',
      'endpoint': 'pdns.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'pdns'
        }
      }
    });
    _defineProperty(this, "_apiList", {
      'CreatePrivateDns': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'CreatePrivateDns'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'Action': 'String',
          'Version': 'String',
          'ProjectId': 'String'
        }
      },
      'DeletePrivateDns': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DeletePrivateDns'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'Action': 'String',
          'Version': 'String',
          'ProjectId': 'String'
        }
      },
      'DescribePrivateDns': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribePrivateDns'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'Action': 'String',
          'Version': 'String'
        }
      },
      'AssociateVpcs': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'AssociateVpcs'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'Action': 'String',
          'Version': 'String',
          'VpcId': 'String'
        }
      },
      'DisassociateVpcs': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DisassociateVpcs'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'Action': 'String',
          'Version': 'String',
          'VpcId': 'String'
        }
      },
      'CreateZone': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'CreateZone'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'Action': 'String',
          'Version': 'String',
          'ZoneName': 'String',
          'ZoneTtl': 'Int'
        }
      },
      'DeleteZone': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DeleteZone'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'Action': 'String'
        }
      },
      'ModifyZone': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'ModifyZone'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'Action': 'String'
        }
      },
      'DescribeZone': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribeZone'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'Action': 'String'
        }
      },
      'CreateRecord': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'CreateRecord'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'Action': 'String'
        }
      },
      'DeleteRecord': {
        'url': '/',
        'method': 'PUT',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DeleteRecord'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'Action': 'String'
        }
      },
      'DescribeRecord': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribeRecord'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'Action': 'String'
        }
      },
      'CreateRecordData': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'CreateRecordData'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'Action': 'String'
        }
      },
      'DeleteRecordData': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DeleteRecordData'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'Action': 'String'
        }
      },
      'CreatePdnsZone': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'CreatePdnsZone'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ZoneName': 'String',
          'ZoneTtl': 'Int',
          'ProjectId': 'String',
          'ChargeType': 'String'
        }
      },
      'ModifyPdnsZone': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'ModifyPdnsZone'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ZoneId': 'String',
          'ZoneTtl': 'Int'
        }
      },
      'DeletePdnsZone': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DeletePdnsZone'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ZoneId': 'String'
        }
      },
      'DescribePdnsZones': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribePdnsZones'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'Filter': 'Filter',
          'MaxResults': 'Int',
          'NextToken': 'String'
        }
      },
      'BindZoneVpc': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'BindZoneVpc'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ZoneId': 'String',
          'Vpcs': 'Filter'
        }
      },
      'UnbindZoneVpc': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'UnbindZoneVpc'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ZoneId': 'String',
          'Vpcs': 'Filter'
        }
      },
      'CreateZoneRecord': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'CreateZoneRecord'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ZoneId': 'String',
          'RecordName': 'String',
          'Type': 'String',
          'RecordTtl': 'Int',
          'RecordValue': 'String'
        }
      },
      'DeleteZoneRecord': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DeleteZoneRecord'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ZoneId': 'String',
          'RecordId': 'String',
          'RecordValue': 'String',
          'Priority': 'String',
          'Weight': 'String',
          'Port': 'String'
        }
      },
      'ModifyZoneRecord': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'ModifyZoneRecord'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ZoneId': 'String',
          'RecordId': 'String',
          'RecordTtl': 'Int'
        }
      },
      'DescribeZoneRecord': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribeZoneRecord'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ZoneId': 'String',
          'RecordId': 'Filter',
          'Filter': 'Filter'
        }
      },
      'UnbindFdZoneVpc': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'UnbindFdZoneVpc'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'BindVpcId': 'Filter'
        }
      },
      'BindFdZoneVpc': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'BindFdZoneVpc'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'FdZoneId': 'String',
          'RegionName': 'String',
          'VpcId': 'Filter'
        }
      },
      'DescribePdnsFdZone': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribePdnsFdZone'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'FdZoneId': 'Filter',
          'Filter': 'Filter'
        }
      },
      'DeletePdnsFdZone': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DeletePdnsFdZone'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'FdZoneId': 'String'
        }
      },
      'ModifyPdnsFdZone': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'ModifyPdnsFdZone'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'FdZoneId': 'String',
          'Description': 'String',
          'ForwardIp': 'Filter'
        }
      },
      'CreatePdnsFdZone': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'CreatePdnsFdZone'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'EndPointId': 'String',
          'FdZoneName': 'String',
          'Description': 'String',
          'ForwardIp': 'Filter'
        }
      },
      'QueryEndPointRegionAZ': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'QueryEndPointRegionAZ'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'Region': 'String'
        }
      },
      'DescribeEndPoints': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribeEndPoints'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'EndPointId': 'Filter'
        }
      },
      'DeleteEndPoint': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DeleteEndPoint'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'EndPointId': 'String'
        }
      },
      'ModifyEndPoint': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'ModifyEndPoint'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'EndPointId': 'String',
          'EndPointName': 'String',
          'Description': 'String',
          'IpConfig': 'Filter'
        }
      },
      'CreateEndPoint': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'CreateEndPoint'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'EndPointName': 'String',
          'Region': 'String',
          'VpcId': 'String',
          'Description': 'String',
          'IpConfig': 'Filter'
        }
      }
    });
  }
};