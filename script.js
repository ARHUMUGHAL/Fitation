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