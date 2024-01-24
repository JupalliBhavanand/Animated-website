var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"70% 50%",
    scrub:true,

}}) 

tl.to("#fanta",{
    top:"120%",
    left:"5%"
},'orange')

tl.to("#orange2",{
    top:"160%",
    left:"30%"
},'orange')

tl.to("#orange1",{
    width:"15%",
    top:"169%",
    right:"10%"
},'orange')

tl.to("#leaf1",{
    width:"15%",
    rotate:"180deg",
    top:"125%",
    left:"80%"
},'orange')

tl.to("#leaf2",{
    width:"15%",
    rotate:"180deg",
    top:"115%",
    left:"5%"
},'orange')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"70% 50%",
    scrub:true,
}})

tl2.from("#lemon",{
    rotate:"-90deg",
    left:"-100%",
    top:"110%"
},'pepsi')

tl2.from("#sprite",{
    rotate:"-90deg",
    left:"-100%",
    top:"100%"
},'pepsi')

tl2.from("#ice",{
    rotate:"90deg",
    right:"-100%",
    top:"110%"
},'pepsi')

tl2.from("#pepsi",{
    rotate:"90deg",
    right:"-100%",
    top:"100%"
},'pepsi')

tl2.to("#orange2",{
    width:"15vw",
    left:"37%",
    top:"215%"
},'pepsi')

tl2.to("#fanta",{
    width:"30vw",
    left:"35%",
    top:"222%"
},'pepsi')



