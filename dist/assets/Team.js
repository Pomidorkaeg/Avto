import { c as o, r as d, j as e, a } from "./index.js";
import { N as b, F as u } from "./Footer.js";
import { U as p } from "./users.js";
import { C as c } from "./calendar.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const j = o("Flag", [
  [
    "path",
    {
      d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",
      key: "i9b6wo",
    },
  ],
  ["line", { x1: "4", x2: "4", y1: "22", y2: "15", key: "1cm3nv" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w = o("User", [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ]),
  M = () => {
    const [l, n] = d.useState("players"),
      [i, r] = d.useState("all"),
      [t, x] = d.useState(null),
      m = [
        {
          id: "1",
          name: "Александр Иванов",
          position: "Вратарь",
          number: 1,
          birthDate: "15.05.1992",
          height: 192,
          weight: 87,
          nationality: "Россия",
          image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
          matches: 24,
          goals: 0,
          assists: 1,
          yellowCards: 1,
          redCards: 0,
        },
        {
          id: "2",
          name: "Дмитрий Петров",
          position: "Защитник",
          number: 4,
          birthDate: "23.09.1994",
          height: 186,
          weight: 82,
          nationality: "Россия",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
          matches: 22,
          goals: 2,
          assists: 3,
          yellowCards: 4,
          redCards: 0,
        },
        {
          id: "3",
          name: "Артем Смирнов",
          position: "Защитник",
          number: 6,
          birthDate: "07.12.1995",
          height: 184,
          weight: 78,
          nationality: "Россия",
          image:
            "https://images.unsplash.com/photo-1539614474467-f8a89c5aa8f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          matches: 26,
          goals: 0,
          assists: 1,
          yellowCards: 5,
          redCards: 1,
        },
        {
          id: "4",
          name: "Игорь Соколов",
          position: "Полузащитник",
          number: 8,
          birthDate: "18.03.1993",
          height: 177,
          weight: 72,
          nationality: "Россия",
          image:
            "https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          matches: 28,
          goals: 5,
          assists: 7,
          yellowCards: 3,
          redCards: 0,
        },
        {
          id: "5",
          name: "Сергей Козлов",
          position: "Полузащитник",
          number: 10,
          birthDate: "05.07.1996",
          height: 179,
          weight: 74,
          nationality: "Россия",
          image:
            "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          matches: 25,
          goals: 8,
          assists: 10,
          yellowCards: 2,
          redCards: 0,
        },
        {
          id: "6",
          name: "Андрей Попов",
          position: "Нападающий",
          number: 9,
          birthDate: "12.02.1994",
          height: 183,
          weight: 78,
          nationality: "Россия",
          image:
            "https://images.unsplash.com/photo-1584634731339-252e5223ee7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
          matches: 27,
          goals: 15,
          assists: 5,
          yellowCards: 2,
          redCards: 0,
        },
      ],
      f = [
        {
          id: "1",
          name: "Сергей Павлович Иванов",
          role: "Главный тренер",
          image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
          since: "2021",
        },
        {
          id: "2",
          name: "Алексей Николаевич Петров",
          role: "Ассистент тренера",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          since: "2022",
        },
        {
          id: "3",
          name: "Дмитрий Александрович Сидоров",
          role: "Тренер вратарей",
          image:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
          since: "2022",
        },
        {
          id: "4",
          name: "Игорь Владимирович Кузнецов",
          role: "Физиотерапевт",
          image:
            "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
          since: "2023",
        },
      ],
      h = m.filter((s) => (i === "all" ? !0 : s.position === i)),
      g = (s) => {
        x(s);
      };
    return e.jsxs("div", {
      className: "min-h-screen flex flex-col",
      children: [
        e.jsx(b, {}),
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
                      "url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
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
                      e.jsx("div", {
                        className:
                          "inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6",
                        children:
                          l === "players"
                            ? e.jsx(p, { className: "w-8 h-8" })
                            : e.jsx(w, { className: "w-8 h-8" }),
                      }),
                      e.jsx("h1", {
                        className: "text-4xl font-bold mb-4",
                        children: "Наша команда",
                      }),
                      e.jsx("p", {
                        className: "max-w-2xl text-white/80 text-lg",
                        children:
                          "Познакомьтесь с игроками и тренерским составом ФК Сибирь",
                      }),
                      e.jsxs("div", {
                        className:
                          "mt-8 flex space-x-2 p-1 bg-white/10 backdrop-blur-sm rounded-full",
                        children: [
                          e.jsx("button", {
                            onClick: () => n("players"),
                            className: a(
                              "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                              l === "players"
                                ? "bg-white text-fc-green"
                                : "text-white hover:bg-white/10"
                            ),
                            children: "Игроки",
                          }),
                          e.jsx("button", {
                            onClick: () => n("staff"),
                            className: a(
                              "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                              l === "staff"
                                ? "bg-white text-fc-green"
                                : "text-white hover:bg-white/10"
                            ),
                            children: "Тренерский штаб",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            e.jsxs("section", {
              className: "py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",
              children: [
                l === "players" &&
                  e.jsxs(e.Fragment, {
                    children: [
                      e.jsx("div", {
                        className: "mb-8 flex justify-center",
                        children: e.jsxs("div", {
                          className: "inline-flex p-1 bg-gray-100 rounded-full",
                          children: [
                            e.jsx("button", {
                              onClick: () => r("all"),
                              className: a(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                i === "all"
                                  ? "bg-fc-green text-white"
                                  : "text-gray-700 hover:bg-gray-200"
                              ),
                              children: "Все",
                            }),
                            e.jsx("button", {
                              onClick: () => r("Вратарь"),
                              className: a(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                i === "Вратарь"
                                  ? "bg-fc-green text-white"
                                  : "text-gray-700 hover:bg-gray-200"
                              ),
                              children: "Вратари",
                            }),
                            e.jsx("button", {
                              onClick: () => r("Защитник"),
                              className: a(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                i === "Защитник"
                                  ? "bg-fc-green text-white"
                                  : "text-gray-700 hover:bg-gray-200"
                              ),
                              children: "Защитники",
                            }),
                            e.jsx("button", {
                              onClick: () => r("Полузащитник"),
                              className: a(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                i === "Полузащитник"
                                  ? "bg-fc-green text-white"
                                  : "text-gray-700 hover:bg-gray-200"
                              ),
                              children: "Полузащитники",
                            }),
                            e.jsx("button", {
                              onClick: () => r("Нападающий"),
                              className: a(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                i === "Нападающий"
                                  ? "bg-fc-green text-white"
                                  : "text-gray-700 hover:bg-gray-200"
                              ),
                              children: "Нападающие",
                            }),
                          ],
                        }),
                      }),
                      e.jsx("div", {
                        className:
                          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: h.map((s) =>
                          e.jsx(
                            "div",
                            {
                              onClick: () => g(s),
                              className: a(
                                "relative bg-white rounded-xl overflow-hidden shadow-sm border transition-all duration-300 cursor-pointer",
                                (t == null ? void 0 : t.id) === s.id
                                  ? "border-fc-green ring-2 ring-fc-green/20"
                                  : "border-gray-200 hover:border-fc-green/50 card-hover"
                              ),
                              children: e.jsxs("div", {
                                className: "flex",
                                children: [
                                  e.jsxs("div", {
                                    className: "w-1/3 relative",
                                    children: [
                                      e.jsx("img", {
                                        src: s.image,
                                        alt: s.name,
                                        className:
                                          "w-full h-full object-cover aspect-[3/4]",
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/30 to-transparent",
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "absolute top-3 left-3 bg-fc-green text-white w-8 h-8 flex items-center justify-center rounded-full font-bold text-lg",
                                        children: s.number,
                                      }),
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className: "w-2/3 p-4",
                                    children: e.jsxs("div", {
                                      className: "flex flex-col h-full",
                                      children: [
                                        e.jsxs("div", {
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "text-xs font-medium text-fc-green mb-1",
                                              children: s.position,
                                            }),
                                            e.jsx("h3", {
                                              className:
                                                "text-lg font-bold mb-3",
                                              children: s.name,
                                            }),
                                          ],
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "mt-auto grid grid-cols-3 gap-2 text-center",
                                          children: [
                                            e.jsxs("div", {
                                              className:
                                                "bg-gray-50 p-2 rounded",
                                              children: [
                                                e.jsx("div", {
                                                  className:
                                                    "text-xs text-gray-500",
                                                  children: "Матчи",
                                                }),
                                                e.jsx("div", {
                                                  className: "font-bold",
                                                  children: s.matches,
                                                }),
                                              ],
                                            }),
                                            e.jsxs("div", {
                                              className:
                                                "bg-gray-50 p-2 rounded",
                                              children: [
                                                e.jsx("div", {
                                                  className:
                                                    "text-xs text-gray-500",
                                                  children: "Голы",
                                                }),
                                                e.jsx("div", {
                                                  className: "font-bold",
                                                  children: s.goals,
                                                }),
                                              ],
                                            }),
                                            e.jsxs("div", {
                                              className:
                                                "bg-gray-50 p-2 rounded",
                                              children: [
                                                e.jsx("div", {
                                                  className:
                                                    "text-xs text-gray-500",
                                                  children: "Передачи",
                                                }),
                                                e.jsx("div", {
                                                  className: "font-bold",
                                                  children: s.assists,
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
                            },
                            s.id
                          )
                        ),
                      }),
                      t &&
                        e.jsxs("div", {
                          className:
                            "mt-12 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden",
                          children: [
                            e.jsx("div", {
                              className: "p-6 border-b border-gray-100",
                              children: e.jsx("h2", {
                                className: "text-2xl font-bold text-gray-900",
                                children: "Информация об игроке",
                              }),
                            }),
                            e.jsxs("div", {
                              className: "flex flex-col md:flex-row",
                              children: [
                                e.jsxs("div", {
                                  className: "md:w-1/3 relative",
                                  children: [
                                    e.jsx("img", {
                                      src: t.image,
                                      alt: t.name,
                                      className:
                                        "w-full h-full object-cover aspect-square md:aspect-auto",
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "absolute top-4 left-4 bg-fc-green text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-2xl",
                                      children: t.number,
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "md:w-2/3 p-6",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "flex flex-col md:flex-row justify-between items-start md:items-center mb-6",
                                      children: e.jsxs("div", {
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "inline-block px-3 py-1 bg-fc-green/10 text-fc-green rounded-full text-sm font-medium mb-2",
                                            children: t.position,
                                          }),
                                          e.jsx("h3", {
                                            className:
                                              "text-2xl font-bold mb-1",
                                            children: t.name,
                                          }),
                                          e.jsxs("div", {
                                            className:
                                              "flex items-center text-gray-500",
                                            children: [
                                              e.jsx(j, {
                                                size: 16,
                                                className: "mr-1",
                                              }),
                                              e.jsx("span", {
                                                children: t.nationality,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8",
                                      children: [
                                        e.jsxs("div", {
                                          className:
                                            "bg-gray-50 p-3 rounded-lg",
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "text-xs text-gray-500 mb-1",
                                              children: "Дата рождения",
                                            }),
                                            e.jsxs("div", {
                                              className:
                                                "font-medium flex items-center",
                                              children: [
                                                e.jsx(c, {
                                                  size: 16,
                                                  className:
                                                    "mr-1 text-fc-green",
                                                }),
                                                t.birthDate,
                                              ],
                                            }),
                                          ],
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "bg-gray-50 p-3 rounded-lg",
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "text-xs text-gray-500 mb-1",
                                              children: "Рост",
                                            }),
                                            e.jsxs("div", {
                                              className: "font-medium",
                                              children: [t.height, " см"],
                                            }),
                                          ],
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "bg-gray-50 p-3 rounded-lg",
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "text-xs text-gray-500 mb-1",
                                              children: "Вес",
                                            }),
                                            e.jsxs("div", {
                                              className: "font-medium",
                                              children: [t.weight, " кг"],
                                            }),
                                          ],
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "bg-gray-50 p-3 rounded-lg",
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "text-xs text-gray-500 mb-1",
                                              children: "Матчи",
                                            }),
                                            e.jsx("div", {
                                              className: "font-medium",
                                              children: t.matches,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsx("h4", {
                                      className: "text-lg font-bold mb-4",
                                      children: "Статистика",
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "grid grid-cols-2 md:grid-cols-4 gap-4",
                                      children: [
                                        e.jsxs("div", {
                                          className:
                                            "border border-gray-100 p-4 rounded-lg text-center",
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "text-3xl font-bold text-fc-green mb-1",
                                              children: t.goals,
                                            }),
                                            e.jsx("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: "Голы",
                                            }),
                                          ],
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "border border-gray-100 p-4 rounded-lg text-center",
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "text-3xl font-bold text-fc-green mb-1",
                                              children: t.assists,
                                            }),
                                            e.jsx("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: "Передачи",
                                            }),
                                          ],
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "border border-gray-100 p-4 rounded-lg text-center",
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "text-3xl font-bold text-fc-yellow mb-1",
                                              children: t.yellowCards,
                                            }),
                                            e.jsx("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: "Жёлтые карточки",
                                            }),
                                          ],
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "border border-gray-100 p-4 rounded-lg text-center",
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "text-3xl font-bold text-fc-red mb-1",
                                              children: t.redCards,
                                            }),
                                            e.jsx("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: "Красные карточки",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                l === "staff" &&
                  e.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: f.map((s) =>
                      e.jsxs(
                        "div",
                        {
                          className:
                            "bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 flex card-hover",
                          children: [
                            e.jsxs("div", {
                              className: "w-1/3 relative",
                              children: [
                                e.jsx("img", {
                                  src: s.image,
                                  alt: s.name,
                                  className:
                                    "w-full h-full object-cover aspect-square",
                                }),
                                e.jsx("div", {
                                  className:
                                    "absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/20 to-transparent",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "w-2/3 p-6",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "inline-block px-3 py-1 bg-fc-green/10 text-fc-green rounded-full text-sm font-medium mb-2",
                                  children: s.role,
                                }),
                                e.jsx("h3", {
                                  className: "text-xl font-bold mb-4",
                                  children: s.name,
                                }),
                                e.jsxs("div", {
                                  className: "flex items-center text-gray-500",
                                  children: [
                                    e.jsx(c, { size: 16, className: "mr-1" }),
                                    e.jsxs("span", {
                                      children: [
                                        "В клубе с ",
                                        s.since,
                                        " года",
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
          ],
        }),
        e.jsx(u, {}),
      ],
    });
  };
export { M as default };
