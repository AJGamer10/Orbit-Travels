// Mostrar a Sidebar
document.addEventListener('DOMContentLoaded', function () {
    const mostrarSidebarButton = document.getElementById('mostrarSidebar');
    const fecharSidebarButton = document.getElementById('fecharSidebar');
    const minhaSidebar = document.getElementById('minhaSidebar');

    mostrarSidebarButton.addEventListener('click', function () {
        minhaSidebar.style.left = '0'; // Mostra a barra lateral
    });

    fecharSidebarButton.addEventListener('click', function () {
        minhaSidebar.style.left = '-100%'; // Esconde a barra lateral
    });
});


// Modal de login
document.addEventListener('DOMContentLoaded', function () {
    const mostrarModalLogin = document.getElementById('mostrarModalLogin');
    const fecharModalLogin = document.getElementById('fecharModalLogin');
    const modalLogin = document.getElementById('modalLogin');

    mostrarModalLogin.addEventListener('click', function () {
        modalLogin.style.left = '20%';
    });

    fecharModalLogin.addEventListener('click', function () {
        modalLogin.style.left = '100%'; // Esconde a barra lateral
    });
})

// Estrelas para avaliação
Avaliar(estrela); {
    const star1 = document.getElementById("star1").src;
    const star2 = document.getElementById("star2").src;
    const star3 = document.getElementById("star3").src;
    const star4 = document.getElementById("star4").src;
    const star5 = document.getElementById("star5").src;

    var list = [star1, star2, star3, star4, star5]

    if (estrela == 5) {
        for (var i = 0; i < 6; i++) {
            list[i].style.color = 'yellow'
        }
    }

    if (estrela == 4) {
        for (var i = 0; i < 5; i++) {
            list[i].style.color = 'yellow'
        }
        star5.style.color = 'gray'
    }

    if (estrela == 3) {
        for (var i = 0; i < 4; i++) {
            list[i].style.color = 'yellow'
        }
        star4.style.color = 'gray'
        star5.style.color = 'gray'
    }

    if (estrela == 2) {
        for (var i = 0; i < 3; i++) {
            list[i].style.color = 'yellow'
        }
        star3.style.color = 'gray'
        star4.style.color = 'gray'
        star5.style.color = 'gray'
    }

    if (estrela == 1) {
        for (var i = 0; i < 2; i++) {
            list[i].style.color = 'yellow'
        }
        star2.style.color = 'gray'
        star3.style.color = 'gray'
        star4.style.color = 'gray'
        star5.style.color = 'gray'
    }
}