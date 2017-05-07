var http = require('http');
var cheerio = require('cheerio');
var url = 'http://www.fengme.com.cn/bg/';

function filter(html) {
	var $ = cheerio.load(html);
	var id = $('#app').html();
	return id;
}
http.get(url, function(res, req){
	var html = '';
	res.on('data', function(data) {
		html += data;
	});
	res.on('end', function(data) {
		console.log(filter(html));
	})
},'utf-8').on('error', function(e) {
	console.log('抓取出错')
});
