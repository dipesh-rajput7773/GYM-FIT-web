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
        // Adjust the speed by changing the following line
        var speed = 3; // Change this value to increase or decrease speed

        for (var i = 0; i < rightJS.Tags.length; i++) {
            var x = parseFloat(rightJS.Tags[i].style.right);
            x += speed; // Increment by the speed variable
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




var swiper = new Swiper(".oppo-mySwiper", {

    centeredSlides: false,
    
    slidesPerView: 3.5,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true, // Enable loop
    // direction: '',
    autoplay: {
        reverseDirection: true,
        delay: 2000, // Autoplay delay in milliseconds
    },
});


var swiper = new Swiper(".mySwiper", {

    centeredSlides: false,
    
    slidesPerView: 3.5,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,

    autoplay: {

        delay: 2000,
    },
});








