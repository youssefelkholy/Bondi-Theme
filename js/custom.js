let span = document.querySelector(".top");

window.onscroll = function() {

    // if(this.scrollY >= 1000) {
    //     span.classList.add("show");
    // } else {
    //     span.classList.remove("show");
    // }
    this.scrollY >= 1200 ? span.classList.add("show") : span.classList.remove("show"); 
};

span.onclick = function () {
    window.scrollTo ({
        top : 0,
        behavior : "smooth",        
    });
};