import "./style.css";
import { Home } from "./pages/Home/Home";
import { Projects } from "./pages/Projects/Projects";
import { AboutMe } from "./pages/AboutMe/AboutMe";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Divider } from "./components/Divider/Divider";
import { changeTheme } from "./components/Navbar/Navbar";
import { linkPage } from "./utils/linkPage";

const header = document.querySelector("header");
header.innerHTML = Navbar();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();

linkPage("#homelink", Home);
linkPage("#projectslink", Projects);
linkPage("#Aboutlink", AboutMe);

Home();

changeTheme();

footer.insertAdjacentHTML("beforebegin", Divider());