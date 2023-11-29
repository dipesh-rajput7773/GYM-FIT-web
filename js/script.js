/*Slider-Banner*/

$('#banner').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
})

/*Slider-Banner*/


/*Review-Slider*/
$('#review').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: false,
    center: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4.5
        }
    }
})
/*Review-Slider*/

/*testimonial-Slider*/
$('#testimonial').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
})
/*testimonial-Slider*/




var rightJS = {
    init: function () {
        rightJS.Tags = document.querySelectorAll('.rightJS');
        for (var i = 0; i < rightJS.Tags.length; i++) {
            rightJS.Tags[i].style.overflow = 'hidden';
        }
        rightJS.Tags = document.querySelectorAll('.rightJS div');
        for (var i = 0; i < rightJS.Tags.length; i++) {
            rightJS.Tags[i].style.position = 'relative';
            rightJS.Tags[i].style.right =
                '-' + rightJS.Tags[i].parentElement.offsetWidth + 'px';
        }
        rightJS.loop();
    },
    loop: function () {
        var speed = 3;
        for (var i = 0; i < rightJS.Tags.length; i++) {
            var x = parseFloat(rightJS.Tags[i].style.right);
            x += speed;
            var W = rightJS.Tags[i].parentElement.offsetWidth;
            var w = rightJS.Tags[i].offsetWidth;
            if ((x / 100) * W > w) x = -W;
            if (
                rightJS.Tags[i].parentElement.parentElement.querySelector(':hover') !==
                rightJS.Tags[i].parentElement
            )
                rightJS.Tags[i].style.right = x + 'px';
        }
        requestAnimationFrame(this.loop.bind(this));
    },
};
window.addEventListener('load', rightJS.init);



/*Gallery-slider*/


var swiper = new Swiper(".oppo-mySwiper", {
    centeredSlides: false,
    slidesPerView: 3.5,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        reverseDirection: true,
        delay: 2000, 
    },
  breakpoints: {
    340: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 3.5,
    }
  },
});


var swiper = new Swiper(".mySwiper", {
    centeredSlides: true ,
    slidesPerView: 3.5,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        340: {
          slidesPerView: 2.5,
        },
        1024: {
          slidesPerView: 3.5,
        }
      },
    loop: true,
    autoplay: {

        delay: 2000,
    },

});

/*Gallery-slider*/






