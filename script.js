document.addEventListener("DOMContentLoaded", ()=>{
    let content = document.querySelectorAll('.efeito');
    content.forEach((el) =>{
        let contentPosition = el.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;
        if(contentPosition < screenPosition/1.2){
            el.classList.add("animate");
        }
    });
});

document.addEventListener("scroll", ()=>{
    let content = document.querySelectorAll('.efeito');
    content.forEach((el) =>{
        let contentPosition = el.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;
        if(contentPosition < screenPosition/1.2){
            el.classList.add("animate");
        }
    });
});