/* <======================================== Locomotive JS for Smooth Scroll ========================================> */

(function () {    const locomotiveScroll = new LocomotiveScroll();})();


/* <======================================== Herobox & Navbar Animation ========================================> */

window.addEventListener('load',function(){

    gsap.to("nav",{
        y:'200px',
        duration : 2,
        easePower : 3
    })
    gsap.to('.herobox h1',{
        x : '260%',
        duration : 2,
    })
    gsap.to('.herobox p',{
        opacity : 1,
        duration : 2,
        delay : 1.5
    })
    gsap.to('.herobox a.herobox-btn-1',{
        opacity : 1,
        y : '-75%',
        duration : 2,
        delay : 1.5
    })
    gsap.to('.herobox a.herobox-btn-2',{
        opacity : 1,
        y : '-75%',
        duration : 2,
        delay : 1.5
    })
    gsap.to('.herobox a.herobox-btn-3',{
        opacity : 1,
        y : '-75%',
        duration : 2,
        delay : 1.5
    })
    gsap.to('.herobox-members .member',{
        opacity : 1,
        duration : 2,
        delay : 1.8
    })
    gsap.to('.herobox-members h2',{
        opacity : 1,
        duration : 2,
        delay : 1.8
    })
    gsap.to('.herobox-members h4',{
        opacity : 1,
        duration : 2,
        delay : 1.8
    })

})


/* <======================================== Herobox ky andr members wala section Animation ========================================> */

let firstMember = document.querySelector('.herobox-members .user1')

firstMember.addEventListener('mouseenter',()=>{
    gsap.to(firstMember,{
        scale : 1.2,
        zIndex : 999,
    })
})
firstMember.addEventListener('mouseleave',()=>{
    gsap.to(firstMember,{
        scale : 1,
        zIndex : 0,
    })
})

let secondMember = document.querySelector('.herobox-members .user2')

secondMember.addEventListener('mouseenter',()=>{
    gsap.to(secondMember,{
        scale : 1.2,
        zIndex : 999,
    })
})
secondMember.addEventListener('mouseleave',()=>{
    gsap.to(secondMember,{
        scale : 1,
        zIndex : 0,
    })
})


let thirdMember = document.querySelector('.herobox-members .user3')

thirdMember.addEventListener('mouseenter',()=>{
    gsap.to(thirdMember,{
        scale : 1.2,
        zIndex : 999,
    })
})
thirdMember.addEventListener('mouseleave',()=>{
    gsap.to(thirdMember,{
        scale : 1,
        zIndex : 0,
    })
})


let fourthMember = document.querySelector('.herobox-members .user4')

fourthMember.addEventListener('mouseenter',()=>{
    gsap.to(fourthMember,{
        scale : 1.2,
        zIndex : 999,
    })
})
fourthMember.addEventListener('mouseleave',()=>{
    gsap.to(fourthMember,{
        scale : 1,
        zIndex : 0,
    })
})

let fifthMember = document.querySelector('.herobox-members .user5')

fifthMember.addEventListener('mouseenter',()=>{
    gsap.to(fifthMember,{
        scale : 1.2,
        zIndex : 999,
    })
})
fifthMember.addEventListener('mouseleave',()=>{
    gsap.to(fifthMember,{
        scale : 1,
        zIndex : 0,
    })
})


/* <======================================== Section 1 Animation ========================================> */

gsap.to('h1.main-heading',{
    x : '28rem',
    duration : 1,
    scrollTrigger : {
        trigger : 'h1.main-heading',
        start : '0% 60%'
    }
})

gsap.to('p.sub-heading',{
    x : '-38rem',
    duration : 1,
    scrollTrigger : {
        trigger : 'p.sub-heading',
        start : '0% 60%'
    }
})

gsap.to('.mockup1 .icon',{
    opacity : 1,
    duration : 1,
    scrollTrigger : {
        trigger : '.mockup1 .icon',
        start : '0% 60%'
    }
})

gsap.to('.mockup1 .main-image',{
    opacity : 1,
    duration : 1,
    scrollTrigger : {
        trigger : '.mockup1 .main-image',
        start : '0% 60%'
    }
})

gsap.to('.mockup1 h1',{
    opacity : 1,
    y : '-100%',
    duration : 1,
    scrollTrigger : {
        trigger : '.mockup1 h1',
        start : '0% 85%'
    }
})

