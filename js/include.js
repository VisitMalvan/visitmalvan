async function loadIncludes() {

  const header = await fetch('/includes/header.html');
  document.getElementById("header").innerHTML = await header.text();

  const footer = await fetch('/includes/footer.html');
  document.getElementById("footer").innerHTML = await footer.text();

}

loadIncludes();
function toggleMenu() {
  var menu = document.getElementById("mobileMenu");
  menu.classList.toggle("active");
}

/* NEW: close menu when a link is clicked */

document.querySelectorAll("#mobileMenu a").forEach(function(link) {
  link.addEventListener("click", function() {
    document.getElementById("mobileMenu").classList.remove("active");
  });
});
