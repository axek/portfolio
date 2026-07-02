import type { en } from "@/i18n/messages/en";

export const ru: typeof en = {
  meta: {
    description: "Портфолио: кейсы, скриншоты и ссылки на живые продукты.",
  },
  nav: {
    work: "Работы",
    pricing: "Цены",
    contact: "Контакты",
    homeAria: "axek designs — главная",
  },
  lang: {
    en: "EN",
    ru: "RU",
    switchAria: "Переключить язык",
  },
  home: {
    eyebrow: "Избранное",
    title: "Проекты, продукты и интерфейсы, доставленные клиентам за последние полгода.",
    subtitle:
      "У каждого проекта — своя страница: что это, как выглядит и где посмотреть вживую.",
    ctaPrimary: "Написать",
    ctaSecondary: "Смотреть работы",
    projectsSrOnly: "Список проектов",
    mailtoSubject: "Проект",
  },
  background: {
    eyebrow: "Бэкграунд",
    title: "Что я делал до недавних клиентских проектов.",
    chapters: [
      {
        id: "poap",
        period: "Web3",
        title: "Арт для POAP",
        body:
          "Прежде чем начать вайбкодить продукты и интерфейсы, я рисовал POAP — цифровые бейджи для событий и комьюнити. Мои работы использовали ENS, Ethereum Foundation, Devcon и другие блокчейн-команды.",
        href: "https://collections.poap.xyz/artists/aexek.eth",
        cta: "Открыть коллекцию POAP ↗",
        layout: "circular",
        images: [
          {
            src: "/background/poap/devcon-vi.webp",
            brand: "Devcon",
            alt: "POAP для спикера Devcon VI",
            href: "https://collections.poap.xyz/artists/aexek.eth/drops/141623",
          },
          {
            src: "/background/poap/ens-dao-nyc.webp",
            brand: "ENS",
            alt: "POAP ENS DAO Happy Hour в Нью-Йорке",
            href: "https://collections.poap.xyz/artists/aexek.eth/drops/51988",
          },
          {
            src: "/background/poap/ens-anniversary.webp",
            brand: "ENS",
            alt: "POAP к 6-летию ENS",
            href: "https://collections.poap.xyz/artists/aexek.eth/drops/124819",
          },
          {
            src: "/background/poap/devconnect-quest.webp",
            brand: "Devconnect",
            alt: "POAP Lil Quest Devconnect",
            href: "https://collections.poap.xyz/artists/aexek.eth/drops/214188",
          },
          {
            src: "/background/poap/ens-town-hall.webp",
            brand: "ENS",
            alt: "POAP ENS Town Hall Q3 2022",
            href: "https://collections.poap.xyz/artists/aexek.eth/drops/80977",
          },
          {
            src: "/background/poap/ethcc-speaker.webp",
            brand: "EthCC",
            alt: "POAP для спикера EthCC",
            href: "https://collections.poap.xyz/artists/aexek.eth/drops/141717",
          },
        ],
      },
      {
        id: "winding-tree",
        period: "3 года · главный дизайнер",
        title: "Winding Tree",
        body:
          "До этого три года был главным дизайнером всех продуктов Winding Tree — Glider, ORGiD, win.so и десятки других инструментов. Компания потом закрылась, но все проекты можно посмотреть на GitHub.",
        href: "https://github.com/windingtree",
        cta: "Winding Tree на GitHub ↗",
        layout: "grid",
        images: [
          {
            src: "/background/winding-tree/glider.jpg",
            alt: "Интерфейс travel-платформы Glider",
          },
          {
            src: "/background/winding-tree/website.jpg",
            alt: "Сайт Winding Tree",
          },
          {
            src: "/background/winding-tree/brand.png",
            alt: "Фирменный стиль Winding Tree",
          },
        ],
      },
      {
        id: "valamis",
        period: "3 года · продуктовый дизайнер",
        title: "Valamis",
        body:
          "Продуктовый дизайнер в Valamis — enterprise-платформа для корпоративного обучения. Интерфейсы, сценарии и дизайн-системы для сложного B2B-софта.",
        href: "https://www.valamis.com",
        cta: "valamis.com ↗",
        layout: "grid",
        images: [
          {
            src: "/background/valamis/platform.png",
            alt: "Платформа Valamis",
          },
          {
            src: "/background/valamis/mobile.png",
            alt: "Мобильный интерфейс Valamis",
          },
          {
            src: "/background/valamis/brand.png",
            alt: "Бренд Valamis",
          },
        ],
      },
      {
        id: "graphic",
        period: "Много лет",
        title: "Графический дизайн",
        body:
          "Ещё раньше много лет занимался графическим дизайном — печать, брендинг, типографика, айдентика. Портфолио тех времён до сих пор на Behance.",
        href: "https://www.behance.net/axek",
        cta: "Портфолио на Behance ↗",
        layout: "grid",
        images: [
          {
            src: "/background/behance/villa-vitele.png",
            alt: "Проект Villa Vitele",
          },
          {
            src: "/background/behance/custom-lettering.jpg",
            alt: "Кастомная леттеринг-работа",
          },
          {
            src: "/background/behance/posters.jpg",
            alt: "Постеры Internet-free Day",
          },
        ],
      },
    ],
  },
  pricing: {
    eyebrow: "Цены",
    title: "Как можно работать",
    subtitle: "Точная сумма — от задачи. Напишите, разберёмся.",
    tiers: [
      {
        title: "Попроектно",
        price: "от 50 000₽",
        description: "Одна задача с понятным результатом: дизайн, прототип или конкретная часть продукта.",
      },
      {
        title: "Парт-тайм",
        price: "от 150 000₽ / месяц",
        description: "Несколько дней в неделю в вашей команде — продукт, интерфейсы, фронтенд.",
      },
      {
        title: "Фуллтайм",
        price: "от 250 000₽ / месяц",
        description: "Полная занятость: дизайн и фронтенд на постоянной основе.",
      },
    ],
  },
  footer: {
    contact: "Контакты",
  },
  card: {
    viewCaseStudy: "Подробнее →",
  },
  moreProjects: {
    title: "Ещё проекты",
  },
  caseStudy: {
    back: "← Все проекты",
    overview: "О проекте",
    whatShipped: "Что сделал",
    whatWorkedOn: "Моя часть",
    highlights: "Главное",
    brandIdentity: "Бренд",
    designSystem: "Дизайн-система",
    designLanguage: "Как выглядит",
    stack: "Технологии",
    visualSystem: "Визуальная система",
    volunteerUx: "Волонтёры",
    video: "Видео",
    openStormy: "Открыть stormy.chat",
    brandBook: "Брендбук (PDF)",
    openPlatform: "Открыть платформу",
    openPlatformArrow: "Открыть платформу ↗",
    openDemo: "Открыть демо",
    openDemoArrow: "Открыть демо ↗",
    openStage: "Открыть тестовую админку",
    openStageArrow: "Открыть тестовую админку ↗",
    openFullScreen: "На весь экран ↗",
    openNewTab: "Открыть в новой вкладке →",
    tryBelow: "Попробовать ниже ↓",
    thePlatform: "Платформа",
    whatDemoDoes: "Что внутри демо",
    tryPrototype: "Попробовать",
    powers: "питает",
    knowledgeLayer: "База знаний",
    openBrain: "Открыть brain.stormy.chat ↗",
    talkToStormy: "Поговорить со Stormy",
    liveDemoApp: "Демо · app.stormy.chat",
    livePlatform: "Платформа вживую",
    projectStudio: "Студия проектов · демо",
    liveDemoSolant: "Демо · solant-chi.vercel.app",
    stormy: {
      subtitle: "Забота о пассажирах",
      ctaBody:
        "Как Stormy помогает авиакомпаниям не терять людей, когда рейсы срываются.",
      logoHorizontalColor: "Горизонтальный · цвет",
      logoHorizontalWhite: "Горизонтальный · белый",
      logoVerticalColor: "Вертикальный · цвет",
      logoIconGradient: "Иконка · на градиенте",
      brandProse:
        "В центре — облако с градиентом от красного к фиолетовому. Шрифты спокойные: в аэропорту и так нервно, интерфейс не должен добавлять шума.",
    },
    actum: {
      subtitle: "Платформа для AI-агентов",
      designSystemProse:
        "Тёмный интерфейс, индиго и фиолетовые акценты — тот же стиль, что на actum.cx и в остальных продуктах Actum.",
      ctaBody: "Демо-студия: агенты, сценарии и оркестрация в одном месте.",
      wordmarkDark: "Логотип · на тёмном",
      wordmarkLight: "Логотип · на светлом",
    },
    solant: {
      tagline: "Clarity in acts",
      designLanguageProse:
        "Тёплый кремовый фон, янтарные градиенты и звезда на логотипе — как солнечный свет через жалюзи. Чат для CEO, а не очередная панель с графиками.",
      ctaBody:
        "В демо можно разобрать почту, глянуть финансы, собрать команду на запуск — всё через чат.",
      ctaEmbed:
        "Жми на подсказки, правь черновики, жми «отправить» — всё работает прямо во встроенном окне выше.",
    },
    feed: {
      subtitle: "Волонтёры и питание",
      stackProse:
        "Фронт — React, Refine и Ant Design, бэк — Django. Всё в одном монорепозитории, тесты на Playwright, локально поднимается в Docker. Делали под фестиваль на несколько дней и тысячи волонтёров.",
      ctaBody:
        "Тестовая админка для координаторов Insomnia — волонтёры, питание и учёт приёмов пищи.",
      showcaseIntro:
        "Координаторы живут в двух экранах: список людей и карточка с питанием. Я упростил оба — нормальные фильтры в таблице и календарь, где сразу видно, когда человек на площадке и когда ему положена еда.",
    },
  },
  platform: {
    stormy: {
      intro:
        "Stormy — это не один экран, а связка из двух частей. Brain хранит правила авиакомпании: политики, компенсации, сценарии на случай сбоев. App берёт это и отвечает пассажирам — спокойно, в стиле авиакомпании, без воды.",
      brainDesc:
        "Здесь лежат политики, FAQ и всё, что агент должен знать, прежде чем ответить человеку.",
      appDesc:
        "То, что видит пассажир: чат в привычных каналах, когда рейс задержали или отменили.",
      brainCtaBody:
        "Посмотрите, откуда Stormy берёт ответы — правила, компенсации, готовые формулировки. Всё, что в чате выше, опирается на эту базу.",
      iframeTitle: "Stormy — чат для пассажиров",
    },
    actum: {
      intro:
        "Actum — студия, где собирают AI-агентов и сценарии автоматизации. Ниже — живой кусок платформы: проекты, конструкторы, деплой.",
      companyTitle: "Actum · R&D",
      companyBody:
        "Международная лаборатория в области разговорного и агентного AI. Платформа — и для клиентов, и для своих экспериментов.",
      iframeTitle: "Actum — платформа AI-агентов",
      companySiteBody:
        "Сайт компании — actum.cx. Там же кейсы: fintech, медицина, авиация, крупные корпоративные внедрения.",
      brandEyebrow: "Компания",
      visitActum: "На actum.cx ↗",
      pillars: [
        {
          label: "Агенты",
          title: "Разговорные боты",
          description:
            "Поддержка, продажи, медицина, голос — настраиваешь в одном месте и выкатываешь.",
          examples: ["Поддержка", "Медицина", "Голос", "Продажи"],
        },
        {
          label: "Сценарии",
          title: "Автоматизация по шагам",
          description:
            "Цепочки действий с ветвлением: лиды, документы, HR, путь клиента.",
          examples: ["Скоринг лидов", "Документы", "HR", "Путь клиента"],
        },
        {
          label: "Оркестрация",
          title: "Агенты и сценарии вместе",
          description:
            "Жёсткие сценарии и LLM-агенты в одном проекте — одна кнопка «опубликовать» и понятные ошибки.",
          examples: ["Поддержка + маршрутизация", "Продажи + CRM", "Операции", "Несколько ботов"],
        },
      ],
    },
    solant: {
      demoIntro:
        "Сценарий про CEO Daniel из компании Vela. Можно жать подсказки или писать как обычно — Solant отвечает текстом и карточками: черновик письма, цифры, люди в команде.",
      capabilities: [
        {
          title: "Почта",
          description: "Показывает, что пришло за ночь, и предлагает черновик ответа — прямо в чате.",
          chips: ["Что в почте?", "Черновик ответа", "Отправить"],
        },
        {
          title: "Финансы",
          description: "Краткий отчёт за неделю с цифрами — не выходя из диалога.",
          chips: ["Итоги недели", "Сколько денег осталось", "Где просели"],
        },
        {
          title: "Команда",
          description: "Назначить людей на запуск из карточки в чате.",
          chips: ["Кто на Orion?", "Кто свободен?", "Назначить"],
        },
        {
          title: "Память",
          description: "Помнит контекст сделок и решений между разговорами.",
          chips: ["Сделка Acme", "Что решили?", "Заметки со встречи"],
        },
      ],
      iframeTitle: "Solant — демо",
    },
  },
};
