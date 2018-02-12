$('.owl-carousel').owlCarousel({
    loop:true,
    margin:80,
    autoplay: true,
    autoplayTimeout: 2000,
    responsiveClass:true,
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
})