const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".nav_list a");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

gsap.from(".logo h1  ", {
  x: -90,
  opacity: 0,
  duration: 0.5,
  delay: 0.6,
});
gsap.from(".nav_list   ", {
  y: -80,
  opacity: 0,
  duration: 0.5,
  delay: 0.6,
});

gsap.from(".page2 .about ", {
  scale: 0,
  opacity: 0,
  duration: 2,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".page2 .about ",
    scroller: "body",
    start: "top 70%",
  },
});
