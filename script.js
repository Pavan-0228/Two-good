var videoCon = document.querySelector(".video-con");
var play = document.querySelector(".play");

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

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


