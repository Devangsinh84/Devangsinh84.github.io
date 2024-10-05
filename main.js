var MainLoader = {
  Init: function () {
    this.LoadHTML('dvnNavbar', 'Views/NavBar.html');
    this.LoadHTML('dvnProfile', 'Views/Profile.html');
    this.LoadHTML('dvnExperience', 'Views/Experience.html');
    this.LoadHTML('dvnAbout', 'Views/About.html');
    this.LoadHTML('dvnContact', 'Views/Contact.html');
  },

  LoadHTML: async function (elementId, filePath) {
    const response = await fetch(filePath);
    const data = await response.text();
    document.getElementById(elementId).innerHTML = data;
  },

  ToggleMenu: function () {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
}