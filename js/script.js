var toggleNav = document.getElementById("nav-hidden-toggle");
var togglePop = document.getElementById("hidden-pop");
var closePop = document.getElementById("close-nav");
var activities = document.getElementsByClassName("achild-cards");


function sideBar(){
	togglePop.style.left = '0';
	togglePop.style.display = 'grid';
}

function closeSide(){
	togglePop.style.left = '100%';
	togglePop.style.display = 'none';
}