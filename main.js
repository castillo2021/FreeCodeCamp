var cards = document.querySelectorAll(".card");


var observer = new IntersectionObserver((element)=>{

element.forEach(element => {
    if(element.isIntersecting){
        element.target.classList.add('active');
    }else{
       element.target.classList.remove('active');
    }
});

},{
    root: null,
    rootMargin:"0px",
    threshold:1.0,
});



cards.forEach(element => {
    observer.observe(element);
});