// gsap.to(".box1",{
//     x:1150,
//     // y:500,
//     duration:2,
//     delay:1,
//     scale:.5,
//     rotate:360,
//     borderRadius:"50%"
// })
// gsap.from(".box2",{
//     x:1150,
//     // y:500,
//     duration:2,
//     delay:1,
//     scale:.5,
//     rotate:360,
//     borderRadius:"50%"
// })

// gsap.from("h1",{
//     y:30,
//     duration:1,
//     delay:1,
//     opacity:0,
//     stagger:.3,
//     // repeat:-1,
//     yoyo:true
// })


var tl = gsap.timeline()

// tl.to(".box1",{
//     x:1100,
//     y:100,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })
// tl.to(".box2",{
//     x:1100,
//     y:100,
//     duration:1.5,
//     // delay:1
// })
// tl.to(".box3",{
//     x:1100,
//     y:100,
//     rotate:-360,
//     duration:1.5,
//     // delay:1
// })

tl.from(".logo",{
    y:-50,
    opacity:0,
    duration:1.5
})

tl.from(".content a",{
    y:-50,
    opacity:0,
    duration:1.5,
    stagger:.5
})   

tl.from(".main span",{
    y:-90,
    opacity:0,
    duration:1.5
})

