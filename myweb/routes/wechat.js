var express = require('express');
var sha1 = require('sha1');
var router = express.Router();

/* GET home page. */
router.get('/wechat', function(req, res, next) {
	console.log(req.query);
	if (req.query) {
		var wxConfig = {
			wechat: {
				appID: 'wxb301ec2497baee6a',
				appSecret: 'ab490017f78d9acdfb009275a44e7f1e',
				token: '1688serviceyanchengjie'
			}
		};
		var token = wxConfig.wechat.token;
		var signature = req.query.signature;
		var nonce = req.query.nonce;
		var timestamp = req.query.timestamp;
		var echostr = req.query.echostr;
		var str = [token, signature, nonce, timestamp, echostr].sort().join('');
		var sha = sha1(str);
		if (sha === signature) {
			req.body = echostr + '';
		} else {
			req.body = 'wrong';
		}
	}
});

module.exports = router;
