import home from "../components/home";
import header from "../components/header";

function loadPage() {
  const content = document.getElementById("content");
  content.appendChild(header());
  home();
}
export default loadPage;
