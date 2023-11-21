function filterElements(category) {
    const elements = document.querySelectorAll(".box");

    elements.forEach((element) => {
        element.classList.remove("show");

        if (category === "Todos" || element.classList.contains(category)) {
            element.classList.add("show");
        }
    });

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
        especialBoxG.classList.add('hide');
        especialBoxL.classList.add('hide');
        especialBoxD.classList.add('hide');
    }
}