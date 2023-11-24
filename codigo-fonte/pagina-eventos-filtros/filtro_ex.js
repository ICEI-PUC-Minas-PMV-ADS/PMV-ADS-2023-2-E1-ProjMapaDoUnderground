function showCalendar() {
    $("#datepicker").datepicker("show");
}
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
    const especialBoxL = document.querySelector('.box.Localização.especial');
    const especialBoxD = document.querySelector('.box.Data.especial');
    
    if (category === 'Gênero') {
        especialBoxG.classList.remove('hide');
        especialBoxL.classList.add('hide');
        especialBoxD.classList.add('hide');
    } else if (category === 'Localização') {
        especialBoxG.classList.add('hide');
        especialBoxL.classList.remove('hide');
        especialBoxD.classList.add('hide');
    } else if (category === 'Data') {
        especialBoxG.classList.add('hide');
        especialBoxL.classList.add('hide');
        especialBoxD.classList.remove('hide');
    } else {
        // Se nenhum botão específico for clicado, pode-se ocultar todas as caixas especiais
        especialBoxG.classList.add('hide');
        especialBoxL.classList.add('hide');
        especialBoxD.classList.add('hide');
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
$(function() {
    $("#datepicker").datepicker({
        dateFormat: "dd/mm/yy" // Formato da data
        // Outras opções e configurações podem ser adicionadas aqui
    });
});