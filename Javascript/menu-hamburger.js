// Selecionamos os elementos pela classe
let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");


//  Adicionamos um evento de clique 
// E ao clicar adicionamos uma classe com estilos próprios
hamburger.addEventListener("click" , () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

//  Selecionamos .nav-link e executamos uma função para cada elemento dentro dela e removemos as classe adicionadas
document.querySelectorAll(".nav-link").forEach(e => e.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));





