(function() {
	var items = [".nows", ".evaluation", ".guide", ".use_car", ".new_car_market", ".groom", ".guess", ".car_beijing", ".sales"]
	var itemsH = {};
	for (var i = 0; i < items.length; i++) {
		itemsH[i] = $(items[i]).offset().top;
	}
	
	

	function bijiao(mTop) {
		for (var i = 0; i < items.length; i++) {
			var h = itemsH[i] - 800;
			if (mTop > h && mTop < itemsH[i]) {
				$(items[i]).addClass("to_r");
			}
		}
	}
	$(window).scroll(function() {
		var mTop = $(this).scrollTop();
		bijiao(mTop);
	});
})();