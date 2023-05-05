function scroll() {
  const header = document.getElementById("header");
  const name = document.getElementById("name");
  const navButtons = document.querySelectorAll(".nav-button");
  const customSelectButtons = document.querySelectorAll(".customSelect-button");
  const wrapper = document.getElementById("headerWrapper");
  const button = document.getElementById("customSelectButton");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
      header.classList.add("scrolled");
      name.classList.add("scrolled");
      wrapper.classList.add("scrolled");
      button.classList.add("scrolled");
      Array.from(navButtons).forEach((e) => {
        e.classList.add("navButtonScrolled");
      });
      Array.from(customSelectButtons).forEach((e) => {
        e.classList.add("customSelectButtonScrolled");
      });
    } else {
      header.classList.remove("scrolled");
      name.classList.remove("scrolled");
      wrapper.classList.remove("scrolled");
      button.classList.remove("scrolled");
      Array.from(navButtons).forEach((e) => {
        e.classList.remove("navButtonScrolled");
      });
      Array.from(customSelectButtons).forEach((e) => {
        e.classList.remove("customSelectButtonScrolled");
      });
    }
  });
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function elementScrollFunction(el1, el2) {
  window.addEventListener("scroll", () => {
    if (isElementInViewport(el1)) {
      el1.classList.remove("fadeoutleft");
      el1.classList.add("visibleleft");
      el2.classList.remove("fadeoutright");
      el2.classList.add("visibleright");
    } else {
      el1.classList.remove("visibleleft");
      el1.classList.add("fadeoutleft");
      el2.classList.remove("visibleright");
      el2.classList.add("fadeoutright");
    }
  });
}

export { scroll, elementScrollFunction, isElementInViewport };
