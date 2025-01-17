async function loadProfile() {
  const response = await fetch("components/profile.html");
  const profileHtml = await response.text();
  document.getElementById("profile").innerHTML = profileHtml;
}

async function loadNavbar() {
    const response = await fetch("components/navbar.html");
    const navbarHtml = await response.text();
    document.getElementById("navigation-bar").innerHTML = navbarHtml;
  }
  
  async function loadFooter() {
    const response = await fetch("components/footer.html");
    const navbarHtml = await response.text();
    document.getElementById("footer").innerHTML = navbarHtml;
  }

  async function loadMailform() {
    const response = await fetch("components/mailform.html");
    const mailformHtml = await response.text();
    document.getElementById("mailform").innerHTML = mailformHtml;
  }
  
  loadProfile();
  loadNavbar();
  loadFooter();
  loadMailform();
