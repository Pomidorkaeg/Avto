var b = (d, o, r) =>
  new Promise((h, x) => {
    var l = (t) => {
        try {
          i(r.next(t));
        } catch (a) {
          x(a);
        }
      },
      m = (t) => {
        try {
          i(r.throw(t));
        } catch (a) {
          x(a);
        }
      },
      i = (t) => (t.done ? h(t.value) : Promise.resolve(t.value).then(l, m));
    i((r = r.apply(d, o)).next());
  });
import { c as f, r as c, u as w, j as e, a as p } from "./index.js";
import { a as v } from "./api.js";
import { C as k } from "./calendar.js";
import { T as A } from "./trophy.js";
import "./chevron-right.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const g = f("RefreshCw", [
  [
    "path",
    { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" },
  ],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  [
    "path",
    { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" },
  ],
  ["path", { d: "M8 16H3v5", key: "1cv678" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const D = f("Star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const N = f("TriangleAlert", [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq",
      },
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
  ]),
  L = ({ tournamentId: d, source: o }) => {
    const [r, h] = c.useState(null),
      [x, l] = c.useState(!0),
      [m, i] = c.useState(null),
      [t, a] = c.useState("teams"),
      { toast: y } = w(),
      j = () =>
        b(void 0, null, function* () {
          l(!0), i(null);
          try {
            const s = yield v(d, o);
            h(s), l(!1);
          } catch (s) {
            i("Не удалось загрузить данные турнирной таблицы"),
              l(!1),
              y({
                variant: "destructive",
                title: "Ошибка загрузки",
                description: "Не удалось загрузить данные турнирной таблицы",
              });
          }
        });
    c.useEffect(() => {
      j();
    }, [d, o]);
    const u = () => {
      j(),
        y({
          title: "Обновление данных",
          description: "Данные турнирной таблицы обновляются",
        });
    };
    if (x)
      return e.jsxs("div", {
        className:
          "min-h-[400px] flex flex-col items-center justify-center p-6 rounded-xl border border-gray-200 bg-white/50",
        children: [
          e.jsx("div", {
            className: "animate-spin mb-4",
            children: e.jsx(g, { size: 32, className: "text-fc-green" }),
          }),
          e.jsx("p", {
            className: "text-gray-500",
            children: "Загрузка турнирной таблицы...",
          }),
        ],
      });
    if (m)
      return e.jsxs("div", {
        className:
          "min-h-[200px] flex flex-col items-center justify-center p-6 rounded-xl border border-red-200 bg-red-50",
        children: [
          e.jsx(N, { size: 32, className: "text-fc-red mb-4" }),
          e.jsx("p", {
            className: "text-fc-red font-medium mb-2",
            children: "Ошибка загрузки данных",
          }),
          e.jsx("p", {
            className: "text-gray-500 mb-4 text-center",
            children: m,
          }),
          e.jsxs("button", {
            onClick: u,
            className:
              "px-4 py-2 bg-fc-green text-white rounded-md flex items-center gap-2 hover:bg-fc-darkGreen transition-colors duration-300",
            children: [e.jsx(g, { size: 16 }), "Повторить попытку"],
          }),
        ],
      });
    const n = r || {
      title:
        "Кубок среди любительских команд МОО СФФ «Гудаута» сезона 2024 года",
      season: "2024",
      lastUpdated: "15.03.2024",
      teams: [
        {
          position: 1,
          name: "«Бурятия» (Улан-Удэ)",
          played: 7,
          won: 5,
          drawn: 2,
          lost: 0,
          goalsFor: 15,
          goalsAgainst: 6,
          goalDifference: 9,
          points: 17,
        },
        {
          position: 2,
          name: "«Распадская» (Междуреченск)",
          played: 7,
          won: 4,
          drawn: 0,
          lost: 3,
          goalsFor: 9,
          goalsAgainst: 4,
          goalDifference: 5,
          points: 12,
        },
        {
          position: 3,
          name: "«Темп» (Барнаул)",
          played: 6,
          won: 3,
          drawn: 2,
          lost: 1,
          goalsFor: 9,
          goalsAgainst: 4,
          goalDifference: 5,
          points: 11,
        },
        {
          position: 4,
          name: "«Рассвет» (Красноярск)",
          played: 4,
          won: 1,
          drawn: 3,
          lost: 0,
          goalsFor: 6,
          goalsAgainst: 3,
          goalDifference: 3,
          points: 6,
        },
        {
          position: 5,
          name: "«Енисей-М» (Красноярск)",
          played: 6,
          won: 1,
          drawn: 3,
          lost: 2,
          goalsFor: 7,
          goalsAgainst: 7,
          goalDifference: 0,
          points: 6,
        },
        {
          position: 6,
          name: "«Байкал» (Иркутск)",
          played: 4,
          won: 2,
          drawn: 0,
          lost: 2,
          goalsFor: 5,
          goalsAgainst: 6,
          goalDifference: -1,
          points: 6,
        },
        {
          position: 7,
          name: "«ТОЦ-Хайра» (Барнаул)",
          played: 4,
          won: 1,
          drawn: 2,
          lost: 1,
          goalsFor: 5,
          goalsAgainst: 6,
          goalDifference: -1,
          points: 5,
        },
        {
          position: 8,
          name: "«Восход» Ден-СРФ (Томск)",
          played: 2,
          won: 1,
          drawn: 0,
          lost: 1,
          goalsFor: 2,
          goalsAgainst: 3,
          goalDifference: -1,
          points: 3,
        },
      ],
      topScorers: [
        { position: 1, name: "Рыбованов Алексей", team: "Бурятия", goals: 5 },
        { position: 2, name: "Бекеровский Андрей", team: "Темп", goals: 4 },
        { position: 3, name: "Винтер Даниил", team: "Рассвет", goals: 3 },
        { position: 4, name: "Савченко Борис", team: "Енисей-М", goals: 3 },
        { position: 5, name: "Бенедиктов Владимир", team: "Байкал", goals: 2 },
      ],
      warnings: [
        {
          position: 1,
          name: "Рыбованов Алексей",
          team: "Бурятия",
          warnings: 4,
        },
        {
          position: 2,
          name: "Голополобов Евгений",
          team: "Распадская",
          warnings: 4,
        },
        { position: 3, name: "Чуриков Даниил", team: "Енисей-М", warnings: 3 },
        { position: 4, name: "Жариков Роман", team: "Темп", warnings: 2 },
        { position: 5, name: "Голышев Александр", team: "Восход", warnings: 2 },
      ],
      expulsions: [
        {
          position: 1,
          name: "Абдуллаев Степан",
          team: "Енисей-М",
          expulsions: 1,
        },
        {
          position: 2,
          name: "Воропаев Кирилл",
          team: "Распадская",
          expulsions: 1,
        },
        { position: 3, name: "Яковлев Егор", team: "Темп", expulsions: 1 },
        { position: 4, name: "Пальму Ян", team: "Байкал", expulsions: 1 },
        { position: 5, name: "Шориков Даниил", team: "Восход", expulsions: 1 },
      ],
    };
    return e.jsxs("div", {
      className:
        "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300",
      children: [
        e.jsxs("div", {
          className:
            "p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between md:items-center gap-4",
          children: [
            e.jsxs("div", {
              children: [
                e.jsx("h2", {
                  className: "text-2xl font-bold text-gray-800",
                  children: n.title,
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-2 mt-2 text-gray-500",
                  children: [
                    e.jsx(k, { size: 16 }),
                    e.jsxs("span", { children: ["Сезон ", n.season] }),
                    e.jsx("span", {
                      className: "text-gray-300 mx-2",
                      children: "|",
                    }),
                    e.jsxs("span", {
                      children: ["Обновлено: ", n.lastUpdated],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("button", {
              onClick: u,
              className:
                "px-4 py-2 bg-fc-green/10 text-fc-green rounded-md flex items-center gap-2 hover:bg-fc-green hover:text-white transition-colors duration-300 ml-auto",
              children: [e.jsx(g, { size: 16 }), "Обновить"],
            }),
          ],
        }),
        e.jsx("div", {
          className: "border-b border-gray-100",
          children: e.jsxs("div", {
            className: "flex",
            children: [
              e.jsxs("button", {
                onClick: () => a("teams"),
                className: p(
                  "px-4 py-3 text-sm font-medium flex items-center gap-2 transition-colors duration-300",
                  t === "teams"
                    ? "text-fc-green border-b-2 border-fc-green"
                    : "text-gray-500 hover:text-fc-green"
                ),
                children: [e.jsx(A, { size: 16 }), "Таблица команд"],
              }),
              e.jsxs("button", {
                onClick: () => a("scorers"),
                className: p(
                  "px-4 py-3 text-sm font-medium flex items-center gap-2 transition-colors duration-300",
                  t === "scorers"
                    ? "text-fc-green border-b-2 border-fc-green"
                    : "text-gray-500 hover:text-fc-green"
                ),
                children: [e.jsx(D, { size: 16 }), "Бомбардиры"],
              }),
              e.jsxs("button", {
                onClick: () => a("disciplinary"),
                className: p(
                  "px-4 py-3 text-sm font-medium flex items-center gap-2 transition-colors duration-300",
                  t === "disciplinary"
                    ? "text-fc-green border-b-2 border-fc-green"
                    : "text-gray-500 hover:text-fc-green"
                ),
                children: [e.jsx(N, { size: 16 }), "Дисциплина"],
              }),
            ],
          }),
        }),
        e.jsxs("div", {
          className: "overflow-x-auto",
          children: [
            t === "teams" &&
              e.jsxs("table", {
                className: "w-full text-left",
                children: [
                  e.jsx("thead", {
                    children: e.jsxs("tr", {
                      className: "bg-gray-50 text-gray-500 text-xs uppercase",
                      children: [
                        e.jsx("th", {
                          className: "py-3 px-4 font-medium",
                          children: "№",
                        }),
                        e.jsx("th", {
                          className: "py-3 px-4 font-medium",
                          children: "Команда",
                        }),
                        e.jsx("th", {
                          className: "py-3 px-4 font-medium text-center",
                          children: "И",
                        }),
                        e.jsx("th", {
                          className: "py-3 px-4 font-medium text-center",
                          children: "В",
                        }),
                        e.jsx("th", {
                          className: "py-3 px-4 font-medium text-center",
                          children: "Н",
                        }),
                        e.jsx("th", {
                          className: "py-3 px-4 font-medium text-center",
                          children: "П",
                        }),
                        e.jsx("th", {
                          className: "py-3 px-4 font-medium text-center",
                          children: "Мячи",
                        }),
                        e.jsx("th", {
                          className: "py-3 px-4 font-medium text-center",
                          children: "О",
                        }),
                      ],
                    }),
                  }),
                  e.jsx("tbody", {
                    children: n.teams.map((s) =>
                      e.jsxs(
                        "tr",
                        {
                          className:
                            "border-t border-gray-100 hover:bg-gray-50 transition-colors duration-150",
                          children: [
                            e.jsx("td", {
                              className: "py-3 px-4 text-center font-medium",
                              children:
                                s.position <= 3
                                  ? e.jsx("span", {
                                      className: p(
                                        "flex items-center justify-center w-6 h-6 rounded-full text-white font-bold text-xs",
                                        s.position === 1
                                          ? "bg-fc-yellow"
                                          : s.position === 2
                                          ? "bg-gray-400"
                                          : "bg-[#cd7f32]"
                                      ),
                                      children: s.position,
                                    })
                                  : s.position,
                            }),
                            e.jsx("td", {
                              className: "py-3 px-4 font-medium",
                              children: s.name,
                            }),
                            e.jsx("td", {
                              className: "py-3 px-4 text-center",
                              children: s.played,
                            }),
                            e.jsx("td", {
                              className: "py-3 px-4 text-center",
                              children: s.won,
                            }),
                            e.jsx("td", {
                              className: "py-3 px-4 text-center",
                              children: s.drawn,
                            }),
                            e.jsx("td", {
                              className: "py-3 px-4 text-center",
                              children: s.lost,
                            }),
                            e.jsxs("td", {
                              className: "py-3 px-4 text-center",
                              children: [s.goalsFor, "-", s.goalsAgainst],
                            }),
                            e.jsx("td", {
                              className: "py-3 px-4 text-center font-bold",
                              children: s.points,
                            }),
                          ],
                        },
                        `${s.position}-${s.name}`
                      )
                    ),
                  }),
                ],
              }),
            t === "scorers" &&
              e.jsxs("table", {
                className: "w-full text-left",
                children: [
                  e.jsx("thead", {
                    children: e.jsxs("tr", {
                      className: "bg-gray-50 text-gray-500 text-xs uppercase",
                      children: [
                        e.jsx("th", {
                          className: "py-3 px-4 font-medium",
                          children: "№",
                        }),
                        e.jsx("th", {
                          className: "py-3 px-4 font-medium",
                          children: "Игрок",
                        }),
                        e.jsx("th", {
                          className: "py-3 px-4 font-medium",
                          children: "Команда",
                        }),
                        e.jsx("th", {
                          className: "py-3 px-4 font-medium text-center",
                          children: "Голов",
                        }),
                      ],
                    }),
                  }),
                  e.jsx("tbody", {
                    children: n.topScorers.map((s) =>
                      e.jsxs(
                        "tr",
                        {
                          className:
                            "border-t border-gray-100 hover:bg-gray-50 transition-colors duration-150",
                          children: [
                            e.jsx("td", {
                              className: "py-3 px-4 text-center font-medium",
                              children: s.position,
                            }),
                            e.jsx("td", {
                              className: "py-3 px-4 font-medium",
                              children: s.name,
                            }),
                            e.jsx("td", {
                              className: "py-3 px-4",
                              children: s.team,
                            }),
                            e.jsx("td", {
                              className: "py-3 px-4 text-center font-bold",
                              children: s.goals,
                            }),
                          ],
                        },
                        `${s.position}-${s.name}`
                      )
                    ),
                  }),
                ],
              }),
            t === "disciplinary" &&
              e.jsxs("div", {
                children: [
                  e.jsx("h3", {
                    className:
                      "text-lg font-semibold px-6 py-4 border-b border-gray-100",
                    children: "Предупреждения",
                  }),
                  e.jsxs("table", {
                    className: "w-full text-left",
                    children: [
                      e.jsx("thead", {
                        children: e.jsxs("tr", {
                          className:
                            "bg-gray-50 text-gray-500 text-xs uppercase",
                          children: [
                            e.jsx("th", {
                              className: "py-3 px-4 font-medium",
                              children: "№",
                            }),
                            e.jsx("th", {
                              className: "py-3 px-4 font-medium",
                              children: "Игрок",
                            }),
                            e.jsx("th", {
                              className: "py-3 px-4 font-medium",
                              children: "Команда",
                            }),
                            e.jsx("th", {
                              className: "py-3 px-4 font-medium text-center",
                              children: "Предупреждений",
                            }),
                          ],
                        }),
                      }),
                      e.jsx("tbody", {
                        children: n.warnings.map((s) =>
                          e.jsxs(
                            "tr",
                            {
                              className:
                                "border-t border-gray-100 hover:bg-gray-50 transition-colors duration-150",
                              children: [
                                e.jsx("td", {
                                  className:
                                    "py-3 px-4 text-center font-medium",
                                  children: s.position,
                                }),
                                e.jsx("td", {
                                  className: "py-3 px-4 font-medium",
                                  children: s.name,
                                }),
                                e.jsx("td", {
                                  className: "py-3 px-4",
                                  children: s.team,
                                }),
                                e.jsx("td", {
                                  className: "py-3 px-4 text-center",
                                  children: e.jsx("span", {
                                    className:
                                      "px-2 py-1 bg-fc-yellow/10 text-fc-yellow rounded-full text-xs font-medium",
                                    children: s.warnings,
                                  }),
                                }),
                              ],
                            },
                            `warning-${s.position}-${s.name}`
                          )
                        ),
                      }),
                    ],
                  }),
                  e.jsx("h3", {
                    className:
                      "text-lg font-semibold px-6 py-4 border-t border-b border-gray-100 mt-4",
                    children: "Удаления",
                  }),
                  e.jsxs("table", {
                    className: "w-full text-left",
                    children: [
                      e.jsx("thead", {
                        children: e.jsxs("tr", {
                          className:
                            "bg-gray-50 text-gray-500 text-xs uppercase",
                          children: [
                            e.jsx("th", {
                              className: "py-3 px-4 font-medium",
                              children: "№",
                            }),
                            e.jsx("th", {
                              className: "py-3 px-4 font-medium",
                              children: "Игрок",
                            }),
                            e.jsx("th", {
                              className: "py-3 px-4 font-medium",
                              children: "Команда",
                            }),
                            e.jsx("th", {
                              className: "py-3 px-4 font-medium text-center",
                              children: "Удалений",
                            }),
                          ],
                        }),
                      }),
                      e.jsx("tbody", {
                        children: n.expulsions.map((s) =>
                          e.jsxs(
                            "tr",
                            {
                              className:
                                "border-t border-gray-100 hover:bg-gray-50 transition-colors duration-150",
                              children: [
                                e.jsx("td", {
                                  className:
                                    "py-3 px-4 text-center font-medium",
                                  children: s.position,
                                }),
                                e.jsx("td", {
                                  className: "py-3 px-4 font-medium",
                                  children: s.name,
                                }),
                                e.jsx("td", {
                                  className: "py-3 px-4",
                                  children: s.team,
                                }),
                                e.jsx("td", {
                                  className: "py-3 px-4 text-center",
                                  children: e.jsx("span", {
                                    className:
                                      "px-2 py-1 bg-fc-red/10 text-fc-red rounded-full text-xs font-medium",
                                    children: s.expulsions,
                                  }),
                                }),
                              ],
                            },
                            `expulsion-${s.position}-${s.name}`
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
        e.jsxs("div", {
          className:
            "px-6 py-4 bg-gray-50 text-xs text-gray-500 border-t border-gray-100",
          children: [
            "Источник данных: ",
            o,
            " | Данные могут обновляться с задержкой",
          ],
        }),
      ],
    });
  };
export { L as default };
