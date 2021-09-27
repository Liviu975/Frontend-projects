

function myFunction(){
	var y = document.getElementById("icon");
	var s = document.getElementById("sectiune");
	
	var Color = y.style.color;
	
	if(Color == "white"){
		y.style.color = "black";
		Color = y.style.color;
		y.style.transform = "rotate(180deg)";
		y.style.transitionDuration = "0.3s";
		s.style.background = "#fff";
		s.style.transitionDuration = "0.3s";
	}
	else {
		y.style.color="white";
		Color = y.style.color;
		y.style.transform = "rotate(360deg)";
		s.style.background = "#191919";
		s.style.transitionDuration = "0.3s";
	}
	
	
}