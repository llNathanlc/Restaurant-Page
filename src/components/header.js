import home from "./home";
import menu from "./menu";
import contact from "./contact";

const navigation = (() => {
  const nav = document.createElement("nav");

  const homeButton = document.createElement("button");
  homeButton.classList.add("selected");

  const menuButton = document.createElement("button");

  const contactButton = document.createElement("button");

  const content = document.getElementById("content");

  const headerWrapper = document.createElement("div");
  headerWrapper.id = "headerWrapper";

  const customSelectButton = document.createElement("div");
  customSelectButton.id = "customSelectButton";

  const customSelect = document.createElement("div");
  customSelect.id = "customSelect";

  customSelectButton.addEventListener("pointerdown", () => {
    if (customSelect.style.display === "flex") {
      customSelect.style.display = "none";
    } else {
      customSelect.style.display = "flex";
    }
  });

  const homeButtonClone = homeButton.cloneNode(true);
  homeButtonClone.textContent = "Home";
  homeButtonClone.classList.add("customSelect-button");
  homeButtonClone.classList.remove("nav-button");
  const menuButtonClone = menuButton.cloneNode(true);
  menuButtonClone.textContent = "Menu";
  menuButtonClone.classList.add("customSelect-button");
  menuButtonClone.classList.remove("nav-button");
  const contactButtonClone = contactButton.cloneNode(true);
  contactButtonClone.textContent = "Contact";
  contactButtonClone.classList.add("customSelect-button");
  homeButtonClone.classList.remove("nav-button");

  const logicClone = (button) => {
    const middle = document.getElementById("middle");
    if (button === homeButtonClone) {
      homeButtonClone.classList.add("selected");
      menuButtonClone.classList.remove("selected");
      contactButtonClone.classList.remove("selected");
      if (button.classList.contains("selected")) {
        content.removeChild(middle);
        home();
      }
    }
    if (button === menuButtonClone) {
      homeButtonClone.classList.remove("selected");
      menuButtonClone.classList.add("selected");
      contactButtonClone.classList.remove("selected");
      if (button.classList.contains("selected")) {
        content.removeChild(middle);
        menu();
      }
    }
    if (button === contactButtonClone) {
      homeButtonClone.classList.remove("selected");
      menuButtonClone.classList.remove("selected");
      contactButtonClone.classList.add("selected");
      if (button.classList.contains("selected")) {
        content.removeChild(middle);
        contact();
      }
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const logic = (button) => {
    const middle = document.getElementById("middle");
    if (button === homeButton) {
      homeButton.classList.add("selected");
      menuButton.classList.remove("selected");
      contactButton.classList.remove("selected");
      if (button.classList.contains("selected")) {
        content.removeChild(middle);
        home();
      }
    }
    if (button === menuButton) {
      homeButton.classList.remove("selected");
      menuButton.classList.add("selected");
      contactButton.classList.remove("selected");
      if (button.classList.contains("selected")) {
        content.removeChild(middle);
        menu();
      }
    }
    if (button === contactButton) {
      homeButton.classList.remove("selected");
      menuButton.classList.remove("selected");
      contactButton.classList.add("selected");
      if (button.classList.contains("selected")) {
        content.removeChild(middle);
        contact();
      }
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const buttonsLogic = () => {
    homeButton.addEventListener("pointerdown", () => {
      logic(homeButton);
    });
    homeButton.addEventListener("pointerover", () => {});
    menuButton.addEventListener("pointerdown", () => {
      logic(menuButton);
    });
    contactButton.addEventListener("pointerdown", () => {
      logic(contactButton);
    });
  };
  const navigationStart = () => {
    nav.id = "nav";
    homeButton.classList.add("nav-button");
    homeButton.textContent = "Home";

    menuButton.classList.add("nav-button");
    menuButton.textContent = "Menu";

    contactButton.classList.add("nav-button");
    contactButton.textContent = "Contact";

    buttonsLogic();

    nav.append(homeButton, menuButton, contactButton);

    return nav;
  };

  const customSelectStart = () => {
    homeButtonClone.addEventListener("pointerdown", () => {
      logicClone(homeButtonClone);
    });
    menuButtonClone.addEventListener("pointerdown", () => {
      logicClone(menuButtonClone);
    });
    contactButtonClone.addEventListener("pointerdown", () => {
      logicClone(contactButtonClone);
    });
    customSelect.append(homeButtonClone, menuButtonClone, contactButtonClone);

    return customSelect;
  };

  const name = document.createElement("div");
  name.textContent = "The Patty Palace";
  name.id = "name";

  const header = () => {
    const head = document.createElement("div");
    head.id = "header";

    headerWrapper.append(name, customSelectButton);

    head.append(headerWrapper, navigationStart(), customSelectStart());
    return head;
  };

  return { header, navigationStart, logic };
})();

export default navigation;
