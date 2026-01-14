"use strict";

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const BaseClient = require("../../../base/BaseClient.js");
module.exports = class Client extends BaseClient {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "_baseConfig", {
      protocol: "http://",
      endpoint: "krds.api.ksyun.com",
      config: {
        timeout: 60,
        //设置timeout
        headers: {
          Accept: "application/json"
        },
        credentials: {
          region: "cn-shanghai-3",
          service: "krds"
        }
      }
    });
    _defineProperty(this, "_apiList", {
      RebootDBInstance: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "RebootDBInstance"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String"
        }
      },
      ModifyDBParameterGroup: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "ModifyDBParameterGroup"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBParameterGroupId: "String",
          Parameters: "Filter",
          DBParameterGroupName: "String",
          Description: "String"
        }
      },
      ResetDBParameterGroup: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "ResetDBParameterGroup"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBParameterGroupId: "String"
        }
      },
      DescribeDBParameterGroup: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "DescribeDBParameterGroup"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBParameterGroupId: "String",
          Keyword: "String",
          Marker: "Int",
          MaxRecords: "Int",
          Source: "String"
        }
      },
      DescribeEngineDefaultParameters: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "DescribeEngineDefaultParameters"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Engine: "String",
          EngineVersion: "String"
        }
      },
      CreateDBParameterGroup: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "CreateDBParameterGroup"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBParameterGroupName: "String",
          Engine: "String",
          EngineVersion: "String",
          "Parameters.Name": "Filter",
          "Parameters.Value": "Filter",
          Description: "String"
        }
      },
      DeleteDBParameterGroup: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "DeleteDBParameterGroup"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBParameterGroupId: "String"
        }
      },
      CreateDBInstance: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "CreateDBInstance"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Mem: "Int",
          Disk: "Int",
          DBInstanceName: "String",
          Engine: "String",
          EngineVersion: "String",
          MasterUserPassword: "String",
          MasterUserName: "String",
          DBInstanceType: "String",
          VpcId: "String",
          SubnetId: "String",
          PreferredBackupTime: "String",
          DBParameterGroupId: "String",
          SecurityGroupId: "String",
          Port: "String",
          BillType: "String",
          Duration: "String",
          DurationUnit: "String",
          AvailabilityZone: "Filter",
          ProjectId: "Int",
          TableNamesAreCaseSensitive: "Int"
        }
      },
      RestoreDBInstanceFromDBBackup: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "RestoreDBInstanceFromDBBackup"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceName: "String",
          DBBackupIdentifier: "String",
          DBInstanceType: "String",
          ProjectId: "String",
          AvailabilityZone: "String",
          Duration: "Int",
          DurationUnit: "String",
          Port: "Int",
          BillType: "String"
        }
      },
      DeleteDBInstance: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "DeleteDBInstance"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String"
        }
      },
      CreateDBInstanceReadReplica: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "CreateDBInstanceReadReplica"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          DBInstanceName: "String",
          AttachedVipId: "String",
          BillType: "String",
          Duration: "String",
          DurationUnit: "String",
          "AvailabilityZone.1": "String",
          ProjectId: "Int",
          Vip: "String",
          Mem: "Int",
          Disk: "Int"
        }
      },
      RestoreDBInstanceToPointInTime: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "RestoreDBInstanceToPointInTime"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          RestorableTime: "String"
        }
      },
      DescribeDBInstanceRestorableTime: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "DescribeDBInstanceRestorableTime"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String"
        }
      },
      ModifyDBInstance: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "ModifyDBInstance"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          PreferredBackupTime: "String",
          DBInstanceName: "String",
          DBParameterGroupId: "String"
        }
      },
      DescribeDBLogFiles: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "DescribeDBLogFiles"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          DBLogType: "String",
          Marker: "Int",
          MaxRecords: "Int"
        }
      },
      DescribeDBBackups: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "DescribeDBBackups"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          BackupType: "String",
          Keyword: "String",
          Marker: "String",
          MaxRecords: "Int"
        }
      },
      ModifyDBInstanceSpec: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "ModifyDBInstanceSpec"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          Mem: "Int",
          Disk: "Int"
        }
      },
      DescribeDBInstances: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "DescribeDBInstances"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          DBInstanceType: "String",
          DBInstanceStatus: "String",
          Keyword: "String",
          Order: "String",
          ProjectId: "String",
          Marker: "Int",
          MaxRecords: "Int",
          DBInstanceIdentifierIn: "Filter",
          DBInstanceNameIn: "Filter",
          VipIn: "Filter",
          EIPIn: "Filter",
          ExpiryDateLessThan: "Int"
        }
      },
      OverrideDBInstance: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "OverrideDBInstance"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          DBBackupIdentifier: "String"
        }
      },
      DescribeDBEngineVersions: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "DescribeDBEngineVersions"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {}
      },
      UpgradeDBInstanceEngineVersion: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "UpgradeDBInstanceEngineVersion"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          Engine: "String",
          EngineVersion: "String"
        }
      },
      ModifyDBInstanceType: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "ModifyDBInstanceType"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          DBInstanceType: "String",
          BillType: "String",
          Duration: "Int",
          DurationUnit: "String",
          AvailabilityZone: "String"
        }
      },
      DescribeDBInstanceParameters: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "DescribeDBInstanceParameters"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String"
        }
      },
      ModifyDBBackupPolicy: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "ModifyDBBackupPolicy"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          PreferredBackupTime: "String",
          ExpireAfter: "Int",
          IncrementalBackupCycle: "String",
          FullBackupCycle: "String",
          BinlogExpireAfter: "Int",
          HighFrequencyBackup: "Boolean"
        }
      },
      DescribeDBBackupPolicy: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "DescribeDBBackupPolicy"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String"
        }
      },
      DeleteDBBackup: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "DeleteDBBackup"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBBackupIdentifier: "String"
        }
      },
      CreateDBBackup: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "CreateDBBackup"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          DBBackupName: "String",
          Description: "String"
        }
      },
      SwitchDBInstanceHA: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "SwitchDBInstanceHA"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String"
        }
      },
      GenerateDBAdminURL: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "GenerateDBAdminURL"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String"
        }
      },
      AllocateDBInstanceEip: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "AllocateDBInstanceEip"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          Port: "String"
        }
      },
      ReleaseDBInstanceEip: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "ReleaseDBInstanceEip"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String"
        }
      },
      ModifyDBInstanceAvailabilityZone: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "ModifyDBInstanceAvailabilityZone"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          "AvailabilityZone.1": "String",
          "AvailabilityZone.2": "String"
        }
      },
      CreateSecurityGroup: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "CreateSecurityGroup"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SecurityGroupName: "String",
          SecurityGroupRule: "Filter",
          DBInstanceIdentifier: "String",
          SecurityGroupDescription: "String"
        }
      },
      DescribeSecurityGroup: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "DescribeSecurityGroup"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SecurityGroupId: "String",
          Type: "String"
        }
      },
      DeleteSecurityGroup: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "DeleteSecurityGroup"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SecurityGroupIdList: "String"
        }
      },
      ModifySecurityGroup: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "ModifySecurityGroup"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SecurityGroupId: "String",
          SecurityGroupName: "String",
          SecurityGroupDescription: "String"
        }
      },
      CloneSecurityGroup: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "CloneSecurityGroup"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SecurityGroupId: "String",
          SecurityGroupName: "String",
          SecurityGroupDescription: "String"
        }
      },
      ModifySecurityGroupRule: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "ModifySecurityGroupRule"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SecurityGroupRuleAction: "String",
          SecurityGroupId: "String",
          "SecurityGroupRule.SecurityGroupRuleId.N": "String",
          "SecurityGroupRule.SecurityGroupRuleName.N": "String",
          "SecurityGroupRule.SecurityGroupRuleCidr.N": "String"
        }
      },
      SecurityGroupRelation: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "SecurityGroupRelation"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SecurityGroupId: "String",
          RelationAction: "String",
          DBInstanceIdentifier: "Filter"
        }
      },
      ModifySecurityGroupRuleName: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "ModifySecurityGroupRuleName"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SecurityGroupRuleId: "String",
          SecurityGroupRuleName: "String"
        }
      },
      DescribeLastLog: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "DescribeLastLog"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          DBLogType: "String"
        }
      },
      StartAudit: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "StartAudit"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String"
        }
      },
      StopAudit: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "StopAudit"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String"
        }
      },
      ListAudit: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "ListAudit"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          AccessSqlStatement: "String",
          AccessSqlLanguage: "String",
          AccessDBName: "String",
          SourceIp: "String",
          AccessUsername: "String",
          AuditBeginTime: "String",
          AuditEndTime: "String",
          RunResult: "String",
          KeyWord: "String",
          SortBy: "String",
          SortWay: "String",
          Marker: "String",
          MaxRecords: "String"
        }
      },
      AuditStatistic: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "AuditStatistic"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          AuditStatisticBeginTime: "String",
          AuditStatisticEndTime: "String"
        }
      },
      GetCurrentDatabaseInfo: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "GetCurrentDatabaseInfo"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String"
        }
      },
      GetTableRestorableTime: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "GetTableRestorableTime"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String"
        }
      },
      GetHistoryDatabaseInfo: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "GetHistoryDatabaseInfo"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          DBBackupIdentifier: "String",
          RestorableTime: "String"
        }
      },
      OverrideDBInstanceByPointInTime: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "OverrideDBInstanceByPointInTime"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          DBBackupIdentifier: "String",
          RestorableTime: "String"
        }
      },
      RestoreToCurInstance: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "RestoreToCurInstance"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          DBBackupIdentifier: "String",
          RestorableTime: "String",
          SrcDatabases: "Filter",
          DstDatabases: "Filter"
        }
      },
      RestoreToSgInstance: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "RestoreToSgInstance"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          DBBackupIdentifier: "String",
          RestorableTime: "String",
          SrcDatabases: "Filter",
          DstDatabases: "Filter"
        }
      },
      DescribeAuditHotCount: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "DescribeAuditHotCount"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          TimeRange: "String",
          StartTime: "String",
          EndTime: "String"
        }
      },
      DescribeAuditHotDuration: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "DescribeAuditHotDuration"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          TimeRange: "String",
          StartTime: "String",
          EndTime: "String"
        }
      },
      SqlAuditReport: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "SqlAuditReport"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          TimeRange: "String",
          StartTime: "String",
          EndTime: "String",
          DbName: "String",
          SortBy: "String",
          SortWay: "Int",
          Page: "Int",
          Size: "Int"
        }
      },
      SqlAuditLineChart: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "SqlAuditLineChart"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          TimeRange: "String",
          StartTime: "String",
          EndTime: "String"
        }
      },
      SlowLogReport: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "SlowLogReport"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          StartTime: "String",
          EndTime: "String",
          SortBy: "String",
          SortWay: "String",
          HeadKey: "String",
          Marker: "Int",
          MaxRecords: "Int"
        }
      },
      SlowLogLineChart: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "SlowLogLineChart"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          StartTime: "String",
          EndTime: "String"
        }
      },
      SlowLogDetail: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "SlowLogDetail"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          StartTime: "String",
          EndTime: "String",
          SortBy: "String",
          SortWay: "String",
          HeadKey: "String",
          FingerPrint: "String",
          checksum: "String"
        }
      },
      StartAuditDetailExportTask: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "StartAuditDetailExportTask"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          ExportFileds: "String",
          AuditBeginTime: "String",
          AuditEndTime: "String"
        }
      },
      ListAuditDetailExportTask: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "ListAuditDetailExportTask"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          Marker: "String",
          MaxRecords: "String"
        }
      },
      CreateInstanceAccount: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "CreateInstanceAccount"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          InstanceAccountName: "String",
          InstanceAccountPassword: "String",
          InstanceAccountDescription: "String"
        }
      },
      DescribeInstanceAccounts: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "DescribeInstanceAccounts"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          Keyword: "String"
        }
      },
      ModifyInstanceAccountInfo: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "ModifyInstanceAccountInfo"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          InstanceAccountName: "String",
          InstanceAccountPassword: "String",
          InstanceAccountDescription: "String"
        }
      },
      ModifyInstanceAccountPrivileges: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "ModifyInstanceAccountPrivileges"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          InstanceAccountName: "String",
          InstanceAccountPrivileges: "Filter"
        }
      },
      DeleteInstanceAccount: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "DeleteInstanceAccount"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          InstanceAccountName: "String"
        }
      },
      DescribeCollations: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "DescribeCollations"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String"
        }
      },
      CreateInstanceDatabase: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "CreateInstanceDatabase"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          InstanceDatabaseName: "String",
          InstanceDatabaseCollation: "String",
          InstanceDatabaseDescription: "String"
        }
      },
      ModifyInstanceDatabasePrivileges: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "ModifyInstanceDatabasePrivileges"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          InstanceDatabaseName: "String",
          InstanceDatabasePrivileges: "Filter"
        }
      },
      DescribeInstanceDatabases: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "DescribeInstanceDatabases"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          InstanceDatabaseName: "String",
          Keyword: "String"
        }
      },
      ModifyInstanceDatabaseInfo: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "ModifyInstanceDatabaseInfo"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          InstanceDatabaseName: "String",
          InstanceDatabaseDescription: "String"
        }
      },
      StartSlowLogDetailExportTask: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "StartSlowLogDetailExportTask"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          AuditBeginTime: "String",
          AuditEndTime: "String",
          AccessSqlStatement: "String"
        }
      },
      ListSlowLogDetailExportTask: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "ListSlowLogDetailExportTask"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          Marker: "String",
          MaxRecords: "String"
        }
      },
      CreateInstanceAccountAction: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "CreateInstanceAccountAction"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          InstanceAccountName: "String",
          InstanceAccountPassword: "String",
          InstanceAccountDescription: "String",
          InstanceAccountPrivileges: "Array"
        }
      },
      ModifyInstanceAccountPrivilegesAction: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "ModifyInstanceAccountPrivilegesAction"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          InstanceAccountName: "String",
          InstanceAccountPrivileges: "Array"
        }
      },
      DeleteInstanceAccountAction: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "DeleteInstanceAccountAction"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          InstanceAccountName: "String"
        }
      },
      DeleteInstanceDatabaseAction: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "DeleteInstanceDatabaseAction"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          InstanceDatabaseName: "String"
        }
      },
      ModifyDBNetwork: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "ModifyDBNetwork"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          VpcId: "String",
          SubnetId: "String",
          Vip: "String",
          Port: "String"
        }
      },
      DescribeDBInstanceMonitorPeriod: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "DescribeDBInstanceMonitorPeriod"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String"
        }
      },
      ModifyDBInstanceMonitorPeriod: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "ModifyDBInstanceMonitorPeriod"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          Period: "String"
        }
      },
      DescribeEngineParametersModifyHistory: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "DescribeEngineParametersModifyHistory"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DBParameterGroupId: "String",
          Name: "String",
          MaxRecords: "Int",
          Marker: "Int"
        }
      },
      BatchApplyDBParameterGroup: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "BatchApplyDBParameterGroup"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          DBParameterGroupId: "String"
        }
      },
      UpgradeDBInstanceLatesVersion: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "UpgradeDBInstanceLatesVersion"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String"
        }
      },
      DescribeProxyInstance: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "DescribeProxyInstance"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String"
        }
      },
      SetUpProxyInstance: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "SetUpProxyInstance"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          ReadOnlyInstanceList: "Filter"
        }
      },
      TemporaryCloseSwitchover: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "TemporaryCloseSwitchover"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          AutoSwitch: "Boolean",
          ExpireTime: "String"
        }
      },
      DescribeBackupOverview: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "DescribeBackupOverview"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {}
      },
      DescribeStatisticBackupDetails: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "DescribeStatisticBackupDetails"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DataType: "String",
          BackupType: "String",
          Marker: "Int",
          MaxRecords: "Int"
        }
      },
      ModifyMaintenanceTime: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "ModifyMaintenanceTime"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          StartTime: "String",
          Duration: "Double"
        }
      },
      ModifyInstanceDatabasePrivilegesAction: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "ModifyInstanceDatabasePrivilegesAction"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          InstanceDatabaseName: "String",
          InstanceDatabasePrivileges: "Filter"
        }
      },
      UpdateDBInstanceOrder: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "UpdateDBInstanceOrder"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          UpdateUse: "String",
          Duration: "Int",
          BillType: "String"
        }
      },
      UpdateResourceProtection: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-07-01",
            Action: "UpdateResourceProtection"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DBInstanceIdentifier: "String",
          ProtectionSwitch: "String",
          ProtectionReason: "String"
        }
      }
    });
  }
};