//  Smooth Scroll ao clicar no link mudamos para seção

//  Os elementos link tem que ter o  href referenciando para o id da seção correspondente
// Adicionamos um evento na página para executar a função assim que for carregada/ recarregada
window.addEventListener("load" , function() {

//  Selecionamos os elementos
    var navLinks = document.querySelectorAll(".nav-link")
    var sectionOne = document.querySelector("#one");
    var sectionOneHeight = sectionOne.offsetHeight;
    var scrollPos = window.scrollY;

    //  Executamos essa função de scroll para cada elemento da navegação
    navLinks.forEach(function (target) {
        target.addEventListener("click", function (event) {
            event.preventDefault();
            smoothScroll.scrollTo(this.getAtribute('href'), 1000)
        })
    })
})