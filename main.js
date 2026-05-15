document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");

  if (menuBtn && navLinks) {
    const menuBtnIcon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");

      const isOpen = navLinks.classList.contains("open");
      if (menuBtnIcon) {
        menuBtnIcon.className = isOpen ? "ri-close-line" : "ri-menu-line";
      }
    });

    navLinks.addEventListener("click", () => {
      navLinks.classList.remove("open");
      if (menuBtnIcon) {
        menuBtnIcon.className = "ri-menu-line";
      }
    });
  }

  // ScrollReveal config
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal(".about__container .section__header", {
      ...scrollRevealOption,
    });

    ScrollReveal().reveal(".about__container .section__description", {
      ...scrollRevealOption,
      delay: 500,
      interval: 500,
    });

    ScrollReveal().reveal(".about__container img", {
      ...scrollRevealOption,
      delay: 1500,
    });

    ScrollReveal().reveal(".service__container .section__header", {
      ...scrollRevealOption,
    });

    ScrollReveal().reveal(".service__container .section__description", {
      ...scrollRevealOption,
      delay: 500,
    });

    ScrollReveal().reveal(".service__card", {
      duration: 1000,
      delay: 1000,
      interval: 500,
    });

    ScrollReveal().reveal(".blog__content .section__header", {
      ...scrollRevealOption,
    });

    ScrollReveal().reveal(".blog__content h4", {
      ...scrollRevealOption,
      delay: 500,
    });

    ScrollReveal().reveal(".blog__content p", {
      ...scrollRevealOption,
      delay: 1000,
    });

    ScrollReveal().reveal(".blog__content .blog__btn", {
      ...scrollRevealOption,
      delay: 1500,
    });
  }

  // Swiper
  if (typeof Swiper !== "undefined") {
    new Swiper(".swiper", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }

  // Instagram duplicate (safe version)
  const instagram = document.querySelector(".instagram__flex");

  if (instagram) {
    const items = Array.from(instagram.children);
    items.forEach((item) => {
      const duplicateNode = item.cloneNode(true);
      duplicateNode.setAttribute("aria-hidden", "true");
      instagram.appendChild(duplicateNode);
    });
  }

  // Hero parallax scroll
  const heroImg = document.querySelector(".exhibit__hero img");

  if (heroImg) {
    window.addEventListener("scroll", () => {
      const offset = window.pageYOffset;
      heroImg.style.transform = `translateY(${offset * 0.4}px)`;
    });
  }

  // Scroll progress bar
  const progressBar = document.querySelector(".scroll-progress");

  if (progressBar) {
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scrollTop / docHeight) * 100;
      progressBar.style.width = `${progress}%`;
    });
  }
});