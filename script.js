var video = document.querySelector(".video-con");
var play = document.querySelector(".play");

function videoAmination (){
    video.addEventListener("mouseenter",function (dets){
        gsap.to(play,{
            opacity:1,
            scale:1,
        })
    })
    video.addEventListener("mouseleave",function (){
        gsap.to(play,{
            opacity:0,
            scale:0
        })
    })
    video.addEventListener("mousemove",function (dets){
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
        opacity:0.9,
        scale:0,
        delay:1,
        duraton:.4
    })
}
loadingAnimation();