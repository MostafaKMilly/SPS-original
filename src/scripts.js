document.addEventListener("DOMContentLoaded", function () {
  var lastScrollTop = 0;
  var header = document.getElementById("main-header");
  var nav = document.getElementById("main-nav");
  var mobileNav = document.getElementById("mobile-nav");
  var contentWrapper = document.querySelector(".content-wrapper");
  var navToggle = document.getElementById("nav-toggle");
  var closeMobileNav = document.getElementById("close-mobile-nav");

  header.style.backgroundColor = "transparent";

  if (
    !header ||
    !nav ||
    !mobileNav ||
    !contentWrapper ||
    !navToggle ||
    !closeMobileNav
  ) {
    console.error(
      "Header, nav, mobileNav, contentWrapper, navToggle, or closeMobileNav element not found!"
    );
    return;
  }

  navToggle.addEventListener("click", function () {
    if (window.innerWidth < 768) {
      mobileNav.classList.toggle("hidden");
    }
  });

  closeMobileNav.addEventListener("click", function () {
    mobileNav.classList.add("hidden");
  });

  contentWrapper.addEventListener("scroll", function () {
    var scrollTop = contentWrapper.scrollTop;

    // Only execute the following logic on large screens
    if (window.innerWidth >= 768) {
      if (scrollTop > lastScrollTop) {
        nav.style.display = "none";
      } else {
        nav.style.display = "flex";
      }
    }

    lastScrollTop = scrollTop;

    if (scrollTop > 50) {
      header.style.backgroundColor = "black";
    } else {
      header.style.backgroundColor = "transparent";
    }
  });

  var swiper = new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 32,
    loopedSlides: 3,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  swiper.slideNext();
  swiper.loopDestroy();

  document
    .querySelector(".swiper-button-next")
    .addEventListener("click", () => {
      swiper.slideNext();
    });

  document
    .querySelector(".swiper-button-prev")
    .addEventListener("click", () => {
      swiper.slidePrev();
    });
});
