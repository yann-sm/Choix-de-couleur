

function fColorPicker(){
	var redValueHex = (parseInt($("#rRange").val())).toString(16);
	var greenValueHex = (parseInt($("#gRange").val())).toString(16);
	var blueValueHex = (parseInt($("#bRange").val())).toString(16);

	if (redValueHex.length == 1) {
		redValueHex = "0" + redValueHex;
	}
	if (greenValueHex.length == 1) {
		greenValueHex = "0" + greenValueHex;
	}
	if (blueValueHex.length == 1) {
		blueValueHex = "0" + blueValueHex;
	}

	var colorHex = "#" + redValueHex + greenValueHex+ blueValueHex;
	$("#hexValue").text(colorHex);

	var rColor = "#" + redValueHex + "0000";
	$("#rWeight").css("background-color", rColor);

	var gColor = "#00" + greenValueHex + "00";
	$("#gWeight").css("background-color", gColor);

	var bColor = "#0000" + blueValueHex;
	$("#bWeight").css("background-color", bColor);

	$("#textColor").css("background-color", colorHex);
}