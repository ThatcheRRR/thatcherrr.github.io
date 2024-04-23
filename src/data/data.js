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
      methodologies: ["Agile", "Scrum"],
      versions: ["Gitlab"],
      atlassian: ["Jira", "Confluence"],
      design: ["Figma"],
      components: ["DHTMLX Gantt, echarts"],
      ide: ["JetBrains WebStorm"],
      utility: ["date-fns", "husky", "dayjs"],
    },
    tasks: {
      en: [
        "Implementation the structure of a project",
        "Initialization of the project (set up Vite, eslint, prettier, and etc.)",
        "Manage a team with 2 developers",
        "Implementation of the custom UI library with Ant Design",
        "Integration DHTMLX Gantt with React",
        "Writing autotests with jest",
        "Taking part in estimation sessions",
        "Holding a demo for the team and customer",
        "Fixing bugs",
      ],
      ru: [
        "Создание структуры проекта",
        "Инициализация проекта (настройка Vite, eslint, prettier, и т.д.)",
        "Создание библиотеки компонентов на основе Ant Design",
        "Управление командой из 2 человека",
        "Интеграция DHTMLX Gantt с React",
        "Написание автотестов с помощью jest",
        "Участие в эстимационных сессиях",
        "Проведение демо команде и заказчику",
        "Правки багов",
      ],
    },
  },
  {
    id: 1,
    title: {
      en: "Development of the system for holding tenders for buying medical equipment and other supplies",
      ru: "Разработка системы для проведения тендеров на закупку медицинского оборудования и прочих принадлежностей",
    },
    period: "04.2022 — 02.2023",
    stack: {
      languages: ["TypeScript"],
      frameworks: ["React"],
      state: ["Redux Toolkit", "Graphql"],
      routing: ["React Router"],
      testing: ["jest"],
      bundlers: ["Vite"],
      ui: ["Ant Design"],
      styling: ["CSS3"],
      formatting: ["eslint", "prettier"],
      markup: ["HTML5"],
      methodologies: ["Agile", "Scrum"],
      versions: ["Gitlab"],
      atlassian: ["Jira", "Confluence"],
      design: ["Figma"],
      components: ["DHTMLX Gantt, echarts"],
      ide: ["JetBrains WebStorm"],
      utility: ["date-fns", "axios", "moment", "casl"],
    },
    tasks: {
      en: [
        "Implementation the structure of a project",
        "Initialization of the project (set up Vite, eslint, prettier, and etc.)",
        "Implementation of the custom UI library with Ant Design",
        "Typing with TypeScript",
        "Writing autotests with jest",
        "Taking part in estimation sessions",
        "Holding a demo for the team and customer",
        "Fixing bugs",
      ],
      ru: [
        "Создание структуры проекта",
        "Инициализация проекта (настройка Vite, eslint, prettier, и т.д.)",
        "Создание библиотеки компонентов на основе Ant Design",
        "Типизация с помощью TypeScript",
        "Написание автотестов с помощью jest",
        "Участие в эстимационных сессиях",
        "Проведение демо команде и заказчику",
        "Правки багов",
      ],
    },
  },
  {
    id: 2,
    title: {
      en: "Development of the system for recording of beverages by locations/stores, sales analysis, reports creation and etc.",
      ru: "Разработка системы для учёта напитков поставщиками по локациям/магазинам, аналитика продаж, создания отчётов и т.д.",
    },
    period: "03.2021 — 03.2024",
    stack: {
      languages: ["TypeScript", "JavaScript"],
      frameworks: ["React", "jQuery"],
      state: ["Redux Toolkit (redux-thunk, redux-saga)", "rtk-query", "MobX"],
      routing: ["React Router"],
      testing: ["jest"],
      bundlers: ["Webpack"],
      ui: ["MaterialUI"],
      styling: ["CSS3", "SASS/SCSS", "bootstrap"],
      formatting: ["eslint", "prettier"],
      markup: ["HTML5"],
      methodologies: ["Agile", "Scrum"],
      versions: ["Gitlab"],
      atlassian: ["Jira", "Confluence"],
      design: ["Figma", "InVision"],
      components: ["charts.js"],
      ide: ["JetBrains WebStorm"],
      utility: ["date-fns", "husky", "moment", "axios", "dayjs", "lodash", "InSomnia"],
    },
    tasks: {
      en: [
        "Implementation the structure of a project",
        "Initialization of the project (set up Webpack, eslint, prettier, and etc.)",
        "Transfer project from jQuery to React",
        "Typing with TypeScript",
        "Implementation of the custom UI library with MaterialUI",
        "Writing autotests with jest",
        "Taking part in estimation sessions",
        "Holding a demo for the team",
        "Fixing bugs",
      ],
      ru: [
        "Создание структуры проекта",
        "Инициализация проекта (настройка Webpack, eslint, prettier, и т.д.)",
        "Перенос проекта с jQuery на React",
        "Типизация с помощью TypeScript",
        "Создание библиотеки компонентов на основе MaterialUI",
        "Написание автотестов с помощью jest",
        "Участие в эстимационных сессиях",
        "Проведение демо команде",
        "Правки багов",
      ],
    },
  },
  {
    id: 3,
    title: {
      en: "Development of the system for recording of equipment at the factory and analytics a necessity of providing repair/renovation of equipment",
      ru: "Разработка системы для учёта состояния оборудования на препдприятии и аналитика необходимости проведения ремонтых работ/обновления оборудования",
    },
    period: "06.2021 — 03.2022",
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
      methodologies: ["Agile", "Scrum"],
      versions: ["Gitlab"],
      atlassian: ["Jira", "Confluence"],
      design: ["Figma", "InVision"],
      components: ["react-select", "react-table"],
      ide: ["JetBrains WebStorm"],
      utility: ["moment", "husky"],
    },
    tasks: {
      en: [
        "Implementation of several new and updating old component with Carbon Design",
        "Writing autotests with jest",
        "Taking part in estimation sessions",
        "Holding a demo for the team",
        "Fixing bugs",
      ],
      ru: [
        "Создание нескольких новых и обновление старых компонентов на основе Carbon Design",
        "Написание автотестов с помощью jest",
        "Участие в эстимационных сессиях",
        "Проведение демо команде",
        "Правки багов",
      ],
    },
  },
  {
    id: 4,
    title: {
      en: "Development of the system for calling a doctor at home, providing payments, filling medical documents",
      ru: "Разработка системы для вызова доктора на дом, проведение оплаты, заполнение медицинских документов",
    },
    period: "03.2020 — 06.2021",
    stack: {
      languages: ["TypeScript", "JavaScript"],
      frameworks: ["React"],
      state: ["Redux (redux-thunk)", "Redux Toolkit"],
      routing: ["React Router"],
      testing: ["—"],
      bundlers: ["Webpack"],
      ui: ["MaterialUI"],
      styling: ["CSS3", "SASS/SCSS", "bootstrap"],
      formatting: ["eslint", "prettier"],
      markup: ["HTML5"],
      methodologies: ["Agile", "Scrum"],
      versions: ["Gitlab"],
      atlassian: ["Jira", "Confluence"],
      design: ["Figma", "Photoshop"],
      components: ["react-select", "react-table"],
      ide: ["JetBrains WebStorm"],
      utility: ["moment", "axios"],
    },
    tasks: {
      en: [
        "Implementation the structure of a project",
        "Initialization of the project (set up Webpack, eslint, prettier, and etc.)",
        "Typing with TypeScript",
        "Implementation of the custom UI library with MaterialUI",
        "Writing autotests with jest",
        "Taking part in estimation sessions",
        "Holding a demo for the team and customer",
        "Fixing bugs",
      ],
      ru: [
        "Создание структуры проекта",
        "Инициализация проекта (настройка Webpack, eslint, prettier, и т.д.)",
        "Типизация с помощью TypeScript",
        "Создание библиотеки компонентов на основе MaterialUI",
        "Написание автотестов с помощью jest",
        "Участие в эстимационных сессиях",
        "Проведение демо команде и заказчику",
        "Правки багов",
      ],
    },
  },
  {
    id: 5,
    title: {
      en: "Development of the system for managing assets",
      ru: "Разработка системы для управления ресурсами компании",
    },
    period: "11.2023 — 04.2024",
    stack: {
      languages: ["TypeScript", "JavaScript"],
      frameworks: ["NativeScript"],
      state: ["—"],
      routing: ["—"],
      testing: ["—"],
      bundlers: ["Webpack"],
      ui: ["—"],
      styling: ["CSS3"],
      formatting: ["eslint", "prettier", "SonarQube"],
      markup: ["—"],
      methodologies: ["Agile", "Scrum"],
      versions: ["Github"],
      atlassian: ["Jira", "Confluence"],
      design: ["Figma"],
      components: ["—"],
      ide: ["Visual Studio Code"],
      utility: ["moment"],
    },
    tasks: {
      en: [
        "Typing with TypeScript",
        "Writing autotests with jest",
        "Taking part in estimation sessions",
        "Holding a demo for the team",
        "Fixing bugs",
      ],
      ru: [
        "Типизация с помощью TypeScript",
        "Написание автотестов с помощью jest",
        "Участие в эстимационных сессиях",
        "Проведение демо команде",
        "Правки багов",
      ],
    },
  },
  {
    id: 6,
    title: {
      en: "Development of the system for hiring",
      ru: "Разработка системы для найма сотрудников",
    },
    period: "01.2022 — 03.2024",
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
      methodologies: ["Agile", "Kanban"],
      versions: ["Github"],
      atlassian: ["Jira", "Confluence"],
      design: ["—"],
      components: ["—"],
      ide: ["Visual Studio Code"],
      utility: ["axios", "Postman", "JWT Token"],
    },
    tasks: {
      en: [
        "Implementation the structure of a project",
        "Initialization of the project (set up Webpack, eslint, prettier, and etc.)",
        "Integration with third-party API",
        "Taking part in estimation sessions",
        "Holding a demo for the team",
        "Fixing bugs",
      ],
      ru: [
        "Создание структуры проекта",
        "Инициализация проекта (настройка Webpack, eslint, prettier, и т.д.)",
        "Интеграция со сторонним API",
        "Участие в эстимационных сессиях",
        "Проведение демо команде",
        "Правки багов",
      ],
    },
  },
];
