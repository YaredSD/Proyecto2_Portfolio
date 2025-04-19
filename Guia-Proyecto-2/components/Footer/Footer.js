import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Social</h2>
<div>
${Button("/icons/X.jpg", "X/Twitter")}
${Button("/icons/github.jpeg", "GitHub")}
${Button("/icons/linkedin.jpeg", "LinkedIn")}
${Button("/icons/link.jpeg", "Telegram")}
</div>
`;