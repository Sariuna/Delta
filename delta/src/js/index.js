function initHeader() {
  const header = document.querySelector(".js-header")

  if (!header) {
    return
  }

  const button = header.querySelector('.js-header-burger-button')

  button.addEventListener('click', () => header.classList.toggle('open'))
}

initHeader()


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: 'slide', 
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },

 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    1279: {
      slidesPerView: 2,
      spaceBetween: 38,
      },
  }
});



var swiperLicence = new Swiper(".swiperLicence", {
  spaceBetween: 30,
  effect: 'slide', 
  navigation: {
    nextEl: ".swiper-btn-next2",
    prevEl: ".swiper-btn-prev2",
  },
 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    640: {
      slidesPerView: 5,
      spaceBetween: 16
    },
    1279: {
      slidesPerView: 5,
      spaceBetween: 27
      },
  }
});

var swiperPartners = new Swiper(".swiperPartners", {
  spaceBetween: 30,
  effect: 'slide', 
  navigation: {
    nextEl: ".swiper-btn-next3",
    prevEl: ".swiper-btn-prev3",
  },
 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 16
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 16
    },
    1279: {
      slidesPerView: 6,
      spaceBetween: 24
      },
  }
});

function viewDiv () {
  let servicesDiv = document.querySelector(".services-div")

  if (document.querySelector(".services-div").style.display == 'block') { 
    document.querySelector(".services-div").style.display = "none";
   document.querySelector(".services__item").style.marginBottom = "20px";
  }
  else {
   document.querySelector(".services-div").style.display = "block";
   document.querySelector(".services__item").style.marginBottom = "0px";
  }
}


