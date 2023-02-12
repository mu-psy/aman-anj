
// gsap.from("#m1", {

// scrollTrigger: {
//     scrub: 1,
//     trigger: ".parallax",
//     pin: ".parallax",
//     markers:true,
//     // start: "top top", // When the top of the trigger reaches the top of the viewport
//     // end: "bottom -600%",
// },
// y:"50%",
// ease:"linear",
// // scale:0.5
// })

// gsap.from(".adjust", {

// scrollTrigger: {
//     scrub: 1,
//     trigger: ".parallax",
//     pin: ".parallax",
//     markers:true,
//     // start: "top top", // When the top of the trigger reaches the top of the viewport
//     // end: "bottom -600%",
// },
// y:"50%",
// ease:"linear",
// // scale:0.5
// })








//tryyy

const introTL = gsap.timeline({
    ease: 'none',
    scrollTrigger: {
    scrub: 0.5,
    trigger: ".parallax",
    pin: ".parallax",
    // markers:true,
    anticipatePin: 1,
        start: "top top", // When the top of the trigger reaches the top of the viewport
        end: "bottom -1800%",
    }
  });

    introTL
    .to('.black', {
        opacity: 0,
        ease:"slow(0.7, 0.7, false)",
        duration: 5,
        // scrollTrigger: {
        //     scrub: 1,
        //     trigger: ".parallax",
        //     pin: ".parallax",
        //     markers:true,
        //     // start: "top top", // When the top of the trigger reaches the top of the viewport
        //     // end: "bottom -600%",
        // }
        })
    .from('#m1', {
    y:"100%",
    ease:"linear",
    duration: 4,
    // scrollTrigger: {
    //     scrub: 1,
    //     trigger: ".parallax",
    //     pin: ".parallax",
    //     markers:true,
    //     start: 'bottom bottom',
    //     // start: "top top", // When the top of the trigger reaches the top of the viewport
    //     // end: "bottom -600%",
    // }
    })

    .from('.container', {
        opacity: 0,
        ease:"slow(0.7, 0.7, false)",
        duration: 4,
        // scrollTrigger: {
        //     scrub: 1,
        //     trigger: ".parallax",
        //     pin: ".parallax",
        //     markers:true,
        //     start: 'bottom bottom',
        //     // start: "top top", // When the top of the trigger reaches the top of the viewport
        //     // end: "bottom -600%",
        // }
        },'-=2')
    .from('.adjust', {
        y:"100%",
        ease:"linear",
        duration: 6,
        // scrollTrigger: {
        //     scrub: 1,
        //     trigger: ".parallax",
        //     pin: ".parallax",
        //     markers:true,
        //     // start: "top top", // When the top of the trigger reaches the top of the viewport
        //     // end: "bottom -600%",
        // }
        },'-=2.5')
        .from('.ball', {
            left:"-100%",
            // x:"-100%",
            ease:"linear",
            duration: 8,
            },'-=3.2')

        .from('.harryboy', {
            left:"-100%",
            // x:"-100%",
            ease:"linear",
            duration: 8,
            },'-=2.5')

        .from('.adjust2', {
            scale:0,
            opacity: 0,
            left:"-70%",
            ease:"linear",
            duration: 8,
            },'-=7')

        .from('#heartstyle', {
            scale:0,
            opacity: 0,
            // left:"-70%",
            ease:"linear",
            duration: 6,
            },'-=1')
        .from('#heartstyle2', {
            // display:"none",
            // scale:5,
            opacity: "0.1%",
            // left:"-70%",
            // ease:"linear",
            duration: 4,
            },'-=2.5')




            
        




        

