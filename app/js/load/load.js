(function(w){
	var loadBase = {
		loadOver: function(oScript) {
			var that = this;
			console.log(oScript.readyState,oScript.readyState);
			if(oScript.readyState=='loaded' || oScript.readyState=='complete'){  
			   alert('done');  
			};
			oScript.onload = oScript.onreadystatechange = null;  
//			arr.map(function(i){
//				console.log(i.src);
//				that.loadJS(i.src);
//			})
		},
		loadError: function(e) {
			console.log(e);
		},
		loadJS: function(jsSrc, arr) {
			var that = this;
			var oHead = document.getElementsByTagName('head').item(0);
			var oScript = document.createElement('script');
			oScript.type = 'text/javascript';
			oScript.src = jsSrc;
			oScript.onerror = that.loadError(jsSrc);
  			oScript.onload = oScript.onreadystatechange = function() {
		  		if(  ! this.readyState || this.readyState=='loaded' || this.readyState=='complete'){
	          		alert('loaded');
	   			}
  			};
			oHead.appendChild(oScript);
		},
		loadCSS: function(cssSrc) {
			var oHead = document.getElementsByTagName('head').item(0);
			var oLink = document.createElement('link');
			oLink.type = 'text/css';
			oLink.rel = 'stylesheet';
			oLink.href = cssSrc;
			oHead.appendChild(oLink);
		},
		loadIMAGE: function(imgSrc) {
			// 依赖jquery 或 zepto
			if ($) {
				$('<img />').attr('src', imgSrc);
			};
		},
		loadFile: function(fileList) {
			var that = this;
			fileList.map(function(item) {
				if (item.type === 'css') {
					that.loadCSS(item.src);
				};
				if (item.type === 'javascript') {
					that.loadJS(item.src, item.require);
				};
				if (item.type === 'image') {
					that.loadIMAGE(item.src);
				};
			})
		}
	};
	w.loadBase = loadBase;
})(window);
