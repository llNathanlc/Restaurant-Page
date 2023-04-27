import home from "./home";
import menu from "./menu";
import about from "./about";

const navigation = (() => {
  const nav = document.createElement("nav");

  const homeButton = document.createElement("button");
  homeButton.classList.add("selected");

  const menuButton = document.createElement("button");

  const aboutButton = document.createElement("button");

  const content = document.getElementById("content");

  const logic = (button) => {
    const middle = document.getElementById("middle");
    if (button === homeButton) {
      homeButton.classList.add("selected");
      menuButton.classList.remove("selected");
      aboutButton.classList.remove("selected");
      if (button.classList.contains("selected")) {
        content.removeChild(middle);
        home();
      }
    }
    if (button === menuButton) {
      homeButton.classList.remove("selected");
      menuButton.classList.add("selected");
      aboutButton.classList.remove("selected");
      if (button.classList.contains("selected")) {
        content.removeChild(middle);
        menu();
      }
    }
    if (button === aboutButton) {
      homeButton.classList.remove("selected");
      menuButton.classList.remove("selected");
      aboutButton.classList.add("selected");
      if (button.classList.contains("selected")) {
        content.removeChild(middle);
        about();
      }
    }
  };

  const buttonsLogic = () => {
    homeButton.addEventListener("pointerdown", () => {
      logic(homeButton);
    });
    homeButton.addEventListener("pointerover", () => {});
    menuButton.addEventListener("pointerdown", () => {
      logic(menuButton);
    });
    aboutButton.addEventListener("pointerdown", () => {
      logic(aboutButton);
    });
  };
  const navigationStart = () => {
    nav.id = "nav";

    homeButton.classList.add("nav-button");
    homeButton.textContent = "Home";

    menuButton.classList.add("nav-button");
    menuButton.textContent = "Menu";

    aboutButton.classList.add("nav-button");
    aboutButton.textContent = "About";

    buttonsLogic();

    nav.append(homeButton, menuButton, aboutButton);

    return nav;
  };

  const header = () => {
    const head = document.createElement("div");
    head.id = "header";

    const name = document.createElement("div");
    name.textContent = "Default";
    name.id = "name";

    head.appendChild(name);
    head.appendChild(navigationStart());
    return head;
  };

  return header;
})();

export default navigation;
