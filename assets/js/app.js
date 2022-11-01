let headers = document.getElementsByClassName('accordion__item__header');
let accordionBodies = document.getElementsByClassName('accordion__item__body');
let arrows = document.getElementsByClassName('dropdown-icon');

document.body.addEventListener('click',(e)=>{

    
    if(e.target.classList.contains('accordion__item__header')){
        
        e.target.nextElementSibling.classList.toggle('active');
        e.target.children[0].classList.toggle('rotate')
    }
    else{
        for (const box of accordionBodies) {
            box.classList.remove('active');
        }
        for (const arrow of arrows) {
            arrow.classList.remove('rotate')
        }
    }
})
