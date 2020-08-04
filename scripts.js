
function copyStuff(){
  document.getElementById("btnCopy");
  document.execCommand("Copy");
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