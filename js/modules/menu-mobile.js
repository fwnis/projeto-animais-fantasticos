import outsideClick from "./clickoutside.js";

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector("[data-menu='button']");
    this.menuList = document.querySelector("[data-menu='list']");
    this.activeClass = "active";

    if (events === undefined) this.events = ["click", "touchstart"];
    else this.events = events;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((evento) => {
      this.menuButton.addEventListener("click", this.openMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
