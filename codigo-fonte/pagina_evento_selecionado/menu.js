document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', function () {
        // Alternar a visibilidade do menu ao clicar no ícone
        navLinks.classList.toggle('active');
<<<<<<< HEAD
    }
    );
});

const removeActiveWhenScrollingDownThePage = () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.remove('active');
}

if (window.innerWidth < 768) {
    window.addEventListener('scroll', removeActiveWhenScrollingDownThePage);
}

=======
    });
});
>>>>>>> 127284458181e6ed824c0662956cd2bc8782d172
