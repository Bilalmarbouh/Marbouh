let navbar = document.querySelector(".navbars")
window.addEventListener("scroll",function(){
    if(this.window.scrollY >= 40){
        navbar.classList.add("actived")
    }else{
        navbar.classList.remove("actived")
    }
})

let bar = document.getElementById("bar")
let nav = document.getElementById("nv")

bar.onclick = function(){
    nav.classList.toggle("active")
}


let skills = document.querySelector(".skills")
let spans = document.querySelectorAll(".skill .box span")

window.addEventListener("scroll",function(){
    if(window.scrollY >= skills.offsetTop - 140){
        spans.forEach((ele)=>{
            ele.style.width = ele.dataset.width;
        })
    }else{
        spans.forEach((ele)=>{
            ele.style.width = "0px";
        })
    }
})

let sections = document.querySelectorAll("section")

window.addEventListener("scroll",function(){
    sections.forEach((sec)=>{
        if(this.window.scrollY >= sec.offsetTop-170){
            sec.classList.add("show-animate")
        }else{
            sec.classList.remove("show-animate")
        }
    })
})

let content = document.querySelector(".content")

window.addEventListener("load",function(){
    content.classList.add("show-animate")
})