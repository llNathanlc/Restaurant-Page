const menu = (() => {
  const middle = document.createElement("div");
  middle.id = "middle";

  const test = document.createElement("div");
  test.textContent = "test2";

  const body = () => {
    const content = document.getElementById("content");
    middle.appendChild(test);
    content.appendChild(middle);
  };
  return body;
})();
export default menu;
