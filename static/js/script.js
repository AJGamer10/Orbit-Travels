// Mostrar a Sidebar
document.addEventListener('DOMContentLoaded', function () {
    const mostrarSidebarButton = document.getElementById('mostrarSidebar');
    const fecharSidebarButton = document.getElementById('fecharSidebar');
    const minhaSidebar = document.getElementById('minhaSidebar');

    mostrarSidebarButton.addEventListener('click', function () {
        minhaSidebar.style.left = '0'; // Mostra a barra lateral
    });

    fecharSidebarButton.addEventListener('click', function () {
        minhaSidebar.style.left = '-250px'; // Esconde a barra lateral
    });
});


// Modal de login
document.addEventListener('DOMContentLoaded', function () {
    const mostrarModalLogin = document.getElementById('mostrarModalLogin');
    const fecharModalLogin = document.getElementById('fecharModalLogin');
    const modalLogin = document.getElementById('modalLogin');

    mostrarModalLogin.addEventListener('click', function () {
        modalLogin.style.left = 'calc(100% - 300px)';
    });

    fecharModalLogin.addEventListener('click', function () {
        modalLogin.style.left = '100%'; // Esconde a barra lateral
    });
})

// Estrelas para avaliação
function avaliar(estrela) {
    const star1 = document.getElementById("star1");
    const star2 = document.getElementById("star2");
    const star3 = document.getElementById("star3");
    const star4 = document.getElementById("star4");
    const star5 = document.getElementById("star5");

    let list = [star1, star2, star3, star4, star5]

    // 5 Estrela
    if (estrela == 5) {
        for (let i = 0; i < 6; i++) {
            list[i].style.color = 'yellow'
        }
    }

    // 4 Estrela
    if (estrela == 4) {
        for (let i = 0; i < 5; i++) {
            list[i].style.color = 'yellow'
        }
        star5.style.color = 'gray'
    }

    // 3 Estrela
    if (estrela == 3) {
        for (let i = 0; i < 4; i++) {
            list[i].style.color = 'yellow'
        }
        star4.style.color = 'gray'
        star5.style.color = 'gray'
    }

    // 2 Estrela
    if (estrela == 2) {
        for (let i = 0; i < 3; i++) {
            list[i].style.color = 'yellow'
        }
        star3.style.color = 'gray'
        star4.style.color = 'gray'
        star5.style.color = 'gray'
    }

    // 1 Estrela
    if (estrela == 1) {
        if (star1.style.color === 'yellow') {
            if (star2.style.color === 'yellow' || star3.style.color === 'yellow' || star4.style.color === 'yellow' || star5.style.color === 'yellow') {
                for (let i = 0; i < 2; i++) {
                    list[i].style.color = 'yellow'
                }
                star2.style.color = 'gray'
                star3.style.color = 'gray'
                star4.style.color = 'gray'
                star5.style.color = 'gray'
            } else {
                for (let i = 0; i < 6; i++) {
                    list[i].style.color = 'gray'
                }
            }
        } else {
            for (let i = 0; i < 2; i++) {
                list[i].style.color = 'yellow'
            }
            star2.style.color = 'gray'
            star3.style.color = 'gray'
            star4.style.color = 'gray'
            star5.style.color = 'gray'
        }
    }
}