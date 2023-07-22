
function clickMenu(){
    var menu = document.getElementById("itens_menu");
    if(itens_menu.style.display == 'block'){
        itens_menu.style.display = 'none';
    } else {
        itens_menu.style.display = 'block';
    }
}

document.addEventListener("click", function (event) {
    var menu = document.getElementById("itens_menu");
    var menuIcon = document.querySelector(".material-symbols-outlined");
    var isClickInsideMenu = menu.contains(event.target) || menuIcon.contains(event.target);
    if (!isClickInsideMenu) {
      menu.style.display = "none";
    }
  });

$('.owl-carousel').owlCarousel({
    stagePadding: 85,
    loop:false,
    autoplay: true,
    autoplaySpeed: 2000,
    margin: 1,
    nav:true,
    centerMode: true,

    responsive:{
        0:{
            items:1
        },
        412:{
            items:1
        },
        1000:{
            
            items:5
        }
    }
});