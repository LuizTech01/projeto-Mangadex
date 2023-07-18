$('.owl-carousel').owlCarousel({
    
    stagePadding: 110,
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
        600:{
            items:3
        },
        1000:{
            
            items:5
        }
    }
});