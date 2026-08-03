/*==================================================
    LOAD HEADER & FOOTER
==================================================*/

async function loadIncludes() {

    const headerContainer = document.getElementById("header");

    if (headerContainer) {

        const header = await fetch("/includes/header.html");

        headerContainer.innerHTML = await header.text();

    }

    const footerContainer = document.getElementById("footer");

    if (footerContainer) {

        const footer = await fetch("/includes/footer.html");

        footerContainer.innerHTML = await footer.text();

    }

    initialiseHeader();

}

loadIncludes();


/*==================================================
    INITIALISE HEADER
==================================================*/

function initialiseHeader() {

    const menu = document.getElementById("mobileMenu");

    if (!menu) return;

    /* Active Menu */

    const current = window.location.pathname.split("/").pop() || "index.html";

    menu.querySelectorAll("a").forEach(link => {

        if (link.getAttribute("href") === current) {

            link.classList.add("active");

        }

        /* Close menu after click */

        link.addEventListener("click", () => {

            menu.classList.remove("show");

        });

    });

}


/*==================================================
    MOBILE MENU
==================================================*/

function toggleMenu() {

    const menu = document.getElementById("mobileMenu");

    if (menu) {

        menu.classList.toggle("show");

    }

}
