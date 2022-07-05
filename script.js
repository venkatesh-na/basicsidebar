const open =  document.querySelector(".open")
const close = document.querySelector(".close")
const sideBar = document.querySelector(".sidebar")

open.addEventListener("click",()=>{
    sideBar.classList.toggle("closeSide")
})
close.addEventListener("click",()=>{
    console.log("close button clicked");
    sideBar.classList.add("closeSide")
})
