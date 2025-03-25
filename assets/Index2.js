var p = (n, m, i) =>
  new Promise((o, c) => {
    var x = (r) => {
        try {
          t(i.next(r));
        } catch (h) {
          c(h);
        }
      },
      s = (r) => {
        try {
          t(i.throw(r));
        } catch (h) {
          c(h);
        }
      },
      t = (r) => (r.done ? o(r.value) : Promise.resolve(r.value).then(x, s));
    t((i = i.apply(n, m)).next());
  });
import { c as d, j as e, L as a, r as f } from "./index.js";
import { N as u, F as g } from "./Footer.js";
import { T as j, g as b } from "./api.js";
import "./trophy.js";
import "./chevron-right.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const l = d("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const v = d("CalendarDays", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const y = d("Newspaper", [
  [
    "path",
    {
      d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",
      key: "7pis2x",
    },
  ],
  ["path", { d: "M18 14h-8", key: "sponae" }],
  ["path", { d: "M15 18h-5", key: "95g1m2" }],
  ["path", { d: "M10 6h8v4h-8V6Z", key: "smlsk5" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const N = d("Video", [
    [
      "path",
      {
        d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
        key: "ftymec",
      },
    ],
    [
      "rect",
      { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" },
    ],
  ]),
  w = () =>
    e.jsxs("div", {
      className:
        "relative min-h-screen flex items-center justify-center overflow-hidden",
      children: [
        e.jsx("div", {
          className:
            "absolute inset-0 bg-gradient-to-r from-fc-green/90 to-fc-darkGreen/80 z-10",
          style: {
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556056504-5c7696c4c28d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          },
        }),
        e.jsx("div", {
          className:
            "relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center",
          children: e.jsxs("div", {
            className: "animate-slide-up",
            children: [
              e.jsxs("h1", {
                className:
                  "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4",
                children: [
                  "ФК ",
                  e.jsx("span", {
                    className: "text-fc-yellow",
                    children: "ГУДАУТА",
                  }),
                ],
              }),
              e.jsx("p", {
                className:
                  "text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8",
                children: "Футбольный клуб с богатой историей и традициями",
              }),
              e.jsxs("div", {
                className:
                  "flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center",
                children: [
                  e.jsxs(a, {
                    to: "/matches",
                    className:
                      "btn-primary bg-fc-yellow hover:bg-fc-yellow/90 text-fc-darkGreen",
                    children: ["Ближайшие матчи", e.jsx(l, { size: 18 })],
                  }),
                  e.jsx(a, {
                    to: "/tournaments",
                    className:
                      "btn-secondary bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-fc-green",
                    children: "Турнирные таблицы",
                  }),
                ],
              }),
            ],
          }),
        }),
        e.jsx("div", {
          className:
            "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10",
        }),
      ],
    }),
  q = () => {
    const [n, m] = f.useState([]),
      [i, o] = f.useState(!0);
    f.useEffect(() => {
      p(void 0, null, function* () {
        try {
          const t = yield b();
          m(t), o(!1);
        } catch (t) {
          console.error("Error fetching tournaments:", t), o(!1);
        }
      });
    }, []);
    const c = [
        {
          id: "1",
          title: "ФК Гудаута одержал победу над Спартаком в матче 3 лиги",
          excerpt:
            "Футбольный клуб Гудаута выиграл со счетом 2:0 в домашнем матче против Спартака.",
          date: "15.05.2024",
          image:
            "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=2574&auto=format&fit=crop",
        },
        {
          id: "2",
          title: "Новый тренер присоединился к команде перед важным матчем",
          excerpt:
            "Иван Петров назначен новым главным тренером ФК Гудаута. Он приступит к обязанностям со следующей недели.",
          date: "10.05.2024",
          image:
            "https://images.unsplash.com/photo-1518164147695-36c13dd568f5?q=80&w=2670&auto=format&fit=crop",
        },
        {
          id: "3",
          title: "Открыт набор в детскую футбольную школу ФК Гудаута",
          excerpt:
            "Футбольный клуб Гудаута объявляет о наборе детей в возрасте от 5 до 12 лет в детскую футбольную школу.",
          date: "05.05.2024",
          image:
            "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2574&auto=format&fit=crop",
        },
      ],
      x = [
        {
          id: "1",
          tournament: "3 Лига ПФЛ",
          homeTeam: "ФК Гудаута",
          awayTeam: "Спартак",
          date: "15.05.2024",
          time: "19:00",
          stadium: "Стадион Спартак",
          city: "Новосибирск",
        },
        {
          id: "2",
          tournament: "Кубок России",
          homeTeam: "ФК Гудаута",
          awayTeam: "Спартак",
          date: "20.05.2024",
          time: "17:00",
          stadium: "Стадион Спартак",
          city: "Новосибирск",
        },
        {
          id: "3",
          tournament: "Чемпионат города Новосибирска",
          homeTeam: "ФК Гудаута",
          awayTeam: "Локомотив",
          date: "25.05.2024",
          time: "16:00",
          stadium: "Стадион Локомотив",
          city: "Новосибирск",
        },
      ];
    return e.jsxs("div", {
      className: "min-h-screen flex flex-col",
      children: [
        e.jsx(u, {}),
        e.jsxs("main", {
          className: "flex-grow page-transition",
          children: [
            e.jsx(w, {}),
            e.jsx("section", {
              className: "section-padding bg-white",
              children: e.jsxs("div", {
                className: "max-w-7xl mx-auto",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex flex-col md:flex-row justify-between items-start md:items-center mb-10",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("h2", {
                            className: "text-3xl font-bold text-gray-900 mb-2",
                            children: "Турниры и соревнования",
                          }),
                          e.jsx("p", {
                            className: "text-gray-500 max-w-2xl",
                            children:
                              "Следите за актуальными турнирными таблицами и результатами всех соревнований с участием нашего клуба",
                          }),
                        ],
                      }),
                      e.jsxs(a, {
                        to: "/tournaments",
                        className: "mt-4 md:mt-0 btn-secondary",
                        children: ["Все соревнования", e.jsx(l, { size: 18 })],
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: i
                      ? Array(3)
                          .fill(0)
                          .map((s, t) =>
                            e.jsx(
                              "div",
                              {
                                className:
                                  "h-72 rounded-xl bg-gray-100 animate-pulse",
                              },
                              t
                            )
                          )
                      : n
                          .filter((s) => s.featured)
                          .slice(0, 3)
                          .map((s) =>
                            e.jsx(
                              j,
                              {
                                id: s.id,
                                title: s.title,
                                type: s.type,
                                season: s.season,
                                teams: s.teams,
                                source: s.source,
                                featured: s.featured,
                              },
                              s.id
                            )
                          ),
                  }),
                ],
              }),
            }),
            e.jsx("section", {
              className: "section-padding bg-gray-50",
              children: e.jsxs("div", {
                className: "max-w-7xl mx-auto",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex flex-col md:flex-row justify-between items-start md:items-center mb-10",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("h2", {
                            className: "text-3xl font-bold text-gray-900 mb-2",
                            children: "Ближайшие матчи",
                          }),
                          e.jsx("p", {
                            className: "text-gray-500 max-w-2xl",
                            children:
                              "Не пропустите ближайшие игры нашей команды в различных турнирах",
                          }),
                        ],
                      }),
                      e.jsxs(a, {
                        to: "/matches",
                        className: "mt-4 md:mt-0 btn-secondary",
                        children: ["Все матчи", e.jsx(l, { size: 18 })],
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: x.map((s) =>
                      e.jsxs(
                        "div",
                        {
                          className:
                            "bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 card-hover",
                          children: [
                            e.jsx("div", {
                              className:
                                "p-4 border-b border-gray-100 bg-fc-green/5",
                              children: e.jsxs("div", {
                                className: "flex justify-between items-center",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "text-sm font-medium text-fc-green",
                                    children: s.tournament,
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "flex items-center space-x-1 text-gray-500 text-sm",
                                    children: [
                                      e.jsx(v, { size: 14 }),
                                      e.jsx("span", { children: s.date }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            e.jsxs("div", {
                              className: "p-6",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex justify-between items-center mb-6",
                                  children: [
                                    e.jsxs("div", {
                                      className: "text-center flex-1",
                                      children: [
                                        e.jsx("div", {
                                          className: "font-bold text-xl mb-1",
                                          children: s.homeTeam,
                                        }),
                                        e.jsx("div", {
                                          className: "text-sm text-gray-500",
                                          children: "Хозяева",
                                        }),
                                      ],
                                    }),
                                    e.jsx("div", {
                                      className: "flex-shrink-0 px-4",
                                      children: e.jsx("div", {
                                        className:
                                          "text-2xl font-bold text-gray-400",
                                        children: "VS",
                                      }),
                                    }),
                                    e.jsxs("div", {
                                      className: "text-center flex-1",
                                      children: [
                                        e.jsx("div", {
                                          className: "font-bold text-xl mb-1",
                                          children: s.awayTeam,
                                        }),
                                        e.jsx("div", {
                                          className: "text-sm text-gray-500",
                                          children: "Гости",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className:
                                    "flex justify-between text-sm text-gray-500 pt-4 border-t border-gray-100",
                                  children: [
                                    e.jsxs("div", {
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "font-medium text-gray-700",
                                          children: s.time,
                                        }),
                                        e.jsx("div", { children: s.stadium }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "text-right",
                                      children: [
                                        e.jsxs("div", {
                                          className:
                                            "font-medium text-gray-700",
                                          children: ["г. ", s.city],
                                        }),
                                        e.jsx(a, {
                                          to: `/matches/${s.id}`,
                                          className:
                                            "text-fc-green hover:underline",
                                          children: "Подробнее",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        s.id
                      )
                    ),
                  }),
                ],
              }),
            }),
            e.jsx("section", {
              className: "section-padding bg-white",
              children: e.jsxs("div", {
                className: "max-w-7xl mx-auto",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex flex-col md:flex-row justify-between items-start md:items-center mb-10",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("h2", {
                            className: "text-3xl font-bold text-gray-900 mb-2",
                            children: "Последние новости",
                          }),
                          e.jsx("p", {
                            className: "text-gray-500 max-w-2xl",
                            children:
                              "Будьте в курсе последних событий из жизни клуба",
                          }),
                        ],
                      }),
                      e.jsxs(a, {
                        to: "/news",
                        className: "mt-4 md:mt-0 btn-secondary",
                        children: ["Все новости", e.jsx(l, { size: 18 })],
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                    children: c.map((s) =>
                      e.jsxs(
                        a,
                        {
                          to: `/news/${s.id}`,
                          className:
                            "group rounded-xl overflow-hidden shadow-sm border border-gray-200 card-hover",
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
                                  className:
                                    "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70",
                                }),
                                e.jsx("div", {
                                  className: "absolute bottom-4 left-4 right-4",
                                  children: e.jsxs("div", {
                                    className:
                                      "flex items-center text-white/90 text-sm mb-1",
                                    children: [
                                      e.jsx(y, { size: 14 }),
                                      e.jsx("span", { children: s.date }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "p-5",
                              children: [
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
                                e.jsxs("div", {
                                  className:
                                    "flex items-center text-fc-green font-medium text-sm",
                                  children: [
                                    "Читать далее",
                                    e.jsx(l, {
                                      size: 14,
                                      className:
                                        "ml-1 transition-transform duration-300 group-hover:translate-x-1",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        s.id
                      )
                    ),
                  }),
                ],
              }),
            }),
            e.jsx("section", {
              className: "section-padding bg-gray-50",
              children: e.jsxs("div", {
                className: "max-w-7xl mx-auto",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex flex-col md:flex-row justify-between items-start md:items-center mb-10",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("h2", {
                            className: "text-3xl font-bold text-gray-900 mb-2",
                            children: "Медиа галерея",
                          }),
                          e.jsx("p", {
                            className: "text-gray-500 max-w-2xl",
                            children:
                              "Фотографии и видео с матчей и тренировок нашей команды",
                          }),
                        ],
                      }),
                      e.jsxs(a, {
                        to: "/media",
                        className: "mt-4 md:mt-0 btn-secondary",
                        children: ["Вся галерея", e.jsx(l, { size: 18 })],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                    children: [
                      e.jsxs("div", {
                        className:
                          "relative aspect-square rounded-xl overflow-hidden group card-hover",
                        children: [
                          e.jsx("img", {
                            src: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                            alt: "Team Photo",
                            className:
                              "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300",
                            children: e.jsx("span", {
                              className: "text-white font-medium",
                              children: "Тренировка команды",
                            }),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "relative aspect-square rounded-xl overflow-hidden group card-hover",
                        children: [
                          e.jsx("img", {
                            src: "https://images.unsplash.com/photo-1550881111-7cfde14b8073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
                            alt: "Match Photo",
                            className:
                              "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300",
                            children: e.jsx("span", {
                              className: "text-white font-medium",
                              children: "Матч с ФК Спартак",
                            }),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "relative aspect-square rounded-xl overflow-hidden group card-hover",
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute inset-0 bg-black/40 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                            children: e.jsx(N, {
                              className: "text-white w-12 h-12",
                            }),
                          }),
                          e.jsx("img", {
                            src: "https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                            alt: "Video Thumbnail",
                            className:
                              "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent",
                            children: e.jsx("span", {
                              className: "text-white font-medium",
                              children: "Обзор матча",
                            }),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "relative aspect-square rounded-xl overflow-hidden group card-hover",
                        children: [
                          e.jsx("img", {
                            src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2093&q=80",
                            alt: "Stadium Photo",
                            className:
                              "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300",
                            children: e.jsx("span", {
                              className: "text-white font-medium",
                              children: "Стадион Спартак",
                            }),
                          }),
                        ],
                      }),
                    ],
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
export { q as default };
