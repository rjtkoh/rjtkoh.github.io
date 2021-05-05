
// COPY TO CLIPBOARD
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


// SHOW HIDE NAV

let oldValue = 0;

window.addEventListener('scroll', function(e){

    // Get the new Value
    newValue = window.pageYOffset;

    //Subtract the two and conclude
    if(oldValue - newValue < 0 && window.scrollY>300){
      document.querySelector(".navGroup").setAttribute("id", "hiddenNav");
      
    } else if(oldValue - newValue > 0 ){
         document.querySelector(".navGroup").setAttribute("id", "visibleNav");
    }

    // Update the old value 
    oldValue = newValue;
});


// SIDE BAR FIX

// window.addEventListener('scroll', function (){
//   const sideContent = document.querySelector('.third');
//   const titleShrink = document.querySelector('h1');
//   const projectDesc = document.querySelector('h3');
//   const cvSection = document.querySelector('.cv-wrapper');
//   var currentY= window.pageYOffset;
//   var cvY = cvSection.offsetTop;
  
//     console.log('currentY '+ currentY);
//     console.log('cv scroll '+ cvY);
   
  
//     if(currentY > 230 && currentY < (cvY-520)) {
//        sideContent.setAttribute("id", "sidecontentAlt");
//        titleShrink.setAttribute("id", "h1Alt");
//        projectDesc.style.display = "none";
//        sideContent.style.display = "block";
//       } 
//       else if (currentY < 230 && currentY < (cvY-520)) {
//         sideContent.removeAttribute("id", "sidecontentAlt");
//         titleShrink.removeAttribute("id", "h1Alt");
//         projectDesc.style.display = "block";
//         sideContent.style.display = "block";
//       } 
//       else if (currentY > (cvY-520)){
//           sideContent.style.display = "none";
//       }
  
//     }    
//   )