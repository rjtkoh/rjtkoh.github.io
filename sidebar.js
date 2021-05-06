
window.addEventListener('scroll', function (){
const sideContent = document.querySelector('.third');
const titleShrink = document.querySelector('h1');
const projectDesc = document.querySelector('h3');
const cvSection = document.querySelector('.cv-wrapper');
var currentY= window.pageYOffset;
var cvY = cvSection.offsetTop;

  console.log('currentY '+ currentY);
  console.log('cv scroll '+ cvY);
 

  if(currentY > 230 && currentY < (cvY-500)) {
     sideContent.setAttribute("id", "sidecontentAlt");
     titleShrink.setAttribute("id", "h1Alt");
     projectDesc.style.display = "none";
     sideContent.style.display = "block";
    } 
    else if (currentY < 230 && currentY < (cvY-500)) {
      sideContent.removeAttribute("id", "sidecontentAlt");
      titleShrink.removeAttribute("id", "h1Alt");
      projectDesc.style.display = "block";
      sideContent.style.display = "block";
    } 
    else if (currentY > (cvY-500)){
        sideContent.style.display = "none";
    }

  }    
)




