class MobileNav {
    constructor(mobileMenu, navList, navLinks, darkModeButton) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.darkModeButton = document.getElementById(darkModeButton);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
      this.handleDarkModeClick = this.handleDarkModeClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
      });
    }
  
    handleClick() {
      this.toggleNavAndDarkMode();
    }
  
    handleDarkModeClick() {
      this.toggleNavAndDarkMode();
    }
  
    toggleNavAndDarkMode() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
      this.darkModeButton.addEventListener("change", this.handleDarkModeClick);
      this.navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          this.toggleNavAndDarkMode();
        });
      });
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNav = new MobileNav(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
    "chk"
  );
  mobileNav.init();
  