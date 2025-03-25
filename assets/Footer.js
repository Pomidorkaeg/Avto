import {
  c as a,
  r as l,
  b as j,
  j as e,
  a as i,
  L as t,
  X as p,
} from "./index.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w = a("Facebook", [
  [
    "path",
    {
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
      key: "1jg4f8",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const f = a("Instagram", [
  [
    "rect",
    {
      width: "20",
      height: "20",
      x: "2",
      y: "2",
      rx: "5",
      ry: "5",
      key: "2e1cvw",
    },
  ],
  [
    "path",
    { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
  ],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const u = a("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const N = a("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const v = a("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const y = a("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const g = a("Twitter", [
    [
      "path",
      {
        d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
        key: "pff0z6",
      },
    ],
  ]),
  k = () => {
    const [n, r] = l.useState(!1),
      [h, c] = l.useState(!1),
      d = j();
    l.useEffect(() => {
      const s = () => {
        window.scrollY > 10 ? c(!0) : c(!1);
      };
      return (
        window.addEventListener("scroll", s),
        () => window.removeEventListener("scroll", s)
      );
    }, []);
    const m = () => r(!n),
      o = (s) => d.pathname === s,
      x = [
        { name: "Главная", path: "/" },
        { name: "Команда", path: "/team" },
        { name: "Новости", path: "/news" },
        { name: "Матчи", path: "/matches" },
        { name: "Соревнования", path: "/tournaments" },
        { name: "Медиа", path: "/media" },
        { name: "Контакты", path: "/contacts" },
      ];
    return e.jsxs("header", {
      className: i(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        h ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      ),
      children: [
        e.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: e.jsxs("div", {
            className: "flex justify-between items-center py-4",
            children: [
              e.jsx("div", {
                className: "flex items-center",
                children: e.jsx(t, {
                  to: "/",
                  className: "flex items-center space-x-2",
                  onClick: () => r(!1),
                  children: e.jsx("span", {
                    className: "text-fc-green font-bold text-xl",
                    children: "ФК ГУДАУТА",
                  }),
                }),
              }),
              e.jsx("nav", {
                className: "hidden md:flex space-x-1",
                children: x.map((s) =>
                  e.jsx(
                    t,
                    {
                      to: s.path,
                      className: i(
                        "nav-link",
                        o(s.path)
                          ? "active-nav-link text-fc-green"
                          : "text-gray-700 hover:text-fc-green"
                      ),
                      children: s.name,
                    },
                    s.path
                  )
                ),
              }),
              e.jsxs("button", {
                onClick: m,
                className:
                  "md:hidden rounded-md p-2 inline-flex items-center justify-center text-gray-800 hover:text-fc-green focus:outline-none",
                children: [
                  e.jsx("span", {
                    className: "sr-only",
                    children: "Open main menu",
                  }),
                  n
                    ? e.jsx(p, { className: "h-6 w-6" })
                    : e.jsx(v, { className: "h-6 w-6" }),
                ],
              }),
            ],
          }),
        }),
        e.jsx("div", {
          className: i(
            "md:hidden fixed inset-x-0 top-[4rem] bg-white/95 backdrop-blur-md transition-all duration-300 ease-in-out transform origin-top",
            n
              ? "opacity-100 scale-y-100 shadow-lg"
              : "opacity-0 scale-y-0 pointer-events-none"
          ),
          children: e.jsx("div", {
            className: "px-2 pt-2 pb-3 space-y-1 sm:px-3",
            children: x.map((s) =>
              e.jsx(
                t,
                {
                  to: s.path,
                  className: i(
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150",
                    o(s.path)
                      ? "text-fc-green bg-fc-green/10"
                      : "text-gray-700 hover:text-fc-green hover:bg-fc-green/5"
                  ),
                  onClick: () => r(!1),
                  children: s.name,
                },
                s.path
              )
            ),
          }),
        }),
      ],
    });
  },
  M = () =>
    e.jsx("footer", {
      className: "bg-fc-green text-white",
      children: e.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
        children: [
          e.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("h3", {
                    className: "text-xl font-bold mb-4",
                    children: "ФК ГУДАУТА",
                  }),
                  e.jsx("p", {
                    className: "text-white/80 mb-4",
                    children:
                      "Футбольный клуб с богатой историей и традициями, стремящийся к новым победам и достижениям.",
                  }),
                  e.jsxs("div", {
                    className: "flex space-x-4",
                    children: [
                      e.jsx("a", {
                        href: "#",
                        className:
                          "text-white hover:text-fc-yellow transition-colors duration-300",
                        children: e.jsx(f, { size: 20 }),
                      }),
                      e.jsx("a", {
                        href: "#",
                        className:
                          "text-white hover:text-fc-yellow transition-colors duration-300",
                        children: e.jsx(w, { size: 20 }),
                      }),
                      e.jsx("a", {
                        href: "#",
                        className:
                          "text-white hover:text-fc-yellow transition-colors duration-300",
                        children: e.jsx(g, { size: 20 }),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("h3", {
                    className: "text-xl font-bold mb-4",
                    children: "Страницы",
                  }),
                  e.jsxs("ul", {
                    className: "space-y-2",
                    children: [
                      e.jsx("li", {
                        children: e.jsx(t, {
                          to: "/",
                          className:
                            "text-white/80 hover:text-white transition-colors duration-300",
                          children: "Главная",
                        }),
                      }),
                      e.jsx("li", {
                        children: e.jsx(t, {
                          to: "/team",
                          className:
                            "text-white/80 hover:text-white transition-colors duration-300",
                          children: "Команда",
                        }),
                      }),
                      e.jsx("li", {
                        children: e.jsx(t, {
                          to: "/news",
                          className:
                            "text-white/80 hover:text-white transition-colors duration-300",
                          children: "Новости",
                        }),
                      }),
                      e.jsx("li", {
                        children: e.jsx(t, {
                          to: "/matches",
                          className:
                            "text-white/80 hover:text-white transition-colors duration-300",
                          children: "Матчи",
                        }),
                      }),
                      e.jsx("li", {
                        children: e.jsx(t, {
                          to: "/tournaments",
                          className:
                            "text-white/80 hover:text-white transition-colors duration-300",
                          children: "Соревнования",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("h3", {
                    className: "text-xl font-bold mb-4",
                    children: "Соревнования",
                  }),
                  e.jsxs("ul", {
                    className: "space-y-2",
                    children: [
                      e.jsx("li", {
                        children: e.jsx(t, {
                          to: "/tournaments",
                          className:
                            "text-white/80 hover:text-white transition-colors duration-300",
                          children: "3 Лига ПФЛ",
                        }),
                      }),
                      e.jsx("li", {
                        children: e.jsx(t, {
                          to: "/tournaments",
                          className:
                            "text-white/80 hover:text-white transition-colors duration-300",
                          children: "Кубок России",
                        }),
                      }),
                      e.jsx("li", {
                        children: e.jsx(t, {
                          to: "/tournaments",
                          className:
                            "text-white/80 hover:text-white transition-colors duration-300",
                          children: "Чемпионат города Новосибирска",
                        }),
                      }),
                      e.jsx("li", {
                        children: e.jsx(t, {
                          to: "/tournaments",
                          className:
                            "text-white/80 hover:text-white transition-colors duration-300",
                          children: "Кубок победы",
                        }),
                      }),
                      e.jsx("li", {
                        children: e.jsx(t, {
                          to: "/tournaments",
                          className:
                            "text-white/80 hover:text-white transition-colors duration-300",
                          children: "Кубок новосибирской области",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("h3", {
                    className: "text-xl font-bold mb-4",
                    children: "Контакты",
                  }),
                  e.jsxs("ul", {
                    className: "space-y-4",
                    children: [
                      e.jsxs("li", {
                        className: "flex items-start space-x-3",
                        children: [
                          e.jsx(N, { size: 20, className: "shrink-0 mt-1" }),
                          e.jsx("span", {
                            className: "text-white/80",
                            children: "Новосибирск, ул. Спортивная, 20",
                          }),
                        ],
                      }),
                      e.jsxs("li", {
                        className: "flex items-center space-x-3",
                        children: [
                          e.jsx(y, { size: 20, className: "shrink-0" }),
                          e.jsx("span", {
                            className: "text-white/80",
                            children: "+7 (383) 123-45-67",
                          }),
                        ],
                      }),
                      e.jsxs("li", {
                        className: "flex items-center space-x-3",
                        children: [
                          e.jsx(u, { size: 20, className: "shrink-0" }),
                          e.jsx("span", {
                            className: "text-white/80",
                            children: "info@fcsibirsk.ru",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center",
            children: [
              e.jsxs("p", {
                className: "text-white/80",
                children: [
                  "© ",
                  new Date().getFullYear(),
                  " ФК ГУДАУТА. Все права защищены.",
                ],
              }),
              e.jsx("div", {
                className: "mt-4 md:mt-0",
                children: e.jsxs("ul", {
                  className: "flex space-x-6",
                  children: [
                    e.jsx("li", {
                      children: e.jsx("a", {
                        href: "#",
                        className:
                          "text-white/80 hover:text-white transition-colors duration-300",
                        children: "Политика конфиденциальности",
                      }),
                    }),
                    e.jsx("li", {
                      children: e.jsx("a", {
                        href: "#",
                        className:
                          "text-white/80 hover:text-white transition-colors duration-300",
                        children: "Условия использования",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    });
export { M as F, N as M, k as N, y as P, u as a };
