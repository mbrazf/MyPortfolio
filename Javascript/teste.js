if(hamburger.classList.contains("active")){
    let mainContent = document.querySelector(".main-content").style.paddingTop = "320px", transition = "0.3s";
    let transitionContainer = document.querySelector(".main-content").style.transition = "all 0.4s";
    let heightContainer = document.querySelector(".main-content").style.height = "500px"
} else {
    let mainContent = document.querySelector(".main-content").style.paddingTop = "0px";
}