import icon from "../resources/github.jpg";
import home from "./home";
import menu from "./menu";
import contact from "./contact";
import part from "./header";

const footerCreate = (() => {
  const githubIcon = document.createElement("img");
  githubIcon.id = "githubIcon";
  githubIcon.src = icon;
  const githubLink = document.createElement("a");
  githubLink.id = "githubLink";
  githubLink.setAttribute("href", "https://www.github.com/llnathanlc/");

  const footerWrapper = document.createElement("div");
  footerWrapper.id = "footerWrapper";

  const leftFooter = document.createElement("div");
  leftFooter.classList.add("footDiv");

  const leftFooterTitle = document.createElement("p");
  leftFooterTitle.classList.add("footTitle");
  leftFooterTitle.textContent = "The Patty Palace";

  const leftFooterHorary = document.createElement("p");
  leftFooterHorary.id = "leftFooterHorary";
  leftFooterHorary.classList.add("pre-wrap");
  leftFooterHorary.textContent =
    "Monday to Sunday\n\nFrom 12:00 am to 00:00 pm";

  const middleFooter = document.createElement("div");
  middleFooter.classList.add("footDiv");

  const middleFooterTitle = document.createElement("p");
  middleFooterTitle.classList.add("footTitle");
  middleFooterTitle.textContent = "CONTACT US";

  const middleFooterText = document.createElement("p");
  middleFooterText.id = "middleFooterText";
  middleFooterText.classList.add("pre-wrap");
  middleFooterText.textContent =
    "For more information call us\n000 000 000\n\nOr e-mail us at\nthePattyPalace@theodinproject.com\n\nYou can find us at\nWhimsical Plaza, 1234 Fantasy Lane, Dreamsville 56789";

  const rightFooter = document.createElement("div");
  rightFooter.classList.add("footDiv");

  const rightFooterTitle = document.createElement("p");
  rightFooterTitle.classList.add("footTitle");
  rightFooterTitle.textContent = "LINKS";

  const rightFooterText = document.createElement("p");
  rightFooterText.id= "rightFooterText";

  const homeButton = document.createElement('button');
  homeButton.classList.add('clicked');
  const menuButton = document.createElement('button');
  const contactButton = document.createElement('button');

  const logic = (button) => {
    const middle = document.getElementById("middle");
    const content = document.getElementById("content");
    const buttonsHeader = part.navigationStart();
    if (button === homeButton) {
      homeButton.classList.add("clicked");
      menuButton.classList.remove("clicked");
      contactButton.classList.remove("clicked");
      if (button.classList.contains("clicked")) {
        content.removeChild(middle);
        Array.from(buttonsHeader.children)[0].classList.add("selected");
        Array.from(buttonsHeader.children)[1].classList.remove("selected");
        Array.from(buttonsHeader.children)[2].classList.remove("selected");
        home();
      }
    }
    if (button === menuButton) {
      homeButton.classList.remove("clicked");
      menuButton.classList.add("clicked");
      contactButton.classList.remove("clicked");
      if (button.classList.contains("clicked")) {
        content.removeChild(middle);
        Array.from(buttonsHeader.children)[1].classList.add("clicked");
        Array.from(buttonsHeader.children)[0].classList.remove("selected");
        Array.from(buttonsHeader.children)[2].classList.remove("selected");
        menu();
      }
    }
    if (button === contactButton) {
      homeButton.classList.remove("clicked");
      menuButton.classList.remove("clicked");
      contactButton.classList.add("clicked");
      if (button.classList.contains("clicked")) {
        content.removeChild(middle);
        Array.from(buttonsHeader.children)[2].classList.add("selected");
        Array.from(buttonsHeader.children)[0].classList.remove("selected");
        Array.from(buttonsHeader.children)[1].classList.remove("selected");
        contact();
      }
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
  };

  const buttonsLogic = () => {
    homeButton.addEventListener('pointerdown', ()=>{
        logic(homeButton);
    })
    menuButton.addEventListener('pointerdown', ()=>{
        logic(menuButton);
    })
    contactButton.addEventListener('pointerdown', ()=>{
        logic(contactButton);
    })
  }
  const buttonsStart = () => {
    homeButton.classList.add("foot-button");
    homeButton.textContent = "Home";

    menuButton.classList.add("foot-button");
    menuButton.textContent = "Menu";

    contactButton.classList.add("foot-button");
    contactButton.textContent = "Contact";

    buttonsLogic();
    rightFooterText.append(homeButton,menuButton,contactButton);

  }

  const footer = () => {
    const foot = document.createElement("div");
    foot.id = "footer";
    githubLink.append(githubIcon);

    leftFooter.append(leftFooterTitle, leftFooterHorary);
    middleFooter.append(middleFooterTitle, middleFooterText);
    rightFooter.append(rightFooterTitle, rightFooterText);
    buttonsStart();
    footerWrapper.append(leftFooter, middleFooter, rightFooter);

    foot.append(footerWrapper, githubLink);
    return foot;
  };
  return footer;
})();

export default footerCreate;
