function createLine () {

	$(".canvas-container").append("<div id=line></div>");
	$("#line").css("position","absolute");
	$("#line").css("left","0px");
	$("#line").css("top","0px");
	$("#line").css("border-top","2px black dotted");
	$("#line").css("margin-top","0px");
	$("#line").css("height","2px");
	$("#line").css("pointer-events","none");


	$(document).ready(function () {
		$(".canvas-container").mousemove(function(event){
            // @ts-expect-error
			var w : number = parseInt($(".canvas-container").width() / 2);
            // @ts-expect-error
			var h : number = parseInt($(".canvas-container").height() / 2);

			var x : number = event.pageX;
			var y : number =event.pageY;
			var dx : number = x - w;
			var dy : number = y - h;
			var dd : number = Math.abs(w / dx);
			dx = dx * dd;
			dy = dy * dd;
			x = w + dx;
			y = h + dy;
			setLinePos(x, y, w, h);
		});
	});

}

function setLinePos (x1 : number, y1 : number, x2 : number, y2 : number) {

    if (x2 < x1) {
        var temp = x1;
        x1 = x2;
        x2 = temp;
        temp = y1;
        y1 = y2;
        y2 = temp;
    }

    var line = $("#line");
    var length = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    line.css("width", length + "px");
    var angle = Math.atan((y2 - y1) / (x2 - x1));
    line.css("top", y1 + 0.5 * length * Math.sin(angle) + "px");
    line.css("left", x1 - 0.5 * length * (1 - Math.cos(angle)) + "px");
    line.css("-moz-transform", "rotate(" + angle + "rad)");
    line.css("-webkit-transform", "rotate(" + angle + "rad)");
    line.css("-o-transform", "rotate(" + angle + "rad)");

}

createLine();
