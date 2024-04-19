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

export const links = {
  en: [
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Portfolio",
      path: "/portfolio",
    },
  ],
  ru: [
    {
      label: "Обо мне",
      path: "/about",
    },
    {
      label: "Портфолио",
      path: "/portfolio",
    },
  ],
};

export const contacts = [
  {
    title: "Telegram",
    link: "https://t.me/ThatcheRRR",
    image: faTelegram,
  },
  {
    title: "Github",
    link: "https://github.com/ThatcheRRR",
    image: faGithubAlt,
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/pavel-osipau-a25774155/",
    image: faLinkedin,
  },
];

export const portfolio = [
  {
    id: 0,
    title: "RSS Schedule",
    stack: ["React", "Redux", "Ant Design", "Yandex Geocoder API", "Mapbox API"],
    image: {
      full: scheduleFull,
      small: scheduleSmall,
    },
    deploy: "https://schedule-team20.netlify.app/",
    repo: "https://github.com/React-team-20/schedule",
  },
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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

export const experience = [
  {
    id: 0,
    title: {
      en: "Development of the system for planning repair of equipment on a factory and appointment employees on ongoing works",
      ru: "Разработка системы для проведения графика ремонтов оборудования на предприятии и назначения персонала на проводимые работы",
    },
    period: "03.2023 — 04.2024",
    stack: {
      languages: ["TypeScript"],
      frameworks: ["React"],
      state: ["Redux Toolkit", "rtk-query"],
      routing: ["React Router"],
      testing: ["jest"],
      bundlers: ["Vite"],
      ui: ["Ant Design"],
      styling: ["CSS3"],
      formatting: ["eslint", "prettier"],
      markup: ["HTML5"],
      methodologies: ["Agile"],
      versions: ["Gitlab"],
      atlassian: ["Jira", "Confluence"],
      design: ["Figma"],
      components: ["DHTMLX Gantt, echarts"],
      ide: ["JetBrains WebStorm"],
      utility: ["date-fns", "husky", "dayjs"],
    },
    tasks: {
      en: [""],
      ru: [""],
    },
  },
  {
    id: 1,
    title: {
      en: "Development of the system for holding tenders for buying medical equipment and other supplies",
      ru: "Разработка системы для проведения тендеров на закупку медицинского оборудования и прочих принадлежностей",
    },
    period: "05.2022 — 02.2023",
    stack: {
      languages: ["TypeScript"],
      frameworks: ["React"],
      state: ["Redux Toolkit"],
      routing: ["React Router"],
      testing: ["jest"],
      bundlers: ["Vite"],
      ui: ["Ant Design"],
      styling: ["CSS3"],
      formatting: ["eslint", "prettier"],
      markup: ["HTML5"],
      methodologies: ["Agile"],
      versions: ["Gitlab"],
      atlassian: ["Jira", "Confluence"],
      design: ["Figma"],
      components: ["DHTMLX Gantt, echarts"],
      ide: ["JetBrains WebStorm"],
      utility: ["date-fns", "axios", "moment"],
    },
    tasks: {
      en: [""],
      ru: [""],
    },
  },
  {
    id: 2,
    title: {
      en: "Development of the system for recording of beverages by locations/stores, sales analysis, reports creation and etc.",
      ru: "Разработка системы для учёта напитков поставщиками по локациям/магазинам, аналитика продаж, создания отчётов и т.д.",
    },
    period: "—",
    stack: {
      languages: ["TypeScript", "JavaScript"],
      frameworks: ["React", "jQuery"],
      state: ["Redux Toolkit (redux-thunk, redux-saga)", "rtk-query"],
      routing: ["React Router"],
      testing: ["jest"],
      bundlers: ["Webpack"],
      ui: ["—"],
      styling: ["CSS3", "SASS/SCSS", "bootstrap"],
      formatting: ["eslint", "prettier"],
      markup: ["HTML5"],
      methodologies: ["Agile"],
      versions: ["Gitlab"],
      atlassian: ["Jira", "Confluence"],
      design: ["Figma", "InVision"],
      components: ["charts.js"],
      ide: ["JetBrains WebStorm"],
      utility: ["date-fns", "husky", "moment", "axios"],
    },
    tasks: {
      en: [""],
      ru: [""],
    },
  },
  {
    id: 3,
    title: {
      en: "Development of the system for hiring",
      ru: "Разработка системы для найма сотрудников",
    },
    period: "—",
    stack: {
      languages: ["JavaScript"],
      frameworks: ["Nodejs", "Express"],
      state: ["—"],
      routing: ["—"],
      testing: ["—"],
      bundlers: ["Webpack"],
      ui: ["—"],
      styling: ["—"],
      formatting: ["eslint", "prettier"],
      markup: ["—"],
      methodologies: ["Kanban"],
      versions: ["Github"],
      atlassian: ["Jira", "Confluence"],
      design: ["—"],
      components: ["—"],
      ide: ["Visual Studio Code"],
      utility: ["axios"],
    },
    tasks: {
      en: [""],
      ru: [""],
    },
  },
  {
    id: 4,
    title: {
      en: "Development of the system for recording of equipment at the factory and analytics a necessity of providing repair/renovation of equipment",
      ru: "Разработка системы для учёта состояния оборудования на препдприятии и аналитика необходимости проведения ремонтых работ/обновления оборудования",
    },
    period: "—",
    stack: {
      languages: ["TypeScript", "JavaScript"],
      frameworks: ["React"],
      state: ["Redux (redux-thunk)"],
      routing: ["React Router"],
      testing: ["—"],
      bundlers: ["Webpack"],
      ui: ["Carbon Design"],
      styling: ["CSS3", "SASS/SCSS"],
      formatting: ["eslint", "prettier"],
      markup: ["HTML5"],
      methodologies: ["Agile"],
      versions: ["Gitlab"],
      atlassian: ["Jira", "Confluence"],
      design: ["Figma", "InVision"],
      components: ["react-select", "react-table"],
      ide: ["JetBrains WebStorm"],
      utility: ["moment", "husky"],
    },
    tasks: {
      en: [""],
      ru: [""],
    },
  },
  {
    id: 5,
    title: {
      en: "Development of the system for calling a doctor at home, providing payments, filling medical documents",
      ru: "Разработка системы для вызова доктора на дом, проведение оплаты, заполнение медицинских документов",
    },
    period: "11.2020 — 06.2021",
    stack: {
      languages: ["TypeScript", "JavaScript"],
      frameworks: ["React"],
      state: ["Redux (redux-thunk)", "Redux Toolkit"],
      routing: ["React Router"],
      testing: ["—"],
      bundlers: ["Webpack"],
      ui: ["—"],
      styling: ["CSS3", "SASS/SCSS"],
      formatting: ["eslint", "prettier"],
      markup: ["HTML5"],
      methodologies: ["Agile"],
      versions: ["Gitlab"],
      atlassian: ["Jira", "Confluence"],
      design: ["Figma", "Photoshop"],
      components: ["react-select", "react-table"],
      ide: ["JetBrains WebStorm"],
      utility: ["moment", "axios"],
    },
    tasks: {
      en: [""],
      ru: [""],
    },
  },
];
