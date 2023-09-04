import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import CardGame from "./src/components/CardGame";

//$ boa pratica para uso de recurso de tela
const $root = document.querySelector("#root");

const $htmlCardGame = CardGame();

$root.insertAdjacentHTML("beforeend", $htmlCardGame);