import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Hola, soy</p>
    <h1>Yared Santana</h1>
    <p>Soy un estudiante de Desarrollo de Aplicaciones Multiplataforma y Máster en Desarrollo Web Full Stack. 
    Resido en Las Palmas de Gran Canaria, España. Me gusta crear páginas webs y aplicaciones para dispositivos móviles. 
    En especial me interesa la parte del frontend, aunque no tengo problemas en trabajar en el backend. 
    Me gusta aprender cosas nuevas y mejorar mis habilidades.
    </p>
    <a href="mailto:yared.santana@icloud.com">Contáctame →</a>
    </section>`;
};