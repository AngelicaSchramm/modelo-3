document.addEventListener("scroll", ()=>{
    let content = document.querySelectorAll('.efeito');
    content.forEach((el) =>{
        let contentPosition = el.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;
        if(contentPosition < screenPosition/1.1){
            el.classList.add("animate");
        }
    });
});

