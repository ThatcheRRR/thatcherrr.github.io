import { faTelegram, faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import gamesostsFull from "./project-assets/gamesosts-full.png";
import gamesostsSmall from "./project-assets/gamesosts-small.png";
import scheduleFull from "./project-assets/schedule-full.png";
import scheduleSmall from "./project-assets/schedule-small.png";
import weatherFull from "./project-assets/weather-full.png";
import weatherSmall from "./project-assets/weather-small.png";
import piskelFull from "./project-assets/piskel-full.png";
import piskelSmall from "./project-assets/piskel-small.png";
import apiFull from "./project-assets/api-full.png";
import apiSmall from "./project-assets/api-small.png";
import todoFull from "./project-assets/todo-full.png";
import todoSmall from "./project-assets/todo-small.png";
import keyboardFull from "./project-assets/keyboard-full.png";
import keyboardSmall from "./project-assets/keyboard-small.png";
import singoloFull from "./project-assets/singolo-full.png";
import singoloSmall from "./project-assets/singolo-small.png";
import paletteFull from "./project-assets/palette-full.png";
import paletteSmall from "./project-assets/palette-small.png";

export const links = ["About", "Portfolio"];

export const contacts = [
  {
    title: "Telegram",
    link: "https://t.me/ThatcheRRR",
    color: "#0088cc",
    image: faTelegram,
  },
  {
    title: "Github",
    link: "https://github.com/ThatcheRRR",
    color: "#333",
    image: faGithubAlt,
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/pavel-osipau-a25774155/",
    color: "#45668e",
    image: faLinkedin,
  },
];

export const portfolio = [
  {
    title: "RSS Schedule (team task)",
    stack: ["React", "Redux", "Ant Design", "Yandex Geocoder API", "Mapbox API"],
    image: {
      full: scheduleFull,
      small: scheduleSmall,
    },
    deploy: "https://schedule-team20.netlify.app/",
    repo: "https://github.com/React-team-20/schedule",
  },
  {
    title: "GamesOSTs quiz",
    stack: ["React", "Redux", "Flex", "Grid", "SCSS"],
    image: {
      full: gamesostsFull,
      small: gamesostsSmall,
    },
    deploy: "https://thatcherrr.github.io/songbird/",
    repo: "https://github.com/ThatcheRRR/songbird",
  },
  {
    title: "Fancy weather",
    stack: ["JavaScript", "SCSS", "Fetch API", "Image API", "Geocode API", "Weather API"],
    image: {
      full: weatherFull,
      small: weatherSmall,
    },
    deploy: "https://thatcherrr.github.io/fancy-weather/",
    repo: "https://github.com/ThatcheRRR/fancy-weather",
  },
  {
    title: "Simple piskel clone",
    stack: ["JavaScript", "Canvas", "SCSS"],
    image: {
      full: piskelFull,
      small: piskelSmall,
    },
    deploy: "https://thatcherrr.github.io/simple-piskel-clone/",
    repo: "https://github.com/ThatcheRRR/simple-piskel-clone",
  },
  {
    title: "Image API",
    stack: ["JavaScript", "Canvas", "Image API"],
    image: {
      full: apiFull,
      small: apiSmall,
    },
    deploy: "https://thatcherrr.github.io/codejam-image-api/",
    repo: "https://github.com/ThatcheRRR/codejam-image-api/tree/codejam-image-api",
  },
  {
    title: "TODO App",
    stack: ["React"],
    image: {
      full: todoFull,
      small: todoSmall,
    },
    deploy: "https://thatcherrr.github.io/todo-task/",
    repo: "https://github.com/ThatcheRRR/todo-task",
  },
  {
    title: "Virtual Keyboard",
    stack: ["JavaScript"],
    image: {
      full: keyboardFull,
      small: keyboardSmall,
    },
    deploy: "https://thatcherrr.github.io/codejam-virtual-keyboard/",
    repo: "https://github.com/ThatcheRRR/codejam-virtual-keyboard/tree/codejam-virtual-keyboard",
  },
  {
    title: "Singolo",
    stack: ["HTML5", "CSS3", "Flex", "Grid"],
    image: {
      full: singoloFull,
      small: singoloSmall,
    },
    deploy: "https://thatcherrr.github.io/singolo/",
    repo: "https://github.com/ThatcheRRR/singolo",
  },
  {
    title: "Palette",
    stack: ["JavaScript", "HTML5", "CSS3", "Flex"],
    image: {
      full: paletteFull,
      small: paletteSmall,
    },
    deploy: "https://thatcherrr.github.io/codejam-palette/",
    repo: "https://github.com/ThatcheRRR/codejam-palette/tree/codejam-palette",
  },
];
