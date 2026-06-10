function mostrarImpacto() {
    const cultura = document.getElementById("cultura").value;
    const resultado = document.getElementById("resultado");

    let mensagem = "";

    switch(cultura) {
        case "soja":
            mensagem = "Soja: Baixo consumo de água, alta produtividade. Contribui moderadamente para a preservação do solo.";
            break;
        case "milho":
            mensagem = "Milho: Média necessidade de fertilizantes, bom para rotação de culturas.";
            break;
        case "arroz":
            mensagem = "Arroz: Alto consumo de água, práticas sustentáveis podem reduzir impactos.";
            break;
        case "algodao":
            mensagem = "Algodão: Necessita de manejo eficiente para minimizar uso de pesticidas e água.";
            break;
        default:
            mensagem = "Selecione uma cultura para ver o impacto ambiental.";
    }

    resultado.textContent = mensagem;
}
