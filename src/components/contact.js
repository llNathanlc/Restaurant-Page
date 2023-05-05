const contact = (() => {
  const middle = document.createElement("div");
  middle.id = "middle";

  const contactTitle = document.createElement("div");
  contactTitle.id = "contactTitle";
  contactTitle.textContent = "CONTACT";

  const contactMiddle = document.createElement("div");
  contactMiddle.id = "contactMiddle";

  const contactLeft = document.createElement("div");
  contactLeft.classList.add("contactDiv");

  const information = document.createElement("p");
  information.id = "information";
  information.classList.add("pre-wrap");
  information.textContent =
    "Check our horary: \n\nMonday to Sunday\nFrom 12:00 am to 00:00 pm \n\n\nYou can contact us at:\n\nPhone: 000 000 000\nE-mail: thePattyPalace@theodinproject.com";

  const contactRight = document.createElement("div");
  contactRight.id="contactRight";
  contactRight.classList.add("contactDiv");

  const locationText = document.createElement("p");
  locationText.id = "locationText";
  locationText.classList.add("pre-wrap");
  locationText.textContent =
    "We are ubicated at:\n\n Whimsical Plaza, 1234 Fantasy Lane, Dreamsville 56789";
  const mapElem = document.createElement("div");
  mapElem.id = "map";

  function initMap() {
    const mapOptions = {
      center: { lat: -33.860664, lng: 151.208138 },
      zoom: 14,
    };
    const map = new google.maps.Map(mapElem, mapOptions);
    return map;
  }

  window.initMap = initMap;

  const content = document.getElementById("content");

  const body = () => {
    const footer = document.getElementById("footer");

    contactLeft.appendChild(information);
    contactRight.append(locationText,mapElem);
    contactMiddle.append(contactLeft, contactRight);

    middle.append(contactTitle, contactMiddle);
    content.insertBefore(middle, footer);
  };
  return body;
})();

export default contact;
