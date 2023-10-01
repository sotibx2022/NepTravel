
var timeout;
// This function for mousemove of play option for video
function videoAnimation(){
    var play = document.querySelector(".play-box");
    var videobox = document.querySelector(".video");
    
    videobox.addEventListener("mouseenter",function(){
        gsap.to(play,{
            opacity:1,
            scale:1
        })
    })
    videobox.addEventListener("mouseleave", function(){
        gsap.to(play,{
            opacity:0,
            scale:0
        })
    })
    videobox.addEventListener("mousemove", function(details){
    yvalue = details.clientY - videobox.getBoundingClientRect().top;
    xvalue = details.clientX - videobox.getBoundingClientRect().left
        gsap.to(play,{

            left:xvalue+ "px",
            top:yvalue + "px"
        })
      
    
    })
}

// Different Cursor follower for features Items
function featureItemsCursorFollower(){
    var features = document.querySelectorAll(".feature-item");

    features.forEach((feature)=>{
        feature.addEventListener("mouseenter",function(){
    
           cursor = feature.querySelector(".cursor");
            gsap.to(cursor,{
                scale:1,
                opacity:1
            })
        
        })
        feature.addEventListener("mousemove", function(details){
            xdiffer = details.clientX - feature.getBoundingClientRect().left;
            ydiffer = details.clientY -feature.getBoundingClientRect().top;
            gsap.to(cursor,{
                left:xdiffer + "px",
                top:ydiffer + "px",
                opacity:1,
                scale:1
            })
          
        })
        feature.addEventListener("mouseleave", function(){
            gsap.to(cursor,{
                scale:0,
                opacity: 0
            })
        
        })
    })
}
// featureItemsCursorFollower()
// To Expand Submit form on click
function expandForm(){
    var button = document.querySelector(".testi-button");

    button.addEventListener("click",function(e){
        e.preventDefault();
       var actives = document.querySelectorAll(".active-field");
       actives.forEach((active)=>{
        active.style.display = "block";
       })
       
       
    })
}
expandForm()
// Circle will follow the cursor over the window.
function circleMouseFollower(xscale,yscale ){
    window.addEventListener("mousemove", function (dets) {
        document.querySelector(
            ".mini-circle"
          ).style.opacity = 1;  
      document.querySelector(
        ".mini-circle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
  }
  circleMouseFollower()
//   Circle will scale the size as per the mouse movement
  function changeMouseScale(){
    window.addEventListener("mousemove", function(details){
        clearTimeout(timeout)
        xprev = 0;
        yprev = 0
        xdiff = details.clientX - xprev;
        ydiff = details.clientY - yprev;
        xscale = gsap.utils.clamp(1.2,0.8,xdiff);
        yscale = gsap.utils.clamp(1.2,0.8,ydiff);
        
        circleMouseFollower(xscale,yscale )
        timeout = setTimeout(() => {
            document.querySelector(
                ".mini-circle"
              ).style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(1, 1)`;  
        }, 100);
        xprev = details.clientX;
        yprev = details.clientY;

    })
}
// To exclude some elements for circle follower on mousemove
function excludeCircleFollower(){
    const elements = ["video", "good-items", "features-items", "advanture", "good"];

    elements.forEach(element => {
      document.querySelector(`.${element}`).addEventListener("mouseenter", function() {
        document.querySelector(".mini-circle").style.opacity = 0;
      });
    
    //   document.querySelector(`.${element}`).addEventListener("mouseleave", function() {
    //     document.querySelector(".mini-circle").style.opacity = 1;
    //   });
    });
}
excludeCircleFollower();
changeMouseScale();
function AnimateImages(){
    document.querySelectorAll(".element").forEach(function (elem) {
        var rotate = 0;
        var diffrot = 0;
      
        elem.addEventListener("mouseleave", function (dets) {
          gsap.to(elem.querySelector(".element-image"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,
          });
        });
      
        elem.addEventListener("mousemove", function (dets) {
          var diff = dets.clientY - elem.getBoundingClientRect().top;
          diffrot = dets.clientX - rotate;
          rotate = dets.clientX;
          gsap.to(elem.querySelector(".element-image"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
          });
        });
      });
}
AnimateImages();
// HomePage Animation
function homePageAnimation(){
    tl = gsap.timeline();
    tl.from(".left-logo",{
        y:-200,
        duration:0.5,
        delay:0.1,
        
    })
    tl.from(".menu-items li",{
        y:-200,
        duration:0.5,
        delay:0.1,
        stagger:0.3
        
    })
    tl.from(".hero-heading span",{
        y:200,
        duration:0.5,
        delay:0.1,
        stagger:0.3,
        opacity:0
        
    })
    tl.from(".video",{
        y:200,
        duration:0.5,
        delay:0.1,
        stagger:0.3,
        opacity:0,
        scale:0
    })
}
homePageAnimation()





 




