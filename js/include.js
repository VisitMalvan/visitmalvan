async function loadIncludes() {

const header = await fetch('/includes/header.html');
const headerHTML = await header.text();
document.getElementById("header").innerHTML = headerHTML;

const footer = await fetch('/includes/footer.html');
const footerHTML = await footer.text();
document.getElementById("footer").innerHTML = footerHTML;

}

loadIncludes();
