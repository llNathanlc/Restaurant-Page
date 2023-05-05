import {
  elementScrollFunction,
  isElementInViewport,
} from "../functions/scroll";
import img from "../resources/chef.png";
import entrance from "../resources/entrance.png";

const home = (() => {
  const middle = document.createElement("div");
  middle.id = "middle";

  const welcome = document.createElement("div");
  welcome.id = "welcome";

  const cards = document.createElement("div");
  cards.id = "cards";

  const cardOne = document.createElement("div");
  cardOne.classList.add("fadeoutleft");
  cardOne.classList.add("card");
  cardOne.id = "cardOne";
  cardOne.textContent = "Experience gourmet burgers and culinary craftsmanship";

  const cardTwo = document.createElement("div");
  cardTwo.textContent =
    "Indulge in extraordinary, passionately crafted burgers";
  cardTwo.classList.add("card");
  cardTwo.id = "cardTwo";
  cardTwo.classList.add("fadeoutright");

  const text = document.createElement("div");
  text.id = "text";

  const slideImg = document.createElement("div");
  slideImg.id = "slideImg";

  const paragraph = document.createElement("p");
  paragraph.classList.add("pre-wrap");
  paragraph.id = "welcomeMessage";
  paragraph.textContent =
    "Welcome to The Patty Palace! Your ultimate destination for mouthwatering, juicy burgers crafted with passion and perfection!";

  const textTitle = document.createElement("p");
  textTitle.id = "textTitle";
  textTitle.textContent = "QUALITY, INNOVATION, AMBIANCE";

  const chefDiv = document.createElement("div");
  chefDiv.id = "chefDiv";

  const chefTitle = document.createElement("p");
  chefTitle.id = "chefTitle";
  chefTitle.textContent = "MEET OUR MASTERMIND: HEAD CHEF BOB";

  const chefWrapper = document.createElement("div");
  chefWrapper.id = "chefWrapper";

  const chef = document.createElement("img");
  chef.id = "chef";
  chef.src = img;

  const chefBackground = document.createElement("p");
  chefBackground.id = "chefBackground";
  chefBackground.classList.add("pre-wrap");
  chefBackground.textContent =
    "Born in Tuscany, Italy, Bob discovered his passion for cooking in his grandmother's kitchen. At 15, he began his culinary journey as an apprentice in a local restaurant, later attending the renowned Le Cordon Bleu in Paris. Mastering techniques and exploring global flavors, Bob honed his skills in top restaurants across Europe, Asia, and the U.S. \n\nIn 2008, Bob returned to Italy as head chef at The Patty Palace, where his innovative vision for gourmet burgers earned acclaim from food critics and guests alike. \n\nToday, his extraordinary talent and dedication continue to shape The Patty Palace's culinary excellence, creating unforgettable dining experiences with every dish.";

  const chefText = document.createElement("div");
  chefText.id = "chefText";
  chefText.textContent = "Bob, Head Chef at The Patty Palace";

  const textParagraph = document.createElement("p");
  textParagraph.id = "textParagraph";
  textParagraph.classList.add("pre-wrap");
  textParagraph.textContent =
    "The Patty Palace has been serving the finest gourmet burgers since its inception in 2008. Founded by passionate food enthusiasts and culinary artists, our restaurant is dedicated to delivering a truly unique dining experience. \n\nOur skilled chefs pride themselves on crafting the perfect burger using only the highest quality, locally-sourced ingredients, and employing innovative cooking techniques to create an unmatched taste sensation. \n\nThe Patty Palace's warm and inviting ambiance, with its contemporary yet rustic design, makes it the ideal destination for friends and families to gather, celebrate, and indulge in a memorable gastronomic adventure.";

  const slideImgTwo = document.createElement("div");
  slideImgTwo.id = "slideImgTwo";

  const slideImgTwoWrapper = document.createElement("div");
  slideImgTwoWrapper.id = "slideImgTwoWrapper";

  const slideImgTwoTitle = document.createElement("div");
  slideImgTwoTitle.id = "slideImgTwoTitle";
  slideImgTwoTitle.textContent = "THE ART OF GOURMET BURGERS";

  const slideImgTwoText = document.createElement("p");
  slideImgTwoText.id = "slideImgTwoText";
  slideImgTwoText.classList.add("pre-wrap");
  slideImgTwoText.textContent =
    "At The Patty Palace, our burgers are lovingly handcrafted by our skilled culinary team, who pour their heart and soul into every creation. We begin with selecting the finest, locally-sourced ingredients, ensuring the ultimate freshness and quality. \n\nOur succulent patties are made from prime cuts of meat, seasoned to perfection, and grilled to a tender and juicy finish. Each burger is adorned with a thoughtful combination of vibrant toppings and house-made sauces, designed to tantalize your taste buds and elevate the flavors to new heights. \n\nFinally, our artisan buns, freshly baked in-house, are the crowning glory that brings each masterpiece together. The result is a harmonious symphony of textures and flavors, making every bite of our burgers a truly unforgettable experience. \n\n ¡Come and try!";

  const textTwo = document.createElement("div");
  textTwo.id = "textTwo";

  const locationWrapper = document.createElement("div");
  locationWrapper.id = "locationWrapper";

  const entranceImg = document.createElement("img");
  entranceImg.id = "entrance";
  entranceImg.src = entrance;

  const textTwoTitle = document.createElement("p");
  textTwoTitle.id = "textTwoTitle";
  textTwoTitle.textContent = "DINE IN A MAJESTIC UBICATION ";

  const textTwoParagraph = document.createElement("p");
  textTwoParagraph.id = "textTwoParagraph";
  textTwoParagraph.classList.add("pre-wrap");
  textTwoParagraph.textContent =
    "Nestled within the enchanting surroundings of an elegant, historic palace, The Patty Palace offers a truly unique dining experience that transcends the ordinary. \n\nThe breathtaking architecture and lush gardens create a serene and magical atmosphere, transporting our guests to a realm where culinary delights and regal ambiance unite. Located in the heart of the city, our majestic venue is easily accessible, yet feels like a hidden gem, offering an exclusive escape from the hustle and bustle of urban life. \n\nThe Patty Palace is more than just a restaurant; it's a destination where memories are forged and cherished, as friends and family gather to indulge in the splendor of fine cuisine and the grandeur of our palatial setting.";

  const content = document.getElementById("content");

  const body = () => {
    const footer = document.getElementById("footer");

    welcome.appendChild(paragraph);
    cards.append(cardOne, cardTwo);
    elementScrollFunction(cardOne, cardTwo);
    chefWrapper.append(chef, chefText);
    chefDiv.append(chefWrapper, chefBackground);
    text.append(textTitle, textParagraph, chefTitle, chefDiv);
    locationWrapper.append(entranceImg, textTwoParagraph);
    textTwo.append(textTwoTitle, locationWrapper);
    slideImgTwoWrapper.append(slideImgTwoTitle, slideImgTwoText);
    slideImgTwo.appendChild(slideImgTwoWrapper);

    middle.append(welcome, cards, slideImg, text, slideImgTwo, textTwo);
    content.insertBefore(middle, footer);

    window.addEventListener("scroll", () => {
      if (isElementInViewport(textTitle)) textTitle.classList.add("fadein");
      if (isElementInViewport(textParagraph))
        textParagraph.classList.add("fadein");
      if (isElementInViewport(chefWrapper)) chefWrapper.classList.add("fadein");
      if (isElementInViewport(chefTitle)) chefTitle.classList.add("fadein");
      if (isElementInViewport(chef)) chef.classList.add("fadein");
      if (isElementInViewport(chefDiv)) chefDiv.classList.add("fadein");
      if (isElementInViewport(chefBackground))
        chefBackground.classList.add("fadein");
      if (isElementInViewport(slideImgTwoTitle))
        slideImgTwoTitle.classList.add("fadein");
      if (isElementInViewport(slideImgTwoText))
        slideImgTwoText.classList.add("fadein");
      if (isElementInViewport(entranceImg)) entranceImg.classList.add("fadein");
      if (isElementInViewport(textTwoTitle))
        textTwoTitle.classList.add("fadein");
      if (isElementInViewport(textTwoParagraph))
        textTwoParagraph.classList.add("fadein");
    });
  };

  return body;
})();

export default home;
