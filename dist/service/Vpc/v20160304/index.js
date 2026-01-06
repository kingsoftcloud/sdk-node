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
      endpoint: "vpc.api.ksyun.com",
      config: {
        timeout: 60,
        //设置timeout
        headers: {
          Accept: "application/json"
        },
        credentials: {
          region: "cn-shanghai-3",
          service: "vpc"
        }
      }
    });
    _defineProperty(this, "_apiList", {
      CreateVpc: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "CreateVpc"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          VpcName: "String",
          CidrBlock: "String",
          ProvidedIpv6CidrBlock: "Boolean"
        }
      },
      DeleteVpc: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DeleteVpc"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          VpcId: "String"
        }
      },
      DescribeVpcs: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeVpcs"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          VpcId: "Filter",
          MaxResults: "Int",
          NextToken: "String"
        }
      },
      CreateSubnet: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "CreateSubnet"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          VpcId: "String",
          SubnetName: "String",
          CidrBlock: "String",
          ProvidedIpv6CidrBlock: "Boolean",
          SubnetType: "String",
          DhcpIpFrom: "String",
          DhcpIpTo: "String",
          Dns1: "String",
          Dns2: "String",
          GatewayIp: "String",
          SecondaryCidrId: "String",
          AvailabilityZone: "String",
          VisitInternet: "Boolean"
        }
      },
      DeleteSubnet: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DeleteSubnet"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SubnetId: "String"
        }
      },
      DescribeSubnets: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeSubnets"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SubnetId: "Filter",
          Filter: "Filter",
          MaxResults: "Int",
          NextToken: "String"
        }
      },
      AssociateNetworkAcl: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "AssociateNetworkAcl"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SubnetId: "String",
          NetworkAclId: "String"
        }
      },
      DisassociateNetworkAcl: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DisassociateNetworkAcl"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SubnetId: "String",
          NetworkAclId: "String"
        }
      },
      CreateRoute: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "CreateRoute"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          VpcId: "String",
          RouteType: "String",
          DestinationCidrBlock: "String",
          InstanceId: "String",
          VpcPeeringConnectionId: "String",
          DirectConnectGatewayId: "String",
          VpnTunnelId: "String",
          VpnGatewayId: "String",
          NetworkInterfaceId: "String",
          HaVipId: "String",
          HaVipMasterNetworkInterfaceId: "String",
          CenId: "String",
          Description: "String",
          RouteTableId: "String"
        }
      },
      DeleteRoute: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DeleteRoute"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          RouteId: "String"
        }
      },
      DescribeRoutes: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeRoutes"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          RouteId: "Filter",
          Filter: "Filter",
          MaxResults: "Int",
          NextToken: "String"
        }
      },
      CreateNetworkAcl: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "CreateNetworkAcl"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          VpcId: "String",
          NetworkAclName: "String",
          Description: "String"
        }
      },
      DeleteNetworkAcl: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DeleteNetworkAcl"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NetworkAclId: "String"
        }
      },
      CreateNetworkAclEntry: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "CreateNetworkAclEntry"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NetworkAclId: "String",
          Direction: "String",
          RuleNumber: "Int",
          Protocol: "String",
          IcmpType: "Int",
          IcmpCode: "Int",
          RuleAction: "String",
          PortRangeFrom: "Int",
          PortRangeTo: "Int",
          CidrBlock: "String",
          Description: "String"
        }
      },
      DeleteNetworkAclEntry: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DeleteNetworkAclEntry"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NetworkAclId: "String",
          NetworkAclEntryId: "String"
        }
      },
      DescribeNetworkAcls: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeNetworkAcls"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NetworkAclId: "Filter",
          Filter: "Filter",
          MaxResults: "Int",
          NextToken: "String"
        }
      },
      CreateSecurityGroup: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "CreateSecurityGroup"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          VpcId: "String",
          SecurityGroupName: "String",
          Description: "String"
        }
      },
      DeleteSecurityGroup: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DeleteSecurityGroup"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SecurityGroupId: "String"
        }
      },
      AuthorizeSecurityGroupEntry: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "AuthorizeSecurityGroupEntry"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Description: "String",
          SecurityGroupId: "String",
          CidrBlock: "String",
          Direction: "String",
          Protocol: "String",
          IcmpType: "Int",
          IcmpCode: "Int",
          PortRangeFrom: "Int",
          PortRangeTo: "Int",
          RuleTag: "String",
          Priority: "Int",
          Policy: "String"
        }
      },
      RevokeSecurityGroupEntry: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "RevokeSecurityGroupEntry"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SecurityGroupId: "String",
          SecurityGroupEntryId: "String"
        }
      },
      DescribeSecurityGroups: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeSecurityGroups"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SecurityGroupId: "Filter",
          Filter: "Filter",
          MaxResults: "Int",
          NextToken: "String"
        }
      },
      CreateNat: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "CreateNat"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          VpcId: "String",
          NatLineId: "String",
          BandWidth: "Int",
          NatName: "String",
          NatType: "String",
          NatIpNumber: "Int",
          NatMode: "String",
          ProjectId: "String",
          ChargeType: "String",
          PurchaseTime: "Int"
        }
      },
      DeleteNat: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DeleteNat"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NatId: "String"
        }
      },
      DescribeNats: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeNats"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ProjectId: "Filter",
          NatId: "Filter",
          Filter: "Filter",
          IsContainTag: "Boolean",
          TagKey: "Filter",
          TagKV: "Filter",
          MaxResults: "Int",
          NextToken: "String"
        }
      },
      AssociateNat: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "AssociateNat"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NatId: "String",
          SubnetId: "String",
          NatIpId: "Filter"
        }
      },
      DisassociateNat: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DisassociateNat"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NatId: "String",
          SubnetId: "String"
        }
      },
      DescribeInternetGateways: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeInternetGateways"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          InternetGatewayId: "Filter",
          Filter: "Filter",
          MaxResults: "Int",
          NextToken: "String"
        }
      },
      CreateVpcPeeringConnection: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "CreateVpcPeeringConnection"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          VpcId: "String",
          PeeringName: "String",
          PeerVpcId: "String",
          PeerRegion: "String",
          PeerAccountId: "String",
          BandWidth: "Int",
          PurchaseTime: "Int",
          ProjectId: "String",
          ChargeType: "String"
        }
      },
      DeleteVpcPeeringConnection: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DeleteVpcPeeringConnection"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          VpcPeeringConnectionId: "String"
        }
      },
      DescribeVpcPeeringConnections: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeVpcPeeringConnections"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ProjectId: "Filter",
          VpcPeeringConnectionId: "Filter",
          Filter: "Filter",
          MaxResults: "Int",
          NextToken: "String"
        }
      },
      ModifyNetworkAcl: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "ModifyNetworkAcl"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NetworkAclId: "String",
          NetworkAclName: "String",
          Description: "String"
        }
      },
      ModifySecurityGroup: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "ModifySecurityGroup"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SecurityGroupId: "String",
          SecurityGroupName: "String",
          Description: "String"
        }
      },
      ModifySubnet: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "ModifySubnet"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SubnetId: "String",
          SubnetName: "String",
          Dns1: "String",
          Dns2: "String"
        }
      },
      ModifyNat: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "ModifyNat"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NatId: "String",
          NatName: "String",
          BandWidth: "Int"
        }
      },
      DescribeNetworkInterfaces: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeNetworkInterfaces"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NetworkInterfaceId: "Filter",
          Filter: "Filter",
          MaxResults: "Int",
          NextToken: "String"
        }
      },
      DescribeSubnetAvailableAddresses: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeSubnetAvailableAddresses"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Filter: "Filter",
          MaxResults: "Int",
          NextToken: "String"
        }
      },
      ModifyVpc: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "ModifyVpc"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          VpcName: "String",
          VpcId: "String"
        }
      },
      AcceptVpcPeeringConnection: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "AcceptVpcPeeringConnection"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          VpcPeeringConnectionId: "String"
        }
      },
      RejectVpcPeeringConnection: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "RejectVpcPeeringConnection"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          VpcPeeringConnectionId: "String"
        }
      },
      ModifyVpcPeeringConnection: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "ModifyVpcPeeringConnection"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          VpcPeeringConnectionId: "String",
          PeeringName: "String",
          BandWidth: "Int"
        }
      },
      DescribeAvailabilityZones: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeAvailabilityZones"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {}
      },
      DescribeDirectConnects: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeDirectConnects"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DirectConnectId: "Filter",
          MaxResults: "Int",
          NextToken: "String"
        }
      },
      CreateDirectConnectInterface: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "CreateDirectConnectInterface"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DirectConnectId: "String",
          VlanId: "Int",
          RouteType: "String",
          DirectConnectInterfaceName: "String",
          DirectConnectInterfaceAccountId: "String",
          CustomerPeerIp: "String",
          LocalPeerIp: "String",
          HaDirectConnectId: "String",
          HaCustomerPeerIp: "String",
          HaLocalPeerIp: "String",
          BgpPeer: "String",
          ReliabilityMethod: "String",
          BfdConfigId: "String",
          BgpClientToken: "String",
          EnableIpv6: "Boolean",
          CustomerIpv6PeerIp: "String",
          LocalIpv6PeerIp: "String"
        }
      },
      DeleteDirectConnectInterface: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DeleteDirectConnectInterface"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DirectConnectInterfaceId: "String"
        }
      },
      DescribeDirectConnectInterfaces: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeDirectConnectInterfaces"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DirectConnectInterfaceId: "Filter",
          MaxResults: "Int",
          NextToken: "String"
        }
      },
      CreateDirectConnectGateway: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "CreateDirectConnectGateway"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          VpcId: "String",
          DirectConnectGatewayName: "String"
        }
      },
      DeleteDirectConnectGateway: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DeleteDirectConnectGateway"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DirectConnectGatewayId: "String"
        }
      },
      DescribeDirectConnectGateways: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeDirectConnectGateways"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DirectConnectGatewayId: "Filter",
          Filter: "Filter",
          MaxResults: "Int",
          NextToken: "String"
        }
      },
      AttachDirectConnectGateway: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "AttachDirectConnectGateway"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DirectConnectGatewayId: "String",
          DirectConnectInterfaceId: "String"
        }
      },
      DetachDirectConnectGateway: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DetachDirectConnectGateway"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DirectConnectGatewayId: "String",
          DirectConnectInterfaceId: "String"
        }
      },
      ModifyDirectConnectInterface: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "ModifyDirectConnectInterface"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DirectConnectInterfaceId: "String",
          DirectConnectInterfaceName: "String"
        }
      },
      ModifyDirectConnectGateway: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "ModifyDirectConnectGateway"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DirectConnectGatewayId: "String",
          DirectConnectGatewayName: "String"
        }
      },
      CreateVpnGateway: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "CreateVpnGateway"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          VpcId: "String",
          BandWidth: "Int",
          VpnGatewayName: "String",
          ProjectId: "String",
          ChargeType: "String",
          PurchaseTime: "Int",
          VpnGatewayVersion: "String"
        }
      },
      ModifyVpnGateway: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "ModifyVpnGateway"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          VpnGatewayId: "String",
          BandWidth: "Int",
          VpnGatewayName: "String"
        }
      },
      DeleteVpnGateway: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DeleteVpnGateway"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          VpnGatewayId: "String"
        }
      },
      DescribeVpnGateways: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeVpnGateways"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ProjectId: "Filter",
          VpnGatewayId: "Filter",
          Filter: "Filter",
          MaxResults: "Int",
          NextToken: "String"
        }
      },
      CreateVpnTunnel: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "CreateVpnTunnel"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          CustomerGatewayId: "String",
          VpnGatewayId: "String",
          VpnTunnelName: "String",
          IpsecAuthenAlgorithm: "String",
          IpsecEncryAlgorithm: "String",
          IkeAuthenAlgorithm: "String",
          IkeEncryAlgorithm: "String",
          Type: "String",
          OpenHealthCheck: "Boolean",
          PreSharedKey: "String",
          IpsecLifetimeSecond: "Int",
          IpsecLifetimeTraffic: "Int",
          IkeDHGroup: "String",
          EnableNatTraversal: "Boolean",
          VpnGreIp: "String",
          HaVpnGreIp: "String",
          CustomerGreIp: "String",
          HaCustomerGreIp: "String",
          HaMode: "String",
          LocalPeerIp: "String",
          CustomerPeerIp: "String",
          IkeVersion: "String"
        }
      },
      ModifyVpnTunnel: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "ModifyVpnTunnel"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          VpnTunnelId: "String",
          VpnTunnelName: "String"
        }
      },
      DeleteVpnTunnel: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DeleteVpnTunnel"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          VpnTunnelId: "String"
        }
      },
      DescribeVpnTunnels: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeVpnTunnels"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          VpnTunnelId: "Filter",
          Filter: "Filter",
          MaxResults: "Int",
          NextToken: "String"
        }
      },
      CreateCustomerGateway: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "CreateCustomerGateway"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          CustomerGatewayName: "String",
          CustomerGatewayAddress: "String",
          HaCustomerGatewayAddress: "String"
        }
      },
      ModifyCustomerGateway: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "ModifyCustomerGateway"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          CustomerGatewayId: "String",
          CustomerGatewayName: "String"
        }
      },
      DeleteCustomerGateway: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DeleteCustomerGateway"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          CustomerGatewayId: "String"
        }
      },
      ModifyDirectConnect: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "ModifyDirectConnect"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DirectConnectId: "String",
          DirectConnectName: "String"
        }
      },
      DescribeCustomerGateways: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeCustomerGateways"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          CustomerGatewayId: "Filter",
          MaxResults: "Int",
          NextToken: "String"
        }
      },
      DescribeSubnetAllocatedIpAddresses: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeSubnetAllocatedIpAddresses"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Filter: "Filter",
          MaxResults: "Int",
          NextToken: "String"
        }
      },
      AddNatIp: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "AddNatIp"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NatId: "String",
          AddNumber: "Int"
        }
      },
      DeleteNatIp: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DeleteNatIp"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NatId: "String",
          NatIpId: "String"
        }
      },
      AssociateVpcCidrBlock: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "AssociateVpcCidrBlock"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          VpcId: "String"
        }
      },
      DescribeIpv6PublicIpAddresses: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeIpv6PublicIpAddresses"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Ipv6PublicIpAddressId: "Filter",
          Filter: "Filter",
          MaxResults: "Int",
          NextToken: "String"
        }
      },
      DescribeIpv6NetworkInterfaces: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeIpv6NetworkInterfaces"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NetworkInterfaceId: "Filter",
          Filter: "Filter",
          MaxResults: "Int",
          NextToken: "String"
        }
      },
      CreateIpv6PublicIp: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "CreateIpv6PublicIp"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NetworkInterfaceId: "String",
          BandWidth: "Int",
          Ipv6PublicIpAddress: "String",
          ChargeType: "String",
          PurchaseTime: "Int"
        }
      },
      ReleaseIpv6PublicIp: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "ReleaseIpv6PublicIp"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Ipv6PublicIpAddressId: "String"
        }
      },
      AlterIpv6PublicIpState: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "AlterIpv6PublicIpState"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Ipv6PublicIpAddressId: "String",
          State: "String"
        }
      },
      ModifyIpv6PublicIp: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "ModifyIpv6PublicIp"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Ipv6PublicIpAddressId: "String",
          BandWidth: "Int"
        }
      },
      ModifyPrivateIpAddressAttribute: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "ModifyPrivateIpAddressAttribute"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SubnetId: "String",
          PrivateIpAddress: "String",
          Status: "String",
          AllocateStatus: "String"
        }
      },
      DescribeDirectConnectRoutes: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeDirectConnectRoutes"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DirectConnectRouteId: "Filter",
          MaxResults: "Int",
          Filter: "Filter",
          NextToken: "String"
        }
      },
      PublishDirectConnectRouteToBgp: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "PublishDirectConnectRouteToBgp"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DirectConnectRouteId: "String"
        }
      },
      CancelDirectConnectRouteToBgp: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "CancelDirectConnectRouteToBgp"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DirectConnectRouteId: "String"
        }
      },
      DetachDirectConnectGatewayWithVpc: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DetachDirectConnectGatewayWithVpc"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DirectConnectGatewayId: "String",
          VpcId: "String"
        }
      },
      AttachDirectConnectGatewayWithVpc: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "AttachDirectConnectGatewayWithVpc"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DirectConnectGatewayId: "String",
          VpcId: "String"
        }
      },
      AllocateSubnetIpv6CidrBlock: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "AllocateSubnetIpv6CidrBlock"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SubnetId: "String"
        }
      },
      CreateRouteTable: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "CreateRouteTable"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          VpcId: "String",
          RouteTableName: "String",
          Description: "String"
        }
      },
      DeleteRouteTable: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DeleteRouteTable"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          RouteTableId: "String"
        }
      },
      ModifyRouteTable: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "ModifyRouteTable"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          RouteTableId: "String",
          RouteTableName: "String",
          Description: "String"
        }
      },
      DescribeRouteTables: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeRouteTables"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          RouteTableId: "Filter",
          Filter: "Filter",
          MaxResults: "Int",
          NextToken: "String"
        }
      },
      AssociateRouteTable: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "AssociateRouteTable"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SubnetId: "String",
          RouteTableId: "String"
        }
      },
      DeleteNetworkInterface: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DeleteNetworkInterface"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NetworkInterfaceId: "String"
        }
      },
      CreateNetworkInterface: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "CreateNetworkInterface"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SubnetId: "String",
          NetworkInterfaceName: "String",
          PrivateIpAddress: "String",
          SecurityGroupId: "Filter"
        }
      },
      ModifyNetworkInterface: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "ModifyNetworkInterface"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NetworkInterfaceName: "String",
          NetworkInterfaceId: "String"
        }
      },
      CreateNatRateLimit: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "CreateNatRateLimit"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NetworkInterfaceId: "String",
          BandwidthLimit: "Int",
          inBandwidthLimit: "Int"
        }
      },
      DescribeNatRateLimit: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeNatRateLimit"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NatId: "String",
          Filter: "Filter"
        }
      },
      ModifyNatRateLimit: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "ModifyNatRateLimit"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NatRateLimitId: "String",
          BandwidthLimit: "Int",
          InBandwidthLimit: "Int"
        }
      },
      DeleteNatRateLimit: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DeleteNatRateLimit"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NatRateLimitId: "String"
        }
      },
      CreateDnat: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "CreateDnat"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NatId: "String",
          NatIp: "String",
          DnatName: "String",
          PublicPort: "String",
          PrivateIpAddress: "String",
          IpProtocol: "String",
          PrivatePort: "String",
          Description: "String"
        }
      },
      DeleteDnat: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DeleteDnat"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DnatId: "String"
        }
      },
      DescribeDnats: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeDnats"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DnatId: "Filter",
          Filter: "Filter",
          MaxResults: "Int",
          NextToken: "String"
        }
      },
      ModifyDnat: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "ModifyDnat"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NatId: "String",
          DnatId: "String",
          NatIp: "String",
          DnatName: "String",
          PublicPort: "String",
          PrivateIpAddress: "String",
          IpProtocol: "String",
          PrivatePort: "String",
          Description: "String"
        }
      },
      AssociateInstance: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "AssociateInstance"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NetworkInterfaceId: "String",
          NatId: "String",
          NatIpId: "Filter"
        }
      },
      DisassociateInstance: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DisassociateInstance"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NetworkInterfaceId: "String",
          NatId: "String"
        }
      },
      CreateHaVip: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "CreateHaVip"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SubnetId: "String",
          IpAddress: "String"
        }
      },
      DeleteHaVip: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DeleteHaVip"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          HaVipId: "String"
        }
      },
      AssociateHaVip: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "AssociateHaVip"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NetworkInterfaceId: "String",
          HaVipId: "String"
        }
      },
      UnAssociateHaVip: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "UnAssociateHaVip"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NetworkInterfaceId: "String",
          HaVipId: "String"
        }
      },
      DescribeHaVip: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeHaVip"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          HaVipId: "Filter",
          Filter: "Filter",
          MaxResults: "Int",
          NextToken: "String"
        }
      },
      CreateDirectConnectGatewayRoute: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "CreateDirectConnectGatewayRoute"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DirectConnectGatewayId: "String",
          DestinationCidrBlock: "String",
          NextHopType: "String",
          Priority: "Int",
          NextHopInstance: "String",
          EnableIpv6: "Boolean"
        }
      },
      DeleteDirectConnectGatewayRoute: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DeleteDirectConnectGatewayRoute"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DirectConnectGatewayRouteId: "String"
        }
      },
      DescribeDirectConnectGatewayRoute: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeDirectConnectGatewayRoute"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DirectConnectGatewayId: "String",
          MaxResults: "Int",
          Filter: "Filter",
          NextToken: "String"
        }
      },
      PublishDirectConnectRoute: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "PublishDirectConnectRoute"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DirectConnectGatewayRouteId: "String"
        }
      },
      UnpublishDirectConnectRoute: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "UnpublishDirectConnectRoute"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          DirectConnectGatewayRouteId: "String"
        }
      },
      AddSecondaryCidrBlock: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "AddSecondaryCidrBlock"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          VpcId: "String",
          CidrBlock: "String"
        }
      },
      DeleteSecondaryCidrBlock: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DeleteSecondaryCidrBlock"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          VpcId: "String",
          SecondaryCidrId: "String"
        }
      },
      AssignPrivateIpAddress: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "AssignPrivateIpAddress"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NetworkInterfaceId: "String",
          PrivateIpAddress: "Filter",
          SecondaryPrivateIpAddressCount: "Int"
        }
      },
      UnassignPrivateIpAddress: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "UnassignPrivateIpAddress"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NetworkInterfaceId: "String",
          PrivateIpAddress: "Filter"
        }
      },
      BatchCreateNatRateLimit: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "BatchCreateNatRateLimit"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          BandwidthLimit: "Int",
          InBandwidthLimit: "Int",
          NetworkInterfaceId: "Filter"
        }
      },
      BatchModifyNatRateLimit: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "BatchModifyNatRateLimit"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          BandwidthLimit: "String",
          InBandwidthLimit: "Int",
          NatRateLimitId: "Filter"
        }
      },
      BatchDeleteNatRateLimit: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "BatchDeleteNatRateLimit"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NatRateLimitId: "Filter"
        }
      },
      DescribeVpnGatewayRoutes: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeVpnGatewayRoutes"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          VpnGatewayId: "String",
          Filter: "Filter",
          MaxResults: "Int",
          NextToken: "String"
        }
      },
      CreateVpnGatewayRoute: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "CreateVpnGatewayRoute"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          VpnGatewayId: "String",
          DestinationCidrBlock: "String",
          NextHopInstanceId: "String",
          NextHopType: "String",
          Description: "String"
        }
      },
      DeleteVpnGatewayRoute: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DeleteVpnGatewayRoute"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          VpnGatewayRouteId: "String"
        }
      },
      DescribeVpnTunnelIpsecStatus: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeVpnTunnelIpsecStatus"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          IsMaster: "Int",
          VpnTunnelId: "Filter"
        }
      },
      QueryNatTopVifMonitor: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "QueryNatTopVifMonitor"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NatId: "String",
          StartTime: "String",
          EndTime: "String",
          SortType: "String",
          InstanceType: "String",
          ip: "String"
        }
      },
      ModifyNatIpStatus: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "ModifyNatIpStatus"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NatIpId: "String",
          Enabled: "Boolean"
        }
      },
      QueryPeerTopVifMonitor: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "QueryPeerTopVifMonitor"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          vpcId: "String",
          StartTime: "String",
          EndTime: "String",
          SortType: "String",
          ip: "String"
        }
      },
      ModifyVpnGatewayRoute: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "ModifyVpnGatewayRoute"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          VpnGatewayRouteId: "String",
          Description: "String"
        }
      },
      DescribeDirectConnectInterfacesBgpStatus: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeDirectConnectInterfacesBgpStatus"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          "DirectConnectInterfaceId.N": "String"
        }
      },
      DeactiveFlowLog: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DeactiveFlowLog"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          FlowLogId: "String"
        }
      },
      ActiveFlowLog: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "ActiveFlowLog"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          FlowLogId: "String"
        }
      },
      DeleteFlowLog: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DeleteFlowLog"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          FlowLogId: "String"
        }
      },
      ModifyFlowLog: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "ModifyFlowLog"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          FlowLogId: "String",
          FlowLogName: "String",
          WindowTime: "Int",
          Description: "String"
        }
      },
      DescribeFlowLogs: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "DescribeFlowLogs"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          FlowLogId: "Filter",
          Filter: "Filter",
          MaxResults: "Int",
          NextToken: "String"
        }
      },
      CreateFlowLog: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "CreateFlowLog"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          FlowLogName: "String",
          ResourceType: "String",
          ResourceId: "String",
          TrafficType: "String",
          ProjectName: "String",
          LogPoolName: "String",
          WindowTime: "Int",
          Description: "String"
        }
      }
    });
  }
};