const toggler = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".navbar-collapse");

toggler.addEventListener('click' ,(e)=>{
    if (e.target.parentElement.classList.contains("show")){
        e.target.src = "images/icon-close.svg";
        e.target.parentElement.classList.remove('show');
        navbar.style.display = "block";
    } else {
        e.target.src = "images/icon-hamburger.svg";
        e.target.parentElement.classList.add("show");
        navbar.style.display = "none";
    }
});