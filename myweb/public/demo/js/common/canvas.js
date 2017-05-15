( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )(typeof window !== "undefined" ? window : this, function(window, noGlobal){
	var cDrop = function(obj) {
		return new cDrop.fn.init(obj);
	}
	
	cDrop.fn = cDrop.prototype = {
		constructor: cDrop,
		initCanvas: function(ctx) {
			var that = this;
			var dropXY = {
				x: ctx.canvas.width / 2 + 15,
				y: -200,
				r: 20
			};
			this.dropXY = dropXY;
			this.timer = setInterval(function(){
				that.run(dropXY);
				that.draw(ctx, dropXY);
			}, 1000/60);
		},
		run: function(dropXY) {
			if (dropXY.y > 220) {
				dropXY.y = 160;
			} else if(dropXY.y === 160){
				clearInterval(this.timer);
				this.show();
			} else if (dropXY.y <= 220){
				dropXY.y += 7;
			}
		},
		draw: function(ctx, dropXY) {
			var that = this;
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
			ctx.save();
			ctx.beginPath();
			ctx.fillStyle = '#ff4242';
			ctx.arc(that.dropXY.x, that.dropXY.y, dropXY.r, 0, Math.PI*2, false);
			ctx.fill();
			ctx.clip();
			ctx.restore();
		},
		show: function () {
			var that = this;
		    var time = setInterval(function(){
				that.clippingRegion.r += 20;
				that.draw(that.ctx, that.clippingRegion);
				if (that.clippingRegion.r > Math.max(that.width, that.height)) {
					clearInterval(time);
					time = null;
					that.ctx.canvas.remove();
					that.ctx = null;
					var html = '<div id="logo-wrapper"><div class="logo" id="logo"><img src="demo/img/dxlogorotate.png" alt="逗讯" class="logo-circle animated bounce" /><img src="demo/img/dx1.png" class="zoomIn animated" alt="世界因您而逗" /></div></div>';
					var div = document.createElement('div');
					div.innerHTML = html;
					var oMenu = document.getElementById('wrapper');
					oMenu.insertBefore(div, oMenu.childNodes[0]);
					var imgHtml = '<img src="demo/img/circlelogo.png" class="animateds circlelogo" alt="" />';
					setTimeout(function(){
						$('#logo').append(imgHtml);
					}, 2200);
				};
			},30)
		}
	};
	var init = cDrop.fn.init = function(obj) {
		this.width = obj.width || window.innerWidth;
		this.height = obj.height || window.innerHeight;
		this.clippingRegion = {
			x: -1, 
			y: -1, 
			r: 50
		}
	 	var canvas = document.createElement('canvas');
			canvas.id = 'canvas';
			canvas.width = this.width;
			canvas.height = this.height;
			canvas.style.position = 'absolute';
			canvas.style.left = '0';
			canvas.style.top = '0';
			canvas.style.zIndex = '999';
		var ctx = canvas.getContext('2d');
		this.ctx = ctx;
		document.body.appendChild(canvas);
		this.initCanvas(ctx);
	};
	init.prototype = cDrop.fn;
	cDrop({
		width: window.innerWidth,
		height: window.innerHeight,
	});
})
