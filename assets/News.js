import { c as x, r as d, j as e, L as c } from "./index.js";
import { N as m, F as g } from "./Footer.js";
import { S as h } from "./search.js";
import { C as o } from "./calendar.js";
import { C as p } from "./clock.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const i = x("Eye", [
    [
      "path",
      {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
        key: "1nclc0",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ]),
  w = () => {
    const [a, r] = d.useState("all"),
      [l, n] = d.useState(""),
      t = [
        {
          id: "1",
          title: "Гудаута одержал победу над Спартаком в матче 3 лиги",
          excerpt:
            "Футбольный клуб Гудаута выиграл со счетом 2:0 в домашнем матче против Спартака. Голы забили Андрей Попов и Сергей Козлов.",
          content: "Полный текст новости о победе над Спартаком...",
          category: "matches",
          date: "15.05.2024",
          time: "18:30",
          views: 1245,
          image:
            "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=2574&auto=format&fit=crop",
        },
        {
          id: "2",
          title: "Новый тренер присоединился к команде перед важным матчем",
          excerpt:
            "Иван Петров назначен новым главным тренером Гудаута. Он приступит к обязанностям со следующей недели.",
          content: "Полный текст новости о новом тренере...",
          category: "club",
          date: "10.05.2024",
          time: "12:45",
          views: 987,
          image:
            "https://images.unsplash.com/photo-1518164147695-36c13dd568f5?q=80&w=2670&auto=format&fit=crop",
        },
        {
          id: "3",
          title: "Открыт набор в детскую футбольную школу Гудаута",
          excerpt:
            "Футбольный клуб Гудаута объявляет о наборе детей в возрасте от 5 до 12 лет в детскую футбольную школу.",
          content: "Полный текст новости о наборе в футбольную школу...",
          category: "academy",
          date: "05.05.2024",
          time: "10:15",
          views: 567,
          image:
            "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2574&auto=format&fit=crop",
        },
        {
          id: "4",
          title: "Гудаута подписал контракт с перспективным нападающим",
          excerpt:
            "Александр Новиков присоединился к нашей команде. 22-летний нападающий подписал контракт на три года.",
          content: "Полный текст новости о новом игроке...",
          category: "transfers",
          date: "01.05.2024",
          time: "14:20",
          views: 1532,
          image:
            "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?q=80&w=2787&auto=format&fit=crop",
        },
        {
          id: "5",
          title: "Обзор матча Гудаута - Локомотив",
          excerpt:
            "Представляем вашему вниманию полный обзор матча с Локомотивом, который состоялся в рамках чемпионата города.",
          content: "Полный текст обзора матча с Локомотивом...",
          category: "matches",
          date: "28.04.2024",
          time: "09:30",
          views: 854,
          image:
            "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2670&auto=format&fit=crop",
        },
        {
          id: "6",
          title: "Изменения в расписании тренировок юношеской команды",
          excerpt:
            "Внимание! С 1 июня изменяется расписание тренировок для юношеской команды 2010-2011 годов рождения.",
          content: "Полный текст новости об изменении расписания...",
          category: "academy",
          date: "25.04.2024",
          time: "11:40",
          views: 423,
          image:
            "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2670&auto=format&fit=crop",
        },
      ].filter(
        (s) =>
          !(
            (a !== "all" && s.category !== a) ||
            (l &&
              !s.title.toLowerCase().includes(l.toLowerCase()) &&
              !s.excerpt.toLowerCase().includes(l.toLowerCase()))
          )
      );
    return e.jsxs("div", {
      className: "min-h-screen flex flex-col",
      children: [
        e.jsx(m, {}),
        e.jsxs("main", {
          className: "flex-grow pt-16 page-transition",
          children: [
            e.jsxs("div", {
              className: "relative bg-fc-green text-white py-16",
              children: [
                e.jsx("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-r from-fc-green/90 to-fc-darkGreen/80",
                  style: {
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundBlendMode: "overlay",
                  },
                }),
                e.jsx("div", {
                  className:
                    "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                  children: e.jsxs("div", {
                    className: "flex flex-col items-center text-center",
                    children: [
                      e.jsx("h1", {
                        className: "text-4xl font-bold mb-4",
                        children: "Новости",
                      }),
                      e.jsx("p", {
                        className: "max-w-2xl text-white/80 text-lg",
                        children:
                          "Будьте в курсе последних событий из жизни футбольного клуба Гудаута",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            e.jsx("section", {
              className:
                "py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-gray-200",
              children: e.jsxs("div", {
                className: "flex flex-col md:flex-row justify-between gap-4",
                children: [
                  e.jsxs("div", {
                    className: "flex flex-wrap gap-2",
                    children: [
                      e.jsx("button", {
                        onClick: () => r("all"),
                        className: `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          a === "all"
                            ? "bg-fc-green text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`,
                        children: "Все новости",
                      }),
                      e.jsx("button", {
                        onClick: () => r("matches"),
                        className: `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          a === "matches"
                            ? "bg-fc-green text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`,
                        children: "Матчи",
                      }),
                      e.jsx("button", {
                        onClick: () => r("club"),
                        className: `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          a === "club"
                            ? "bg-fc-green text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`,
                        children: "Клуб",
                      }),
                      e.jsx("button", {
                        onClick: () => r("transfers"),
                        className: `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          a === "transfers"
                            ? "bg-fc-green text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`,
                        children: "Трансферы",
                      }),
                      e.jsx("button", {
                        onClick: () => r("academy"),
                        className: `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          a === "academy"
                            ? "bg-fc-green text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`,
                        children: "Академия",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "relative mt-4 md:mt-0",
                    children: [
                      e.jsx(h, {
                        className:
                          "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",
                        size: 18,
                      }),
                      e.jsx("input", {
                        type: "text",
                        placeholder: "Поиск новостей...",
                        value: l,
                        onChange: (s) => n(s.target.value),
                        className:
                          "pl-10 pr-4 py-2 w-full md:w-72 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-fc-green/50",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx("section", {
              className: "py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",
              children:
                t.length === 0
                  ? e.jsxs("div", {
                      className: "text-center py-12",
                      children: [
                        e.jsx("p", {
                          className: "text-gray-500 mb-4",
                          children: "По вашему запросу не найдено новостей",
                        }),
                        e.jsx("button", {
                          onClick: () => {
                            n(""), r("all");
                          },
                          className:
                            "px-4 py-2 bg-fc-green text-white rounded-md hover:bg-fc-darkGreen transition-colors",
                          children: "Сбросить фильтры",
                        }),
                      ],
                    })
                  : e.jsxs("div", {
                      className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                      children: [
                        e.jsx("div", {
                          className: "lg:col-span-2",
                          children: e.jsx(c, {
                            to: `/news/${t[0].id}`,
                            className:
                              "group block rounded-xl overflow-hidden shadow-sm border border-gray-200 card-hover",
                            children: e.jsxs("div", {
                              className:
                                "relative aspect-video overflow-hidden",
                              children: [
                                e.jsx("img", {
                                  src: t[0].image,
                                  alt: t[0].title,
                                  className:
                                    "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                                }),
                                e.jsx("div", {
                                  className:
                                    "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70",
                                }),
                                e.jsxs("div", {
                                  className: "absolute bottom-6 left-6 right-6",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center text-white text-sm mb-2",
                                      children: [
                                        e.jsx(o, {
                                          size: 14,
                                          className: "mr-2",
                                        }),
                                        e.jsx("span", { children: t[0].date }),
                                        e.jsx("span", {
                                          className: "mx-2",
                                          children: "•",
                                        }),
                                        e.jsx(p, {
                                          size: 14,
                                          className: "mr-2",
                                        }),
                                        e.jsx("span", { children: t[0].time }),
                                      ],
                                    }),
                                    e.jsx("h3", {
                                      className:
                                        "text-white text-2xl font-bold mb-2",
                                      children: t[0].title,
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-white/80 line-clamp-2 mb-4",
                                      children: t[0].excerpt,
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center justify-between",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs",
                                          children:
                                            t[0].category === "matches"
                                              ? "Матчи"
                                              : t[0].category === "club"
                                              ? "Клуб"
                                              : t[0].category === "transfers"
                                              ? "Трансферы"
                                              : "Академия",
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "flex items-center text-white text-sm",
                                          children: [
                                            e.jsx(i, {
                                              size: 14,
                                              className: "mr-2",
                                            }),
                                            e.jsx("span", {
                                              children: t[0].views,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                        e.jsx("div", {
                          className: "lg:col-span-1 space-y-6",
                          children: t
                            .slice(1, 4)
                            .map((s) =>
                              e.jsx(
                                c,
                                {
                                  to: `/news/${s.id}`,
                                  className:
                                    "group block rounded-xl overflow-hidden shadow-sm border border-gray-200 card-hover",
                                  children: e.jsxs("div", {
                                    className:
                                      "flex flex-col sm:flex-row lg:flex-col",
                                    children: [
                                      e.jsx("div", {
                                        className: "sm:w-1/3 lg:w-full",
                                        children: e.jsxs("div", {
                                          className:
                                            "relative aspect-video overflow-hidden",
                                          children: [
                                            e.jsx("img", {
                                              src: s.image,
                                              alt: s.title,
                                              className:
                                                "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                                            }),
                                            e.jsx("div", {
                                              className:
                                                "absolute top-2 left-2",
                                              children: e.jsx("span", {
                                                className:
                                                  "px-2 py-1 bg-white/80 backdrop-blur-sm rounded-full text-fc-green text-xs font-medium",
                                                children:
                                                  s.category === "matches"
                                                    ? "Матчи"
                                                    : s.category === "club"
                                                    ? "Клуб"
                                                    : s.category === "transfers"
                                                    ? "Трансферы"
                                                    : "Академия",
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                      e.jsxs("div", {
                                        className: "p-4 sm:w-2/3 lg:w-full",
                                        children: [
                                          e.jsxs("div", {
                                            className:
                                              "flex items-center text-gray-500 text-xs mb-2",
                                            children: [
                                              e.jsx(o, {
                                                size: 12,
                                                className: "mr-1",
                                              }),
                                              e.jsx("span", {
                                                children: s.date,
                                              }),
                                              e.jsx("span", {
                                                className: "mx-1",
                                                children: "•",
                                              }),
                                              e.jsx(i, {
                                                size: 12,
                                                className: "mr-1",
                                              }),
                                              e.jsx("span", {
                                                children: s.views,
                                              }),
                                            ],
                                          }),
                                          e.jsx("h3", {
                                            className:
                                              "font-bold text-lg mb-2 line-clamp-2 group-hover:text-fc-green transition-colors duration-300",
                                            children: s.title,
                                          }),
                                          e.jsx("p", {
                                            className:
                                              "text-gray-600 text-sm line-clamp-2",
                                            children: s.excerpt,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                },
                                s.id
                              )
                            ),
                        }),
                        e.jsx("div", {
                          className: "lg:col-span-3 mt-6",
                          children: e.jsx("div", {
                            className:
                              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: t
                              .slice(4)
                              .map((s) =>
                                e.jsxs(
                                  c,
                                  {
                                    to: `/news/${s.id}`,
                                    className:
                                      "group block rounded-xl overflow-hidden shadow-sm border border-gray-200 card-hover",
                                    children: [
                                      e.jsxs("div", {
                                        className:
                                          "relative aspect-video overflow-hidden",
                                        children: [
                                          e.jsx("img", {
                                            src: s.image,
                                            alt: s.title,
                                            className:
                                              "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                                          }),
                                          e.jsx("div", {
                                            className: "absolute top-2 left-2",
                                            children: e.jsx("span", {
                                              className:
                                                "px-2 py-1 bg-white/80 backdrop-blur-sm rounded-full text-fc-green text-xs font-medium",
                                              children:
                                                s.category === "matches"
                                                  ? "Матчи"
                                                  : s.category === "club"
                                                  ? "Клуб"
                                                  : s.category === "transfers"
                                                  ? "Трансферы"
                                                  : "Академия",
                                            }),
                                          }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        className: "p-4",
                                        children: [
                                          e.jsxs("div", {
                                            className:
                                              "flex items-center justify-between text-gray-500 text-xs mb-2",
                                            children: [
                                              e.jsxs("div", {
                                                className: "flex items-center",
                                                children: [
                                                  e.jsx(o, {
                                                    size: 12,
                                                    className: "mr-1",
                                                  }),
                                                  e.jsx("span", {
                                                    children: s.date,
                                                  }),
                                                ],
                                              }),
                                              e.jsxs("div", {
                                                className: "flex items-center",
                                                children: [
                                                  e.jsx(i, {
                                                    size: 12,
                                                    className: "mr-1",
                                                  }),
                                                  e.jsx("span", {
                                                    children: s.views,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          e.jsx("h3", {
                                            className:
                                              "font-bold text-lg mb-2 line-clamp-2 group-hover:text-fc-green transition-colors duration-300",
                                            children: s.title,
                                          }),
                                          e.jsx("p", {
                                            className:
                                              "text-gray-600 text-sm line-clamp-3 mb-4",
                                            children: s.excerpt,
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  s.id
                                )
                              ),
                          }),
                        }),
                      ],
                    }),
            }),
          ],
        }),
        e.jsx(g, {}),
      ],
    });
  };
export { w as default };
