
// COPY TO CLIPBOARD
function copyStuff(){
  document.getElementById("btnCopy");
  // document.execCommand("Copy");
  document.clipboard.writeText('text to be copied');
  document.querySelector(".tooltip").setAttribute("id", "tooltipcopied");
  document.querySelector(".triangle").setAttribute("id", "trianglecopied");
  document.getElementById("tooltipcopied").innerHTML = "Copied!";
}



function enterFunc() {
  document.querySelector(".tooltip").setAttribute("id", "tooltipshow");
  document.querySelector(".triangle").setAttribute("id", "tooltipshow");
}



function outFunc() {
 
   document.querySelector(".tooltip").setAttribute("id", "tooltiphidden");
  document.querySelector(".tooltip").innerHTML = "Copy to clipboard";
  document.querySelector(".triangle").setAttribute("id", "tooltiphidden");

}


window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');

  if (window.scrollY > 0) {
    navbar.classList.remove('clear');
    navbar.classList.add('white');
  } else {
    navbar.classList.remove('white');
    navbar.classList.add('clear');
  }
});









