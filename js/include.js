/*==================================================
    VISIT MALVAN
    MAIN JAVASCRIPT
==================================================*/


/*==================================================
    START APPLICATION
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    loadIncludes();

});


/*==================================================
    LOAD HEADER & FOOTER
==================================================*/

async function loadIncludes() {

    try {

        /* ---------- HEADER ---------- */

        const headerContainer = document.getElementById("header");

        if (headerContainer) {

            const response = await fetch("includes/header.html");

            if (!response.ok) {

                throw new Error("Unable to load header.");

            }

            headerContainer.innerHTML = await response.text();

        }


        /* ---------- FOOTER ---------- */

        const footerContainer = document.getElementById("footer");

        if (footerContainer) {

            const response = await fetch("includes/footer.html");

            if (!response.ok) {

                throw new Error("Unable to load footer.");

            }

            footerContainer.innerHTML = await response.text();

        }


        /* ---------- INITIALISE ---------- */

        initialiseHeader();

    }

    catch (error) {

        console.error(error);

    }

}


/*==================================================
    HEADER INITIALISATION
==================================================*/

function initialiseHeader() {

    const menu = document.getElementById("mobileMenu");

    if (!menu) return;

    highlightCurrentPage(menu);

    closeMenuOnClick(menu);

}


/*==================================================
    ACTIVE MENU
==================================================*/

function highlightCurrentPage(menu) {

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    menu.querySelectorAll("a").forEach(link => {

        if (link.getAttribute("href") === currentPage) {

            link.classList.add("active");

        }

    });

}


/*==================================================
    CLOSE MOBILE MENU AFTER CLICK
==================================================*/

function closeMenuOnClick(menu) {

    menu.querySelectorAll("a").forEach(link => {

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


/*==================================================
    CLOSE MENU WHEN CLICKING OUTSIDE
==================================================*/

document.addEventListener("click", function (event) {

    const menu = document.getElementById("mobileMenu");

    const toggle = document.querySelector(".menu-toggle");

    if (!menu || !toggle) return;

    if (
        !menu.contains(event.target) &&
        !toggle.contains(event.target)
    ) {

        menu.classList.remove("show");

    }

});


/*==================================================
    CLOSE MENU ON WINDOW RESIZE
==================================================*/

window.addEventListener("resize", () => {

    if (window.innerWidth > 1100) {

        const menu = document.getElementById("mobileMenu");

        if (menu) {

            menu.classList.remove("show");

        }

    }

});
