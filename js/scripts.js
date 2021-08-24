// Ajustar a altura da página quando for menor que a sidebar

$(document).ready( function () {
    
    const alturaSidebar = $(".sidebar").height()
    const alturaContent = $(".content").height()
    const alturaConteudo = $(".header").height() + $("#page-content").height() + $("footer").height()

    // console.log(alturaSidebar)
    // console.log(alturaContent)
    // console.log(alturaConteudo)

    if(alturaSidebar > alturaConteudo) {

        // console.log("é maior")

        $("#page-content").height($(".sidebar").height() - ($(".header").height() + 2 * $("footer").height()))

        // console.log("nova altura do conteudo: ", $("#page-content").height())

    }
})

// Módulo 1 / Aula 1 / Topico 5
// Mapa do Brasil 1

function toggleLegenda(item) {
    var texto = document.getElementById(item)

    if (texto.style.opacity == 0) {
        texto.style.opacity = '1'
    } else {
        texto.style.opacity = '0'
    }
}

function mapHover (item) {
    var mapa = document.getElementById(item)
    mapa.style.fill = "#b5ff61";
}

// Mapa do Brasil 1

function mapHoverOut (item) {
    var mapa = document.getElementById(item)
    
    if (item === "ba-mapa") {
        mapa.style.fill = "#9cd15e";
    }
    if (item === "pe-mapa") {
        mapa.style.fill = "#71a94a";
    }
}