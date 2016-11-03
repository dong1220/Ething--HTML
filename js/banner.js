/*banner*/
$(function() {

	$(".service-cont4 .left").click(function() {
		var index = parseInt($(this).siblings("span").text());
		if (index < ($(this).parent().find("li").length - 1)) {
			index += 1;
			$(this).siblings("span").text(index);
		}
		var mLeft = $(this).parent().find("li").width();
		$(this).parent().find("ul").animate({
			left: -mLeft * index + "px"
		}, 500);
	});
	$(".service-cont4 .right").click(function() {
		var index = parseInt($(this).siblings("span").text());
		if (index > 0) {
			index -= 1;
			$(this).siblings("span").text(index);
		}
		var mLeft = $(this).parent().find("li").width();
		$(this).parent().find("ul").animate({
			left: -mLeft * index + "px"
		}, 500);
	});
	$(".hot-box .left").click(function() {
		var mLeft = $(this).parent().find("li").width();
		$(".hot-b-groom").animate({
			left: -2*mLeft + "px"
		}, 500, function() {
			$(".hot-b-groom").css({
				'left': '-248px'
			}).children('li').last().after($(this).children('li').first());

		});

	});
	$(".hot-box .right").click(function() {
		var mLeft = $(this).parent().find("li").width();
		$(".hot-b-groom").animate({
			left: 0
		}, 500, function() {
			$(".hot-b-groom").css({
				'left': '-248px'
			}).children('li').first().before($(this).children('li').last());

		});
	});
});