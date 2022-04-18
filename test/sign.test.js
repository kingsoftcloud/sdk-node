const sign = require('../src/lib/sign.js')
const expect = require('chai').expect


describe('sign', function () {
    let params = {
        'Undefined': undefined,
        'Null': null,
        'Boolean': true,
        'Accesskey': 'AKKKKKK', //公共参数
        'Service': 'iam', //公共参数
        'Action': 'CreateUser', //公共参数
        'Version': '2015-11-01', //公共参数
        'Timestamp': '2021-08-12T02:47:36Z', //公共参数
        'SignatureVersion': 1, //公共参数
        'SignatureMethod': 'HMAC-SHA256', //公共参数
        'UserName': 'Ttest', //业务参数
        'RealName': '周四测试', //业务参数
        'Email': 'zsce@aa.com', //业务参数
        'Remark': '~ce shi*%#|+', //业务参数
        'Array': [1, 2, 3],
        'SimpleFilter': {
            1: '1',
            2: '2',
            3: null,
            4: undefined
        },
        'DeepFilter': {
            1: {
                a: 1,
                b: 2
            },
            2: {
                a: 2,
                b: 3
            },
            3: null,
            4: undefined,
            5: {
                a: null,
                b: undefined
            }
        }
    }
    let expectParams = {
        Boolean: 'true',
        Accesskey: 'AKKKKKK',
        Service: 'iam',
        Action: 'CreateUser',
        Version: '2015-11-01',
        Timestamp: '2021-08-12T02:47:36Z',
        SignatureVersion: 1,
        SignatureMethod: 'HMAC-SHA256',
        UserName: 'Ttest',
        RealName: '周四测试',
        Email: 'zsce@aa.com',
        Remark: '~ce shi*%#|+',
        'Array[0]': 1,
        'Array[1]': 2,
        'Array[2]': 3,
        'SimpleFilter.1': '1',
        'SimpleFilter.2': '2',
        'DeepFilter.1.a': 1,
        'DeepFilter.1.b': 2,
        'DeepFilter.2.a': 2,
        'DeepFilter.2.b': 3,
        Signature: 'f99dc36bc6cd84dbb3148a402df6fc1ad9891a26dca42315b831551f5ae92620'
    }
    let sk = 'SKKKKK=='

    describe('.getSignedParams', function () {
        it('should return the same signedParams', function () {
            expect(sign.getSignedParams(params, sk)).to.deep.equal(expectParams)
        });
    });
    describe('.getFlatParams', function () {
        it('should flat params', function () {
            let flatRes = {
                'Undefined': undefined,
                'Null': null,
                Boolean: true,
                Accesskey: 'AKKKKKK',
                Service: 'iam',
                Action: 'CreateUser',
                Version: '2015-11-01',
                Timestamp: '2021-08-12T02:47:36Z',
                SignatureVersion: 1,
                SignatureMethod: 'HMAC-SHA256',
                UserName: 'Ttest',
                RealName: '周四测试',
                Email: 'zsce@aa.com',
                Remark: '~ce shi*%#|+',
                'Array[0]': 1,
                'Array[1]': 2,
                'Array[2]': 3,
                'SimpleFilter.1': '1',
                'SimpleFilter.2': '2',
                'SimpleFilter.3': null,
                'SimpleFilter.4': undefined,
                'DeepFilter.1.a': 1,
                'DeepFilter.1.b': 2,
                'DeepFilter.2.a': 2,
                'DeepFilter.2.b': 3,
                'DeepFilter.3': null,
                'DeepFilter.4': undefined,
                'DeepFilter.5.a': null,
                'DeepFilter.5.b': undefined
            }
            expect(sign.getFlatParams(params)).to.deep.equal(flatRes)
        })
    })
    describe('.getFormatParams', function () {
        it('null should remove', function () {
            expect(sign.getFormatParams({a: null})).to.deep.equal({})
        })
        it('undefined should remove', function () {
            expect(sign.getFormatParams({a: undefined})).to.deep.equal({})
        })
        it('boolean should convert to string', function () {
            expect(sign.getFormatParams({a: true})).to.deep.equal({a: 'true'})
            expect(sign.getFormatParams({a: false})).to.deep.equal({a: 'false'})
        })
        it('Boolean(false) should convert to string', function () {
            expect(sign.getFormatParams({a: Boolean(false)})).to.deep.equal({a: 'false'})
        })
    })
    describe('.isArrayOrObjectNotNull', function () {
        it('array should return true', function () {
            expect(sign.isArrayOrObjectNotNull([])).to.be.true
        })
        it('object should return true', function () {
            expect(sign.isArrayOrObjectNotNull({})).to.be.true
        })
        it('null should return false', function () {
            expect(sign.isArrayOrObjectNotNull(null)).to.be.false
        })
        it('Boolean(true) should return false', function () {
            expect(sign.isArrayOrObjectNotNull(Boolean(true))).to.be.false
        })
    })
});