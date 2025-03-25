const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/TournamentTable.js",
      "assets/index.js",
      "assets/index.css",
      "assets/api.js",
      "assets/trophy.js",
      "assets/chevron-right.js",
      "assets/calendar.js",
    ])
) => i.map((i) => d[i]);
var p = (l, t, o) =>
  new Promise((m, n) => {
    var u = (a) => {
        try {
          i(o.next(a));
        } catch (c) {
          n(c);
        }
      },
      x = (a) => {
        try {
          i(o.throw(a));
        } catch (c) {
          n(c);
        }
      },
      i = (a) => (a.done ? m(a.value) : Promise.resolve(a.value).then(u, x));
    i((o = o.apply(l, t)).next());
  });
import { c as g, r, _ as j, j as e } from "./index.js";
import { N as y, F as v } from "./Footer.js";
import { T as b, g as N } from "./api.js";
import { T as w } from "./trophy.js";
import { S as T } from "./search.js";
import "./chevron-right.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const k = g("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const S = g("Filter", [
    [
      "polygon",
      { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" },
    ],
  ]),
  C = r.lazy(() =>
    j(
      () => import("./TournamentTable.js"),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6])
    )
  ),
  L = () =>
    e.jsxs("div", {
      className: "animate-pulse",
      style: { animationDuration: "1.5s" },
      children: [
        e.jsx("div", { className: "h-8 bg-gray-200 rounded mb-4 w-1/3" }),
        e.jsxs("div", {
          className: "space-y-2",
          children: [
            e.jsx("div", { className: "h-10 bg-gray-200 rounded" }),
            [...Array(4)].map((l, t) =>
              e.jsx("div", { className: "h-12 bg-gray-100 rounded" }, t)
            ),
          ],
        }),
      ],
    }),
  _ = ({ tournamentId: l, source: t }) =>
    e.jsx(r.Suspense, {
      fallback: e.jsx(L, {}),
      children: e.jsx(C, { tournamentId: l, source: t }),
    }),
  M = () => {
    const [l, t] = r.useState([]),
      [o, m] = r.useState(!0),
      [n, u] = r.useState(null),
      [x, i] = r.useState(""),
      [a, c] = r.useState("all");
    r.useEffect(() => {
      p(void 0, null, function* () {
        try {
          const d = yield N();
          t(d), u(d[0]), m(!1);
        } catch (d) {
          console.error("Error fetching tournaments:", d), m(!1);
        }
      });
    }, []);
    const h = (s) => {
        u(s), window.scrollTo({ top: 0, behavior: "smooth" });
      },
      f = l
        .filter((s) =>
          x ? s.title.toLowerCase().includes(x.toLowerCase()) : !0
        )
        .filter((s) =>
          a === "all"
            ? !0
            : a === "featured"
            ? s.featured
            : s.type.toLowerCase().includes(a.toLowerCase())
        );
    return e.jsxs("div", {
      className: "min-h-screen flex flex-col",
      children: [
        e.jsx(y, {}),
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
                      "url('https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
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
                        children: e.jsx(w, { className: "w-8 h-8" }),
                      }),
                      e.jsx("h1", {
                        className: "text-4xl font-bold mb-4",
                        children: "Турниры и соревнования",
                      }),
                      e.jsx("p", {
                        className: "max-w-2xl text-white/80 text-lg",
                        children:
                          "Следите за актуальными турнирными таблицами и результатами всех соревнований с участием нашего клуба",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            n &&
              e.jsx("section", {
                className: "py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",
                children: e.jsx(_, { tournamentId: n.id, source: n.source }),
              }),
            e.jsxs("section", {
              className: "py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",
              children: [
                e.jsxs("div", {
                  className:
                    "flex flex-col md:flex-row justify-between gap-4 mb-8",
                  children: [
                    e.jsx("h2", {
                      className: "text-2xl font-bold text-gray-900",
                      children: "Все турниры",
                    }),
                    e.jsxs("div", {
                      className: "flex flex-col sm:flex-row gap-4",
                      children: [
                        e.jsxs("div", {
                          className: "relative",
                          children: [
                            e.jsx(T, {
                              className:
                                "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",
                              size: 18,
                            }),
                            e.jsx("input", {
                              type: "text",
                              placeholder: "Поиск турнира...",
                              value: x,
                              onChange: (s) => i(s.target.value),
                              className:
                                "pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-fc-green/50 w-full",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "relative",
                          children: [
                            e.jsx(S, {
                              className:
                                "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",
                              size: 18,
                            }),
                            e.jsxs("select", {
                              value: a,
                              onChange: (s) => c(s.target.value),
                              className:
                                "pl-10 pr-10 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-fc-green/50 appearance-none w-full",
                              children: [
                                e.jsx("option", {
                                  value: "all",
                                  children: "Все категории",
                                }),
                                e.jsx("option", {
                                  value: "featured",
                                  children: "Популярные",
                                }),
                                e.jsx("option", {
                                  value: "регулярный",
                                  children: "Регулярные",
                                }),
                                e.jsx("option", {
                                  value: "кубковый",
                                  children: "Кубковые",
                                }),
                                e.jsx("option", {
                                  value: "городской",
                                  children: "Городские",
                                }),
                                e.jsx("option", {
                                  value: "региональный",
                                  children: "Региональные",
                                }),
                              ],
                            }),
                            e.jsx(k, {
                              className:
                                "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400",
                              size: 18,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                o
                  ? e.jsx("div", {
                      className:
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                      children: Array(6)
                        .fill(0)
                        .map((s, d) =>
                          e.jsx(
                            "div",
                            {
                              className:
                                "h-72 rounded-xl bg-gray-100 animate-pulse",
                            },
                            d
                          )
                        ),
                    })
                  : f.length === 0
                  ? e.jsxs("div", {
                      className: "text-center py-12",
                      children: [
                        e.jsx("p", {
                          className: "text-gray-500 mb-4",
                          children: "По вашему запросу не найдено турниров",
                        }),
                        e.jsx("button", {
                          onClick: () => {
                            i(""), c("all");
                          },
                          className:
                            "px-4 py-2 bg-fc-green text-white rounded-md hover:bg-fc-darkGreen transition-colors",
                          children: "Сбросить фильтры",
                        }),
                      ],
                    })
                  : e.jsx("div", {
                      className:
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                      children: f.map((s) =>
                        e.jsx(
                          "div",
                          {
                            onClick: () => h(s),
                            className: "cursor-pointer",
                            children: e.jsx(b, {
                              id: s.id,
                              title: s.title,
                              type: s.type,
                              season: s.season,
                              teams: s.teams,
                              source: s.source,
                              featured: s.featured,
                            }),
                          },
                          s.id
                        )
                      ),
                    }),
              ],
            }),
          ],
        }),
        e.jsx(v, {}),
      ],
    });
  };
export { M as default };
