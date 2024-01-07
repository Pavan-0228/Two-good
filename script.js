var videoCon = document.querySelector(".video-con");
var play = document.querySelector(".play");


function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
locomotiveAnimation();

function videoAmination (){
    videoCon.addEventListener("mouseenter",function (dets){
            gsap.to(play,{
            opacity:1,
            scale:1,
            display:"block"
        })
    })
    videoCon.addEventListener("mouseleave",function (){
        gsap.to(play,{
            opacity:0,
            scale:0,
            display:"none"
        })
    })
    videoCon.addEventListener("mousemove",function (dets){
        gsap.to(play,{
            left:dets.x-40,
            top:dets.y-40
        })
    })
}
videoAmination();

function loadingAnimation(){
    gsap.from(".page1 h1",{
        opacity:0,
        y:100,
        delay:.5,
        duraton:.9,
        stagger:.5
    })
    gsap.from(".page1 .video-con",{
        opacity:0,
        scale:.7,
        delay:1.4,
        duraton:.4
    })
}
loadingAnimation();


document.addEventListener("mousemove",function(dets){
    gsap.to(".cursor",{
       left: dets.x,
       top: dets.y,      
    })
})
document.querySelectorAll(".child")
.forEach(function(elem,index){
    let arr = ["#F7F2EC","#ECECEC","#EDE6E6","#D6E0E0"]
    elem.addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            transform: 'translate(-50%,-50%) scale(1)',
            backgroundColor: arr[index],
         })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
             transform: 'translate(-50%,-50%) scale(0)'
         })
    })
})


function navAnimation(){
    gsap.to(".nav-1>svg",{
        transform: "translateY(-100%)",
        scrollTrigger:{
            scroller: "#main",
            trigger:".nav-1>svg",
            start : "top top",
            scrub:true,
        },  
    })

    gsap.to(".nav-2>a",{
        opacity:"0",
        transform: "translateY(-133%)",
        scrollTrigger:{
            scroller: "#main",
            trigger:".nav-2>a",
            start : "top  30%",
            scrub:2
        },
    })
}
navAnimation();
