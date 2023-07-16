class MobileNav{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
       
       
        this.DirectClick = this.directclick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
          link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
        }s`);
        });
    }
    
directclick(){
    console.log(this);
    this.navList.classList.toggle(this.activeClass);
}

addClickEvent(){
    this.mobileMenu.addEventListener("click", this.directclick);
}
init(){
    if(this.mobileMenu){
        this.addClickEvent();
    }
    return this;
}
}

const mobileNav = new MobileNav(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNav.init();