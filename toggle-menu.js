var slideOpen = false;
var initHeight = 200;
var intval = null;

function slideToggle() {
    window.clearInterval(intval);
    var mdiv = document.getElementById('mobile');
    if(slideOpen) {
        var h = initHeight;
        slideOpen = false;
        intval = setInterval(function(){
			h--;
			mdiv.style.height = h + 'px';
			if(h <= 0)
				window.clearInterval(intval);
			}, 1
		);
    }
    else {
        var h = 0;
        slideOpen = true;
	    intval = setInterval(function(){
			h++;
			mdiv.style.height = h + 'px';
			if(h >= initHeight)
				window.clearInterval(intval);
			}, 1
		);
    }
}