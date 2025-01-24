async function loadProfile() {
  const response = await fetch("components/profile.html");
  const profileHtml = await response.text();
  document.getElementById("profile").innerHTML = profileHtml;
}

async function loadNavbar() {
    const response = await fetch("components/navbar.html");
    const navbarHtml = await response.text();
    document.getElementById("navbar").innerHTML = navbarHtml;
  }
  
  async function loadFooter() {
    const response = await fetch("components/footer.html");
    const navbarHtml = await response.text();
    document.getElementById("footer").innerHTML = navbarHtml;
  }

  loadProfile();
  loadNavbar();
  loadFooter();
