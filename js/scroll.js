const navBarScroll = () => {
    let derniere_position_de_scroll_connue = 0;
    window.addEventListener('scroll', function(e) {
        navbar = document.querySelector(".nav-bar")
        console.log('hey');
        if(window.scrollY < derniere_position_de_scroll_connue ){
            navbar.classList.remove("nav-bar-transform");
        } else if(window.scrollY == 102){
            console.log("hey");
        } else if (window.scrollY >= 102) {
            navbar.classList.add("nav-bar-transform");
        } else if (window.scrollY <= 204) {
            navbar.classList.remove("nav-bar-transform");
        }
        derniere_position_de_scroll_connue = window.scrollY;
    
    
    })
}

navBarScroll();
console.log('bonjour');

