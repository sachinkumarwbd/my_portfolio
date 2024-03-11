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

gsap.from("#page2 .about ", {
  scale: 0,
  opacity: 0,
  duration: 2,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page2 .about ",
    scroller: "body",
    start: "top 70%",
  },
});
gsap.from("#page3 .box   ", {
  scale: 0,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page3 .box ",
    scroller: "body",
    start: "top 70%",
  },
});
