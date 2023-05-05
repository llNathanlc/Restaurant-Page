import home from "../components/home";
import part from "../components/header";
import footer from "../components/footer";
import { scroll } from "./scroll";

function loadPage() {
  const content = document.getElementById("content");
  const head = part.header();
  const foot = footer();
  content.appendChild(head);
  content.appendChild(foot);
  home();
  scroll();
}
export default loadPage;
