async function loadIncludes() {

  const header = await fetch('/includes/header.html');
  document.getElementById("header").innerHTML = await header.text();

  const footer = await fetch('/includes/footer.html');
  document.getElementById("footer").innerHTML = await footer.text();

}

loadIncludes();
