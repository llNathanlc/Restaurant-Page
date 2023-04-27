

const home = (() => {
  const middle = document.createElement("div");
  middle.id = "middle";

  const test = document.createElement("div");
  test.textContent = "test1";

  const content = document.getElementById("content");

  const body = () => {
    middle.appendChild(test);
    content.appendChild(middle);
  };

  return body;
})();

export default home;
