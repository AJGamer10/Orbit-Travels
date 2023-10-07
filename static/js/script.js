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