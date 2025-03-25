import { c as a, j as e, L as s, O as l } from "./index.js";
import { U as r } from "./users.js";
import { T as t } from "./trophy.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const c = a("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const i = a("Settings", [
    [
      "path",
      {
        d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
        key: "1qme2f",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ]),
  x = () =>
    e.jsxs("div", {
      className: "min-h-screen bg-gray-100",
      children: [
        e.jsx("header", {
          className: "bg-fc-darkGreen shadow-md",
          children: e.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: e.jsxs("div", {
              className: "flex justify-between items-center py-4",
              children: [
                e.jsx("div", {
                  className: "flex items-center",
                  children: e.jsx("span", {
                    className: "text-white font-bold text-xl",
                    children: "ФК Сибирь Админ",
                  }),
                }),
                e.jsx("div", {
                  children: e.jsx(s, {
                    to: "/",
                    className:
                      "text-white hover:text-gray-200 text-sm flex items-center",
                    children: e.jsx("span", { children: "Вернуться на сайт" }),
                  }),
                }),
              ],
            }),
          }),
        }),
        e.jsxs("div", {
          className: "flex",
          children: [
            e.jsx("aside", {
              className: "w-64 bg-white shadow-md min-h-[calc(100vh-64px)]",
              children: e.jsx("nav", {
                className: "p-4",
                children: e.jsxs("ul", {
                  className: "space-y-2",
                  children: [
                    e.jsx("li", {
                      children: e.jsxs(s, {
                        to: "/admin",
                        className:
                          "block px-4 py-2 rounded-md hover:bg-gray-100 text-gray-700 font-medium flex items-center",
                        children: [
                          e.jsx(i, { className: "mr-2 h-5 w-5" }),
                          "Панель управления",
                        ],
                      }),
                    }),
                    e.jsx("li", {
                      children: e.jsxs(s, {
                        to: "/admin/players",
                        className:
                          "block px-4 py-2 rounded-md hover:bg-gray-100 text-gray-700 font-medium flex items-center",
                        children: [
                          e.jsx(r, { className: "mr-2 h-5 w-5" }),
                          "Игроки",
                        ],
                      }),
                    }),
                    e.jsx("li", {
                      children: e.jsxs(s, {
                        to: "/admin/tournaments",
                        className:
                          "block px-4 py-2 rounded-md hover:bg-gray-100 text-gray-700 font-medium flex items-center",
                        children: [
                          e.jsx(t, { className: "mr-2 h-5 w-5" }),
                          "Турниры",
                        ],
                      }),
                    }),
                    e.jsx("li", {
                      className: "pt-4 border-t border-gray-200 mt-4",
                      children: e.jsxs("button", {
                        className:
                          "block w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 text-gray-700 font-medium flex items-center",
                        onClick: () => {
                          alert("Выход из системы"),
                            (window.location.href = "/");
                        },
                        children: [
                          e.jsx(c, { className: "mr-2 h-5 w-5" }),
                          "Выйти",
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
            e.jsx("main", { className: "flex-1 p-8", children: e.jsx(l, {}) }),
          ],
        }),
      ],
    });
export { x as default };