gsap.to('.mockup1 p',{
    opacity : 1,
    y : '-100%',
    duration : 1,
    scrollTrigger : {
        trigger : '.mockup1 p',
        start : '0% 85%'
    }
})
gsap.to('.mock-2',{
    opacity : 1,
    y : '-20%',
    duration : 1,
    scrollTrigger : {
        trigger : '.mock-2',
        start : '0% 60%',
    }
})

gsap.to('.mock-3',{
    opacity : 1,
    y : '-20%',
    delay : .5,
    duration : 1,
    scrollTrigger : {
        trigger : '.mock-3',
        start : '0% 60%'
    }
})
gsap.to('.mock-4',{
    opacity : 1,
    y : '-20%',
    delay : 1.2,
    duration : 1,
    scrollTrigger : {
        trigger : '.mock-4',
        start : '0% 60%'
    }
})


/* <======================================== Section 2 Animation ========================================> */

gsap.to('.section-2-heading-group h1',{
    transform : 'translateX(0%)',
    duration : 1.2,
    scrollTrigger : {
        trigger : '.section-2-heading-group h1',
        start : 'top 70%'
    }
})

gsap.to('.section-2-heading-group p',{
    transform : 'translateX(0%)',
    duration : 1.2,
    scrollTrigger : {
        trigger : '.section-2-heading-group p',
        start : 'top 70%'
    }
})
gsap.to('.section-2-heading-group i',{
    opacity : 1,
    duration : 1.2,
    scrollTrigger : {
        trigger : '.section-2-heading-group i',
        start : 'top 70%'
    }
})
gsap.to('.section-2-carousel',{
    transform : 'translateX(0%)',
    duration : 1.2,
    scrollTrigger : {
        trigger : '.section-2-carousel',
        start : 'top 70%'
    }
})

gsap.to('.mockup-image-section-2',{
    transform : 'translateY(0%)',
    opacity : 1,
    duration : 1.2,
    scrollTrigger : {
        trigger : '.mockup-image-section-2',
        start : 'top 70%'
    }
})

gsap.to('.section-2-mockup-icon',{
    opacity : 1,
    duration : 1.2,
    scrollTrigger : {
        trigger : '.section-2-mockup-icon',
        start : 'top 70%'
    }
})

gsap.to('.section-2-mockup p',{
    transform : 'translateY(0%)',
    opacity : 1,
    duration : 1.2,
    scrollTrigger : {
        trigger : '.section-2-mockup p',
        start : 'top 70%'
    }
})


/* <======================================== Section 3 Animation ========================================> */

gsap.to('.section3 h1',{
    transform : 'translateX(0%)',
    opacity : 1,
    duration : 1.2,
    scrollTrigger : {
        trigger : '.section3 h1',
        start : 'top 70%'
    }
})

gsap.to('.section3 p',{
    transform : 'translateX(0%)',
    opacity : 1,
    duration : 1.2,
    scrollTrigger : {
        trigger : '.section3 p',
        start : 'top 70%'
    }
})

gsap.to('.slide-1-section3',{
    transform : 'translateY(0%)',
    opacity : 1,
    duration : 1.2,
    scrollTrigger : {
        trigger : '.slide-1-section3',
        start : 'top 70%',
    }
})

/* <======================================== Section 4 Animation ========================================> */

gsap.to('.section4 h1',{
    transform : 'translateY(0%)',
    opacity : 1,
    duration : 1.2,
    scrollTrigger : {
        trigger : '.section4 h1',
        start : 'top 70%',
    }
})
gsap.to('.section4 a.section4-btn1',{
    transform : 'translateY(0%)',
    opacity : 1,
    duration : 1.2,
    scrollTrigger : {
        trigger : '.section4 a.section4-btn1',
        start : 'top 70%',
    }
})


/* <======================================== Footer Animation ========================================> */

gsap.to('.footer-logo',{
    opacity : 1,
    duration : 1.2,
    scrollTrigger : {
        trigger : '.footer-logo',
    }
})

gsap.to('.links',{
    opacity : 1,
    duration : 1.2,
    scrollTrigger : {
        trigger : '.links',
    }
})

gsap.to('.terms',{
    opacity : 1,
    duration : 1.2,
    scrollTrigger : {
        trigger : '.terms',
    }
})