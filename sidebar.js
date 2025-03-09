
window.addEventListener('scroll', function (){
const sideContent = document.querySelector('.third');
const titleShrink = document.querySelector('h1');
const projectDesc = document.querySelector('h3');
const cvSection = document.querySelector('.cv-wrapper');
var currentY= window.pageYOffset;
var cvY = cvSection.offsetTop;
 

  if(currentY > 230 && currentY < (cvY-600)) {
     sideContent.setAttribute("id", "sidecontentAlt");
     titleShrink.setAttribute("id", "h1Alt");
    sideContent.style.visibility = "visible";
    } 
    else if (currentY < 230 && currentY < (cvY-600)) {
      sideContent.removeAttribute("id", "sidecontentAlt");
      titleShrink.removeAttribute("id", "h1Alt");
      sideContent.style.visibility = "visible";
    } 
    else if (currentY > (cvY-600)){
        sideContent.style.visibility = "hidden";
    }

  }    
)




