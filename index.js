// text split
const split_word = new SplitType("[data-split-word]", {
    types: "lines, words",
    tagName: "span",
  });
  const split_char = new SplitType("[data-split-char]", {
    types: "chars",
    tagName: "span",
  });
  
  // const loader = () => {
  //   const loadtl = gsap.timeline({
  //     onComplete: () => {
  //       gsap.set(".loader_wrap", { display: "none" });
  //     },
  //     defaults: {
  //       duration: 1.25,
  //       ease: "expo.out",
  //     },
  //   });
  
  //   loadtl.set(".loader_wrap", { display: "flex" });
  
  //   //  loadtl.from(".loader_fora_text .word", {
  //   //    delay: 0.5,
  //   //  opacity:0,
  //   //yPercent: 100,
  //   //stagger: 0.08,
  //   // })
  
  //   // loadtl.to(".loader_fora_text .word", {
  //   //       delay: .8,
  //   //      opacity:0,
  //   //     yPercent: -100,
  //   //        stagger: 0.03,
  //   //  })
  
  //   // loadtl.to(".loader_wrap", {
  //   //   delay: 0.5,
  //   //   yPercent: -100,
  //   // });
  //   loadtl.from(
  //     ".home_hero_wrap",
  //     {
  //       yPercent: 10,
  //       scale: 0.9,
  //       duration: 1,
  //     },
  //     "<0.1"
  //   );
  //   // loadtl.from(
  //   //   ".home_hero_layout ",
  //   //   { opacity: 0, yPercent: 20, duration: 1.5, ease: "expo.out", stagger: 0.3 },
  //   //   "<0.2"
  //   // );
  // };
  // loader();
  
  function createScrollTrigger(triggerElement, timeline) {
    // Reset tl when scroll out of view past bottom of screen
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top bottom",
      onLeaveBack: () => {
        // timeline.progress(0);
        timeline.pause();
      },
    });
    // Play tl when scrolled into view (60% from top of screen)
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top 80%",
      onEnter: () => timeline.play(),
    });
  }
  
  $(".home_benefits_header").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".word"), {
      opacity: 0.25,
      scrollTrigger: {
        trigger: $(this),
        start: "top bottom",
        end: "top 10%",
        scrub: true,
      },
      stagger: 0.5,
      ease: "none",
    });
  });
  
  $(".benefits_card_wrap").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this), {
      xPercent: 10,
      opacity: 0,
      stagger: 0.2,
      duration: 1.5,
      ease: "expo.out",
    });
    createScrollTrigger($(this), tl);
  });
  
  let mm = gsap.matchMedia();
  
  // Desktop and above (992px and up)
  //mm.add("(min-width: 992px)", () => {
  // GSAP code for desktop
  //  $(".home_campaigns_visuals > *").each(function (index) {
  //    let tl = gsap.timeline({ paused: true });
  //    tl.from($(this), {
  //        yPercent: 10,
  //        scale: 0,
  //        opacity: 0,
  //       stagger: 1,
  //        duration: 0.6,
  //       ease: "back.out(4)",
  //    });
  //     createScrollTrigger($(this), tl);
  //  });
  //});
  
  $(".pop_what_orange_svg").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this), {
      yPercent: 20,
      scale: 0,
      opacity: 0,
      stagger: 1,
      duration: 0.8,
      ease: "back.out(.8)",
    });
    createScrollTrigger($(this), tl);
  });
  
  $("[words-slide-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".word"), {
      opacity: 0,
      yPercent: 100,
      duration: 1.5,
      ease: "expo.out",
    });
    createScrollTrigger($(this), tl);
  });
  
  $("[lines-slide-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".line"), {
      opacity: 0,
      yPercent: 100,
      duration: 1.5,
      ease: "expo.out",
    });
    createScrollTrigger($(this), tl);
  });
  
  $("[content-fade-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this), {
      opacity: 0,
      yPercent: 20,
      duration: 1.5,
      ease: "expo.out",
    });
    createScrollTrigger($(this), tl);
  });
  