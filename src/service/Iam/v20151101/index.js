const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'https://',
        'endpoint': 'iam.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'iam',
            },
        },
    }
    _apiList = {
        'CreateUser': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'CreateUser',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'UserName': 'String',
                'RealName': 'String',
                'Phone': 'String',
                'Email': 'String',
                'Remark': 'String',
                'Password': 'String',
                'PasswordResetRequired': 'Int',
                'OpenLoginProtection': 'Int',
                'OpenSecurityProtection': 'Int',
                'ViewAllProject': 'Int',
            }
        },
        'ListUsers': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ListUsers',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'Marker': 'String',
                'MaxItems': 'Int',
                'AccessKey': 'String',
            }
        },
        'UpdateUser': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'UpdateUser',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'UserName': 'String',
                'NewUserName': 'String',
                'NewRealName': 'String',
                'NewEmail': 'String',
                'NewPhone': 'String',
                'IsInternational': 'Int',
                'NewRemark': 'String',
            }
        },
        'GetUser': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'GetUser',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'UserName': 'String',
            }
        },
        'DeleteUser': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DeleteUser',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'UserName': 'String',
            }
        },
        'ListAttachedUserPolicies': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ListAttachedUserPolicies',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'UserName': 'String',
                'Marker': 'String',
                'MaxItems': 'String',
            }
        },
        'ListPolicyVersions': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ListPolicyVersions',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'PolicyKrn': 'String',
            }
        },
        'SetDefaultPolicyVersion': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'SetDefaultPolicyVersion',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'PolicyKrn': 'String',
                'VersionId': 'String',
            }
        },
        'AttachUserPolicy': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'AttachUserPolicy',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'PolicyKrn': 'String',
                'UserName': 'String',
            }
        },
        'DeletePolicyVersion': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DeletePolicyVersion',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'PolicyKrn': 'String',
                'VersionId': 'String',
            }
        },
        'GetPolicyVersion': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'GetPolicyVersion',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'PolicyKrn': 'String',
                'VersionId': 'String',
            }
        },
        'CreatePolicyVersion': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'CreatePolicyVersion',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'PolicyKrn': 'String',
                'PolicyDocument': 'String',
                'SetAsDefault': 'String',
                'PolicyStruct': 'String',
            }
        },
        'ListPolicies': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ListPolicies',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'Marker': 'String',
                'MaxItems': 'String',
                'OnlyAttached': 'Boolean',
                'Scope': 'String',
            }
        },
        'GetPolicy': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'GetPolicy',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'PolicyKrn': 'String',
            }
        },
        'DeletePolicy': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DeletePolicy',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'PolicyKrn': 'String',
            }
        },
        'CreatePolicy': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'CreatePolicy',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'PolicyName': 'String',
                'Description': 'String',
                'PolicyDocument': 'String',
                'PolicyStruct': 'String',
                'CreateMode': 'String',
            }
        },
        'ChangePassword': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ChangePassword',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'OldPassword': 'String',
                'NewPassword': 'String',
            }
        },
        'UpdateLoginProfile': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'UpdateLoginProfile',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'UserName': 'String',
                'Password': 'String',
                'PasswordResetRequired': 'Boolean',
                'OpenLoginProtection': 'Boolean',
                'OpenSecurityProtection': 'Boolean',
                'ViewAllProject': 'Boolean',
            }
        },
        'GetLoginProfile': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'GetLoginProfile',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'UserName': 'String',
            }
        },
        'CreateAccessKey': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'CreateAccessKey',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'UserName': 'String',
            }
        },
        'ListAccessKeys': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ListAccessKeys',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'UserName': 'String',
            }
        },
        'UpdateAccessKey': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'UpdateAccessKey',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'AccessKeyId': 'String',
                'UserName': 'String',
                'Status': 'String',
            }
        },
        'DeleteAccessKey': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DeleteAccessKey',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'UserName': 'String',
                'AccessKeyId': 'String',
            }
        },
        'CreateRole': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'CreateRole',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'RoleName': 'String',
                'TrustAccounts': 'String',
                'Description': 'String',
            }
        },
        'DeleteRole': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DeleteRole',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'RoleName': 'String',
            }
        },
        'GetRole': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'GetRole',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'RoleName': 'String',
            }
        },
        'ListRoles': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ListRoles',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'Marker': 'String',
                'MaxItems': 'Int',
            }
        },
        'AttachRolePolicy': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'AttachRolePolicy',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'RoleName': 'String',
                'PolicyKrn': 'String',
            }
        },
        'DetachRolePolicy': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DetachRolePolicy',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'RoleName': 'String',
                'PolicyKrn': 'String',
            }
        },
        'ListAttachedRolePolicies': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ListAttachedRolePolicies',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'RoleName': 'String',
                'Marker': 'String',
                'MaxItems': 'Int',
            }
        },
        'UpdateRoleTrustAccounts': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'UpdateRoleTrustAccounts',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'RoleName': 'String',
                'NewTrustAccounts': 'String',
            }
        },
        'ListEntityForPolicy': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ListEntityForPolicy',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'PolicyKrn': 'String',
                'Marker': 'String',
                'MaxItems': 'Int',
            }
        },
        'CreateProject': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'CreateProject',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ProjectName': 'String',
                'ProjectDesc': 'String',
            }
        },
        'ListEntitiesForPolicy': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ListEntitiesForPolicy',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'PolicyKrn': 'String',
                'MaxItems': 'Int',
                'Marker': 'String',
            }
        },
        'ListProjectMember': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ListProjectMember',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ProjectId': 'Int',
            }
        },
        'DeleteProjectMember': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DeleteProjectMember',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ProjectId': 'Int',
                'MemberIds': 'String',
            }
        },
        'AddProjectMember': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'AddProjectMember',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ProjectId': 'Int',
                'IdentityId': 'String',
                'IdentityType': 'Int',
            }
        },
        'UpdateRole': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'UpdateRole',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'RoleName': 'String',
                'NewDescription': 'String',
            }
        },
        'UpdatePolicy': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'UpdatePolicy',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'PolicyKrn': 'String',
                'NewDescription': 'String',
            }
        },
        'CreateGroup': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'CreateGroup',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'GroupName': 'String',
                'Description': 'String',
            }
        },
        'DeleteGroup': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DeleteGroup',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'GroupName': 'String',
            }
        },
        'DetachGroupPolicy': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'DetachGroupPolicy',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'GroupName': 'String',
                'PolicyKrn': 'String',
            }
        },
        'AttachGroupPolicy': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'AttachGroupPolicy',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'GroupName': 'String',
                'PolicyKrn': 'String',
            }
        },
        'ListGroupPolicies': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ListGroupPolicies',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'GroupName': 'String',
                'MaxItems': 'String',
                'Marker': 'String',
            }
        },
        'AddUserToGroup': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'AddUserToGroup',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'GroupName': 'String',
                'UserName': 'String',
            }
        },
        'GetGroup': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'GetGroup',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'GroupName': 'String',
                'MaxItems': 'String',
                'Marker': 'String',
            }
        },
        'ListGroupsForUser': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ListGroupsForUser',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'UserName': 'String',
                'MaxItems': 'String',
                'Marker': 'String',
            }
        },
        'ListGroups': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'ListGroups',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'MaxItems': 'String',
                'Marker': 'String',
            }
        },
        'RemoveUserFromGroup': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'RemoveUserFromGroup',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'GroupName': 'String',
                'UserName': 'String',
            }
        },
    }
}