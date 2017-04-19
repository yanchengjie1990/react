// var config = {
//	hostname: '172.18.117.132',
//    port: 8080
// };
//	var http = require('http');
//	var rf = require('fs');
//	var server = http.createServer(function(req, res) {
	// send HTTP HEAD
	//HTTP Status value: 200- ok
	//contentType: text/html
//	res.writeHead(200, {'Content-Type': 'text/html'});
	// send response data "Hello World"
//	rf.readFile('demo/index.htm', 'utf-8', function(err, data){  
//	    if(err){  
//	        console.log('error');  
//	    }else{  
//	    	res.end(data);
//	    }
//	});
//});
//	server.listen(config.port, config.hostname, () => {
//  console.log(`Server running at http://${config.hostname}:${config.port}/`);
//});

//var express = require('express');
//var app = express();
//var path = require('path');
//app.use(express.static(path.join(__dirname, 'demo')));
//
//var server = app.listen(8080, function(){
//// var host = '172.18.117.132';
//var host = '119.23.44.145';
//var port = server.address().port;
//console.log('listening at http://%s%s', host, port);
//})

var express = require("express");
var proxy = require("express-http-proxy");
var app = express();
var path = require('path');
var port = 8088;
var url0 = "http://172.18.117.132:8080";
var url1 = "http://www.1688service.com";
var url2 = "http://119.23.44.145:8080";
var apiProxy = proxy(url1, {
	forwardPath:function(req,res){
		return req._parsedUrl.path;
	}
})
app.use("/", apiProxy);
app.use(express.static(path.join(__dirname, 'demo')));

app.listen(port);
console.log('Now serving the app at http://localhost:'+port);
