document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var textColor = document.getElementById("textColor").value;
    var fontFamily = document.getElementById("fontFamily").value;
    var fontSize = document.getElementById("fontSize").value;
    var canvas = document.getElementById("ramadanCanvas");
    var ctx = canvas.getContext("2d");

    var presetBackground = document.getElementById("presetBackground").value;

    var width = canvas.width;
    var height = canvas.height;

    if (presetBackground) {
        var img = new Image();
        img.onload = function() {
            ctx.clearRect(0, 0, width, height);
            ctx.drawImage(img, 0, 0, width, height);
            ctx.fillStyle = textColor;
            ctx.font = fontSize + "px " + fontFamily;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            ctx.shadowColor = "rgba(0, 0, 0, 0.7)";
            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 2;
            ctx.shadowBlur = 4;

            var message = "رمضان كريم\n كل عام وانت بخير  " + name;
            var lines = message.split("\n");
            var yPosition = 100;

            lines.forEach(function(line) {
                ctx.fillText(line, width / 2, yPosition);
                yPosition += 40;
            });

            document.getElementById("downloadBtn").style.display = "inline-block";
        };
        img.src = presetBackground;
    } else {
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = textColor;
        ctx.font = fontSize + "px " + fontFamily;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.shadowColor = "rgba(0, 0, 0, 0.7)";
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 4;

        var message = "رمضان كريم\n كل عام وانت بخير  " + name;
        var lines = message.split("\n");
        var yPosition = 100;

        lines.forEach(function(line) {
            ctx.fillText(line, width / 2, yPosition);
            yPosition += 40;
        });

        document.getElementById("downloadBtn").style.display = "inline-block";
    }
});

document.getElementById("downloadBtn").addEventListener("click", function() {
    var canvas = document.getElementById("ramadanCanvas");
    var imageUrl = canvas.toDataURL("image/png");
    var link = document.createElement("a");
    link.href = imageUrl;
    link.download = "ramadan_image.png";
    link.click();
});