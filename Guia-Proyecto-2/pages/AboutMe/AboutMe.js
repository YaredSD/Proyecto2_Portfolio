import "./AboutMe.css";
import { Divider } from "../../components/Divider/Divider";
import { cleanPage } from "../../utils/cleanPage";

export const AboutMe = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="AboutMe">
    <p>Bienvenido a mi portfolio personal</p>
    <h1>Conóceme algo más</h1>
    <p>Como ya habrás visto en el apartado Home, soy un estudiante de Desarrollo de Aplicaciones Multiplataforma y Máster en Desarrollo Web Full Stack. En la parte inferior podrás encnontrar acceso a algunas de mis redes sociales donde podrás contactarme sin ningún problema.</p>
    <p>Si deseas saber más sobre mi, te recomiendo que visites mi perfil de LinkedIn, donde podrás ver mi experiencia laboral y mis habilidades. También puedes visitar mi perfil de GitHub, donde tengo algunos de mis proyectos personales y colaborativos. Aunque estos ya puedes verlos en el apartado Proyectos.</p>
    <p>También agradezco si me dejas algún comentario en el email que podrás encontrar en el apartado Home. Soy todo oídos y me gustaría saber tu opinión sobre mi portfolio.</p>
    <p>Espero que disfrutes de mi portfolio y que encuentres lo que estás buscando. Si tienes alguna pregunta o comentario, no dudes en contactarme. Estoy aquí para ayudarte.</p>
    </section>`;
};