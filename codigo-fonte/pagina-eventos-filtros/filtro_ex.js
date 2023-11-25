function filterElements(category) {
    const elements = document.querySelectorAll(".box");

    elements.forEach((element) => {
        element.classList.remove("show");

        if (category === "Todos" || element.classList.contains(category)) {
            element.classList.add("show");
        }
    });

    // Aqui você pode adicionar lógica para exibir as caixas ao clicar nos botões do filtro
    const especialBoxG = document.querySelector('.box.Gênero.especial');
    const boxG = document.querySelector('.box.Gênero');
    const especialBoxL = document.querySelector('.box.Localização.especial');
    const boxL = document.querySelector('.box.Localização');
    
    if (category === 'Gênero') {
        especialBoxG.style.display = "flex"
        especialBoxL.style.display = "none";
        boxL.style.display = "none";
    } else if (category === 'Localização') {
        especialBoxL.style.display = "flex"
        especialBoxG.style.display = "none";
        boxG.style.display = "none";
    } else {
        // Se nenhum botão específico for clicado, pode-se ocultar todas as caixas especiais
        especialBoxG.style.display = "none";
        boxG.style.display = "none";
        especialBoxL.style.display = "none";
        boxL.style.display = "none";
    }
}

// Funções para exibir os modais ao clicar nos botões
function showGenre() {
    var modal = document.getElementById("genreModal");
    modal.style.display = "block";
}

function showLocal() {
    var modal = document.getElementById("localModal");
    modal.style.display = "block";
}

function closeModal() {
    var modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
        modal.style.display = "none";
    });
}