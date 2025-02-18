document.addEventListener("DOMContentLoaded", function () {
    // Menú hamburguesa
    const hamBurger = document.querySelector(".ham-burger");
    const navbar = document.querySelector(".navbar");

    if (hamBurger && navbar) {
        hamBurger.addEventListener("click", function () {
            navbar.classList.toggle("show");
        });
    }

    // Header fijo al hacer scroll
    window.onscroll = function () {
        const docScrollTop = document.documentElement.scrollTop;

        if (window.innerWidth > 991) {
            if (docScrollTop > 100) {
                document.querySelector("header").classList.add("fixed");
            } else {
                document.querySelector("header").classList.remove("fixed");
            }
        }
    };

    // Resaltar el enlace activo
    const links = navbar?.querySelectorAll("a"); // Verifica si navbar existe antes de buscar enlaces

    if (links) {
        links.forEach(function (element) {
            element.addEventListener("click", function () {
                links.forEach((link) => link.classList.remove("active"));
                this.classList.add("active");
                navbar.classList.toggle("show"); // Cierra el menú al hacer clic en un enlace
            });
        });
    }
});