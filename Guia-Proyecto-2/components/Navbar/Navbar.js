import "./Navbar.css";

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    if(document.body.className === "light"){
      document.querySelector('.divider').classList.add('lighter')
    }else{
      document.querySelector('.divider').classList.remove('lighter')
    }
    changeText();
  });
};

export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (themeBtn.innerText === "☀") {
    themeBtn.innerText = "☾";
  } else {
    themeBtn.innerText = "☀";
  }
};

export const Navbar = () => `
<nav>
<h2>Portfolio Personal</h2>
<ul>
    <li>
        <a href="#" id="homelink">Home</a>
    </li>
    <li>
        <a href="#" id="projectslink">Projectos</a>
    </li>
    <li>
    <a href="#" id="Aboutlink">Sobre Mi</a>
    </li>
    <li>
        <button id="themeBtn">☀</button>
    </li>
</ul>
</nav>
`;