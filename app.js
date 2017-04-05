var config = {
	hostname: '127.0.0.1',
    port: 8080
};
var http = require('http');
var rf = require('fs');
var server = http.createServer(function(req, res) {
	// send HTTP HEAD
	//HTTP Status value: 200- ok
	//contentType: text/html
	res.writeHead(200, {'Content-Type': 'text/html'});
	// send response data "Hello World"
	rf.readFile('index.html', 'utf-8', function(err, data){  
	    if(err){  
	        console.log('error');  
	    }else{  
	    	res.end(data);
	    }
	});
});
server.listen(config.port, config.hostname, () => {
  console.log(`Server running at http://${config.hostname}:${config.port}/`);
});
