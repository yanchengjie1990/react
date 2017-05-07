var express = require('express');
var sha1 = require('sha1');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var wxConfig = {
		wechat: {
			appID: 'wxb301ec2497baee6a',
			appSecret: 'ab490017f78d9acdfb009275a44e7f1e',
			token: '1688serviceyanchengjie'
		}
	};
	var token = wxConfig.wechat.token;
	var signature = this.query.signature;
	var nonce = this.query.nonce;
	var timestamp = this.query.timestamp;
	var ecostr = this.query.ecostr;
	var str = [token, signature, nonce, timestamp, ecostr];
	var sha = sha1(str);
	if (sha === signature) {
		this.body = ecostr + '';
	} else {
		this.body = 'wrong';
	}
  res.sendfile("./public/demo/index.html");
});

module.exports = router;
