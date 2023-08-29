var objowlcarousel = $(".popular_events");
    if (objowlcarousel.length > 0) {
        objowlcarousel.owlCarousel({
		    margin:20,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 3,
                },
                1200: {
                    items: 1,
                },
                1600: {
                    items: 1,
                },
            },
            lazyLoad: true,
            pagination: false,
            loop: true,
			dots: false,
			autoplay:true,
			autoplayTimeout:3000,
            navigation: true,
            stopOnHover: true,
            nav: false,
           navigationText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"]
        });
    }
//Mobile Menu Start here
function openNav() {
  document.getElementById("mySidenav").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
}
//Mobile Menu End here


