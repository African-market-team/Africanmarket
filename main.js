

/* hero images */
var i = 0; 			
var images = [];	
	

images[0] = "css/img/img1.jpg";


images[1] = "css/img/img2.jpg";

images[2] = "css/img/img3.jpg";




function imgChange(){
  
  let slide = document.querySelector(".hero-img img"); 

 
  
	slide.src =images[i];
 
    if(i < images.length - 1){
	
	  i++; 
	} else { i = 0;}

    setTimeout(" imgChange();", 9000); }
    


window.onload=imgChange;


/* navbar responsive*/

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});


/* navbar responsive*/

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});


