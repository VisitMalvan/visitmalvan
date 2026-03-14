async function loadIncludes(){

const header = await fetch('/includes/header.html');
document.getElementById("header").innerHTML = await header.text();

const footer = await fetch('/includes/footer.html');
document.getElementById("footer").innerHTML = await footer.text();

}

loadIncludes();async function loadIncludes() {

const header = await fetch('/includes/header.html');
const headerHTML = await header.text();
document.getElementById("header").innerHTML = headerHTML;

const footer = await fetch('/includes/footer.html');
const footerHTML = await footer.text();
document.getElementById("footer").innerHTML = footerHTML;

}

loadIncludes();
