(function($){
	$(window).on('resize', function(){
		nine();
	});
	nine();
	function nine() {
		console.log(1);
		var color = ['#ad5257', '#0e55a5', '#375a6d', '#9a2a36', '#e14f50', '#51758f'];
		var width = Math.floor((window.innerWidth) / 3);
		var height = Math.floor(window.innerHeight / 3);
		$('.nine-square').each(function(i){
			var bgColor = color[Math.floor(Math.random() * 7)];
			if (i&1) {
				bgColor = '#ffffff';
			} else {
				bgColor = '#e14f50';
			};
			if (i===4) {
				bgColor = '#323642';
			}
			$(this).css({
				width: width,
				height: height,
				background: bgColor
			});
		})
	}
}(jQuery))
