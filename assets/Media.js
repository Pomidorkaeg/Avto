import { c as x, r as n, j as e, a as r } from "./index.js";
import { N as f, F as d } from "./Footer.js";
import { S as m } from "./search.js";
import { C as u } from "./calendar.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const p = x("CirclePlay", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polygon", { points: "10 8 16 12 10 16 10 8", key: "1cimsy" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const g = x("Image", [
    [
      "rect",
      {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        ry: "2",
        key: "1m3agn",
      },
    ],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
  ]),
  D = () => {
    const [a, l] = n.useState("all"),
      [s, o] = n.useState(""),
      c = [
        {
          id: "1",
          type: "image",
          title: "Тренировка команды перед матчем с Енисеем",
          date: "08.04.2024",
          thumbnail:
            "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          url: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          category: "training",
        },
        {
          id: "2",
          type: "image",
          title: "Матч ФК Гудаута - Спартак",
          date: "15.04.2024",
          thumbnail:
            "https://images.unsplash.com/photo-1550881111-7cfde14b8073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
          url: "https://images.unsplash.com/photo-1550881111-7cfde14b8073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
          category: "match",
        },
        {
          id: "3",
          type: "video",
          title: "Обзор матча ФК Гудаута - Енисей",
          date: "11.04.2024",
          thumbnail:
            "https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          category: "match",
        },
        {
          id: "4",
          type: "image",
          title: "Стадион Спартак перед матчем",
          date: "14.04.2024",
          thumbnail:
            "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2093&q=80",
          url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2093&q=80",
          category: "stadium",
        },
        {
          id: "5",
          type: "video",
          title: "Интервью с главным тренером",
          date: "18.04.2024",
          thumbnail:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          category: "interview",
        },
        {
          id: "6",
          type: "image",
          title: "Тренировка юношеской команды",
          date: "05.04.2024",
          thumbnail:
            "https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&auto=format&fit=crop",
          url: "https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&auto=format&fit=crop",
          category: "academy",
        },
        {
          id: "7",
          type: "video",
          title: "Лучшие моменты матча с ЦСКА",
          date: "06.04.2024",
          thumbnail:
            "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          category: "match",
        },
        {
          id: "8",
          type: "image",
          title: "Игроки команды после тренировки",
          date: "07.04.2024",
          thumbnail:
            "https://images.unsplash.com/photo-1518635017498-87f514b751ba?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          url: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          category: "training",
        },
      ].filter(
        (t) =>
          !(
            (a === "images" && t.type !== "image") ||
            (a === "videos" && t.type !== "video") ||
            (a === "match" && t.category !== "match") ||
            (a === "training" && t.category !== "training") ||
            (a === "interview" && t.category !== "interview") ||
            (a === "stadium" && t.category !== "stadium") ||
            (a === "academy" && t.category !== "academy") ||
            (s && !t.title.toLowerCase().includes(s.toLowerCase()))
          )
      ),
      i = (t) => {
        l(t);
      };
    return e.jsxs("div", {
      className: "min-h-screen flex flex-col",
      children: [
        e.jsx(f, {}),
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
                      "url('https://images.unsplash.com/photo-1567464825372-887fb33902be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')",
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
                        children: e.jsx(g, { className: "w-8 h-8" }),
                      }),
                      e.jsx("h1", {
                        className: "text-4xl font-bold mb-4",
                        children: "Медиа галерея",
                      }),
                      e.jsx("p", {
                        className: "max-w-2xl text-white/80 text-lg",
                        children:
                          "Фотографии и видео с матчей, тренировок и других мероприятий клуба",
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
                        onClick: () => i("all"),
                        className: r(
                          "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                          a === "all"
                            ? "bg-fc-green text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        ),
                        children: "Все медиа",
                      }),
                      e.jsx("button", {
                        onClick: () => i("images"),
                        className: r(
                          "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                          a === "images"
                            ? "bg-fc-green text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        ),
                        children: "Фото",
                      }),
                      e.jsx("button", {
                        onClick: () => i("videos"),
                        className: r(
                          "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                          a === "videos"
                            ? "bg-fc-green text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        ),
                        children: "Видео",
                      }),
                      e.jsx("button", {
                        onClick: () => i("match"),
                        className: r(
                          "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                          a === "match"
                            ? "bg-fc-green text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        ),
                        children: "Матчи",
                      }),
                      e.jsx("button", {
                        onClick: () => i("training"),
                        className: r(
                          "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                          a === "training"
                            ? "bg-fc-green text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        ),
                        children: "Тренировки",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "relative mt-4 md:mt-0",
                    children: [
                      e.jsx(m, {
                        className:
                          "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",
                        size: 18,
                      }),
                      e.jsx("input", {
                        type: "text",
                        placeholder: "Поиск медиа...",
                        value: s,
                        onChange: (t) => o(t.target.value),
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
                c.length === 0
                  ? e.jsxs("div", {
                      className: "text-center py-12",
                      children: [
                        e.jsx("p", {
                          className: "text-gray-500 mb-4",
                          children: "По вашему запросу не найдено медиафайлов",
                        }),
                        e.jsx("button", {
                          onClick: () => {
                            o(""), l("all");
                          },
                          className:
                            "px-4 py-2 bg-fc-green text-white rounded-md hover:bg-fc-darkGreen transition-colors",
                          children: "Сбросить фильтры",
                        }),
                      ],
                    })
                  : e.jsx("div", {
                      className:
                        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                      children: c.map((t) =>
                        e.jsx(
                          "div",
                          {
                            className:
                              "group rounded-xl overflow-hidden shadow-sm border border-gray-200 card-hover",
                            children: e.jsxs("div", {
                              className:
                                "relative aspect-square overflow-hidden",
                              children: [
                                e.jsx("img", {
                                  src: t.thumbnail,
                                  alt: t.title,
                                  className:
                                    "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                                }),
                                t.type === "video" &&
                                  e.jsx("div", {
                                    className:
                                      "absolute inset-0 bg-black/30 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300",
                                    children: e.jsx(p, {
                                      className: "text-white w-12 h-12",
                                    }),
                                  }),
                                e.jsx("div", {
                                  className: "absolute top-2 left-2",
                                  children: e.jsxs("div", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                      e.jsx("span", {
                                        className: r(
                                          "px-2 py-1 rounded-full text-xs font-medium",
                                          t.type === "image"
                                            ? "bg-fc-green/80 text-white backdrop-blur-sm"
                                            : "bg-fc-red/80 text-white backdrop-blur-sm"
                                        ),
                                        children:
                                          t.type === "image" ? "Фото" : "Видео",
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "px-2 py-1 bg-white/80 backdrop-blur-sm rounded-full text-gray-800 text-xs font-medium",
                                        children:
                                          t.category === "match"
                                            ? "Матч"
                                            : t.category === "training"
                                            ? "Тренировка"
                                            : t.category === "interview"
                                            ? "Интервью"
                                            : t.category === "stadium"
                                            ? "Стадион"
                                            : "Академия",
                                      }),
                                    ],
                                  }),
                                }),
                                e.jsxs("div", {
                                  className:
                                    "absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center text-white/90 text-xs mb-1",
                                      children: [
                                        e.jsx(u, {
                                          size: 12,
                                          className: "mr-1",
                                        }),
                                        e.jsx("span", { children: t.date }),
                                      ],
                                    }),
                                    e.jsx("h3", {
                                      className:
                                        "text-white font-medium line-clamp-2 group-hover:text-white/90 transition-colors",
                                      children: t.title,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          t.id
                        )
                      ),
                    }),
            }),
          ],
        }),
        e.jsx(d, {}),
      ],
    });
  };
export { D as default };
