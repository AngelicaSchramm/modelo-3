var elem = document.querySelectorAll('[data-anime]');

function animeScroll(){
    const windowTop = window.innerHeight;
    elem.forEach(elements => {
        let elementPos = elements.getBoundingClientRect().top;
        if(elementPos <= windowTop / 1.3){
            elements.classList.add('animate')
        }
    })
}


document.addEventListener("scroll", animeScroll());