const carousel= document.querySelector('.carousel');
const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
direction = 'right'

rightArrow.addEventListener('click', function(){
    if(direction == 'left'){
     direction ='right';
slider.prepend(slider.lastElementChild);
   }
   carousel.style.justifyContent='flex-start';
  slider.style.transform = 'translate(-20%)';
});

leftArrow.addEventListener('click', function(){
   if(direction == 'right'){
     direction ='left';
slider.appendChild(slider.firstElementChild);
   }
   carousel.style.justifyContent = 'flex-end';
   slider.style.transform = 'translate(20%)';
});

slider.addEventListener('transitionend', function(){
  
  if(direction == "right"){ slider.appendChild(slider.firstElementChild);
  }
  else if(direction == "left"){ slider.prepend(slider.lastElementChild);
  }
  slider.style.transition='none';
  slider.style.transform='translate(0)';
  setTimeout(function(){
    slider.style.transition='all 0.3s';
  })
})