var P = Object.defineProperty,
  L = Object.defineProperties;
var z = Object.getOwnPropertyDescriptors;
var v = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty,
  H = Object.prototype.propertyIsEnumerable;
var M = (s, t, r) =>
    t in s
      ? P(s, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[t] = r),
  x = (s, t) => {
    for (var r in t || (t = {})) k.call(t, r) && M(s, r, t[r]);
    if (v) for (var r of v(t)) H.call(t, r) && M(s, r, t[r]);
    return s;
  },
  w = (s, t) => L(s, z(t));
var y = (s, t) => {
  var r = {};
  for (var a in s) k.call(s, a) && t.indexOf(a) < 0 && (r[a] = s[a]);
  if (s != null && v)
    for (var a of v(s)) t.indexOf(a) < 0 && H.call(s, a) && (r[a] = s[a]);
  return r;
};
import {
  c as N,
  r as h,
  j as e,
  a as C,
  d as q,
  S as E,
  P as R,
  X as A,
  t as b,
} from "./index.js";
import { S as W } from "./search.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y = N("Pencil", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu",
    },
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const I = N("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const T = N("Save", [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476",
    },
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _ = N("Trash", [
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
    ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ]),
  $ = q(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  g = h.forwardRef((u, n) => {
    var c = u,
      { className: s, variant: t, size: r, asChild: a = !1 } = c,
      o = y(c, ["className", "variant", "size", "asChild"]);
    const f = a ? E : "button";
    return e.jsx(
      f,
      x({ className: C($({ variant: t, size: r, className: s })), ref: n }, o)
    );
  });
g.displayName = "Button";
const d = h.forwardRef((o, a) => {
  var n = o,
    { className: s, type: t } = n,
    r = y(n, ["className", "type"]);
  return e.jsx(
    "input",
    x(
      {
        type: t,
        className: C(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          s
        ),
        ref: a,
      },
      r
    )
  );
});
d.displayName = "Input";
var U = "Label",
  B = h.forwardRef((s, t) =>
    e.jsx(
      R.label,
      w(x({}, s), {
        ref: t,
        onMouseDown: (r) => {
          var o;
          r.target.closest("button, input, select, textarea") ||
            ((o = s.onMouseDown) == null || o.call(s, r),
            !r.defaultPrevented && r.detail > 1 && r.preventDefault());
        },
      })
    )
  );
B.displayName = U;
var G = B;
const X = q(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  ),
  l = h.forwardRef((a, r) => {
    var o = a,
      { className: s } = o,
      t = y(o, ["className"]);
    return e.jsx(G, x({ ref: r, className: C(X(), s) }, t));
  });
l.displayName = G.displayName;
const J = ({ player: s, onSave: t, onCancel: r }) => {
  const [a, o] = h.useState(x({}, s)),
    n = (c) => {
      const { name: f, value: j } = c.target;
      [
        "number",
        "height",
        "weight",
        "matches",
        "goals",
        "assists",
        "yellowCards",
        "redCards",
      ].includes(f)
        ? o(w(x({}, a), { [f]: parseInt(j, 10) || 0 }))
        : o(w(x({}, a), { [f]: j }));
    },
    u = (c) => {
      c.preventDefault(), t(a);
    };
  return e.jsxs("form", {
    onSubmit: u,
    className: "space-y-4",
    children: [
      e.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
        children: [
          e.jsxs("div", {
            className: "space-y-4",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx(l, { htmlFor: "name", children: "ФИО игрока" }),
                  e.jsx(d, {
                    id: "name",
                    name: "name",
                    value: a.name,
                    onChange: n,
                    required: !0,
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx(l, { htmlFor: "position", children: "Позиция" }),
                  e.jsxs("select", {
                    id: "position",
                    name: "position",
                    value: a.position,
                    onChange: n,
                    className:
                      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    required: !0,
                    children: [
                      e.jsx("option", {
                        value: "Вратарь",
                        children: "Вратарь",
                      }),
                      e.jsx("option", {
                        value: "Защитник",
                        children: "Защитник",
                      }),
                      e.jsx("option", {
                        value: "Полузащитник",
                        children: "Полузащитник",
                      }),
                      e.jsx("option", {
                        value: "Нападающий",
                        children: "Нападающий",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx(l, { htmlFor: "number", children: "Номер" }),
                  e.jsx(d, {
                    id: "number",
                    name: "number",
                    type: "number",
                    value: a.number,
                    onChange: n,
                    min: "1",
                    max: "99",
                    required: !0,
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx(l, {
                    htmlFor: "nationality",
                    children: "Национальность",
                  }),
                  e.jsx(d, {
                    id: "nationality",
                    name: "nationality",
                    value: a.nationality,
                    onChange: n,
                    required: !0,
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx(l, { htmlFor: "birthDate", children: "Дата рождения" }),
                  e.jsx(d, {
                    id: "birthDate",
                    name: "birthDate",
                    value: a.birthDate,
                    onChange: n,
                    placeholder: "ДД.ММ.ГГГГ",
                    required: !0,
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "space-y-4",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx(l, { htmlFor: "image", children: "URL фото" }),
                  e.jsx(d, {
                    id: "image",
                    name: "image",
                    value: a.image,
                    onChange: n,
                    required: !0,
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx(l, { htmlFor: "height", children: "Рост (см)" }),
                      e.jsx(d, {
                        id: "height",
                        name: "height",
                        type: "number",
                        value: a.height,
                        onChange: n,
                        min: "150",
                        max: "220",
                        required: !0,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx(l, { htmlFor: "weight", children: "Вес (кг)" }),
                      e.jsx(d, {
                        id: "weight",
                        name: "weight",
                        type: "number",
                        value: a.weight,
                        onChange: n,
                        min: "50",
                        max: "120",
                        required: !0,
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx(l, { htmlFor: "matches", children: "Матчи" }),
                      e.jsx(d, {
                        id: "matches",
                        name: "matches",
                        type: "number",
                        value: a.matches,
                        onChange: n,
                        min: "0",
                        required: !0,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx(l, { htmlFor: "goals", children: "Голы" }),
                      e.jsx(d, {
                        id: "goals",
                        name: "goals",
                        type: "number",
                        value: a.goals,
                        onChange: n,
                        min: "0",
                        required: !0,
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "grid grid-cols-3 gap-4",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx(l, { htmlFor: "assists", children: "Передачи" }),
                      e.jsx(d, {
                        id: "assists",
                        name: "assists",
                        type: "number",
                        value: a.assists,
                        onChange: n,
                        min: "0",
                        required: !0,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx(l, {
                        htmlFor: "yellowCards",
                        children: "Жёлтые карточки",
                      }),
                      e.jsx(d, {
                        id: "yellowCards",
                        name: "yellowCards",
                        type: "number",
                        value: a.yellowCards,
                        onChange: n,
                        min: "0",
                        required: !0,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx(l, {
                        htmlFor: "redCards",
                        children: "Красные карточки",
                      }),
                      e.jsx(d, {
                        id: "redCards",
                        name: "redCards",
                        type: "number",
                        value: a.redCards,
                        onChange: n,
                        min: "0",
                        required: !0,
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
        className: "flex justify-end space-x-2 pt-4 border-t border-gray-200",
        children: [
          e.jsxs(g, {
            variant: "outline",
            type: "button",
            onClick: r,
            children: [e.jsx(A, { className: "mr-2 h-4 w-4" }), " Отмена"],
          }),
          e.jsxs(g, {
            type: "submit",
            className: "bg-fc-green hover:bg-fc-darkGreen",
            children: [e.jsx(T, { className: "mr-2 h-4 w-4" }), " Сохранить"],
          }),
        ],
      }),
    ],
  });
};
let p = [
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
];
const K = () => [...p],
  O = (s) => {
    p = p.map((t) => (t.id === s.id ? s : t));
  },
  Q = (s) => {
    p = p.filter((t) => t.id !== s);
  },
  Z = (s) => {
    if (p.some((t) => t.id === s.id))
      throw new Error("Player with this ID already exists");
    p.push(s);
  },
  ae = () => {
    const [s, t] = h.useState(K()),
      [r, a] = h.useState(""),
      [o, n] = h.useState(!1),
      [u, c] = h.useState(null),
      f = s.filter(
        (i) =>
          i.name.toLowerCase().includes(r.toLowerCase()) ||
          i.position.toLowerCase().includes(r.toLowerCase())
      ),
      j = (i) => {
        c(i), n(!0);
      },
      S = (i) => {
        if (window.confirm("Вы уверены, что хотите удалить этого игрока?"))
          try {
            Q(i),
              t(s.filter((m) => m.id !== i)),
              b({
                title: "Игрок удален",
                description: "Игрок был успешно удален из системы",
              });
          } catch (m) {
            b({
              variant: "destructive",
              title: "Ошибка",
              description: "Не удалось удалить игрока",
            });
          }
      },
      F = () => {
        const i = {
          id: `player-${Date.now()}`,
          name: "",
          position: "Нападающий",
          number: s.length + 1,
          birthDate: "",
          height: 180,
          weight: 75,
          nationality: "Россия",
          image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
          matches: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0,
        };
        c(i), n(!0);
      },
      V = (i) => {
        try {
          s.some((m) => m.id === i.id)
            ? (O(i),
              t(s.map((m) => (m.id === i.id ? i : m))),
              b({
                title: "Игрок обновлен",
                description: "Информация об игроке успешно обновлена",
              }))
            : (Z(i),
              t([...s, i]),
              b({
                title: "Игрок добавлен",
                description: "Новый игрок успешно добавлен в систему",
              })),
            n(!1),
            c(null);
        } catch (m) {
          b({
            variant: "destructive",
            title: "Ошибка",
            description: "Не удалось сохранить изменения",
          });
        }
      },
      D = () => {
        n(!1), c(null);
      };
    return e.jsxs("div", {
      children: [
        e.jsxs("div", {
          className: "flex justify-between items-center mb-6",
          children: [
            e.jsx("h1", {
              className: "text-2xl font-bold",
              children: "Управление игроками",
            }),
            e.jsxs(g, {
              onClick: F,
              className: "bg-fc-green hover:bg-fc-darkGreen",
              children: [
                e.jsx(I, { className: "mr-2 h-4 w-4" }),
                " Добавить игрока",
              ],
            }),
          ],
        }),
        o && u
          ? e.jsxs("div", {
              className: "bg-white p-6 rounded-lg shadow mb-6",
              children: [
                e.jsxs("div", {
                  className: "flex justify-between items-center mb-4",
                  children: [
                    e.jsx("h2", {
                      className: "text-xl font-bold",
                      children:
                        u.id.includes("player-") &&
                        !s.some((i) => i.id === u.id)
                          ? "Добавить нового игрока"
                          : "Редактировать игрока",
                    }),
                    e.jsx("div", {
                      className: "flex space-x-2",
                      children: e.jsxs(g, {
                        variant: "outline",
                        size: "sm",
                        onClick: D,
                        children: [
                          e.jsx(A, { className: "mr-2 h-4 w-4" }),
                          " Отмена",
                        ],
                      }),
                    }),
                  ],
                }),
                e.jsx(J, { player: u, onSave: V, onCancel: D }),
              ],
            })
          : e.jsxs(e.Fragment, {
              children: [
                e.jsxs("div", {
                  className: "relative mb-6",
                  children: [
                    e.jsx(W, {
                      className:
                        "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",
                    }),
                    e.jsx(d, {
                      className: "pl-10",
                      placeholder: "Поиск игроков по имени или позиции...",
                      value: r,
                      onChange: (i) => a(i.target.value),
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "bg-white rounded-lg shadow overflow-hidden",
                  children: e.jsxs("table", {
                    className: "min-w-full divide-y divide-gray-200",
                    children: [
                      e.jsx("thead", {
                        className: "bg-gray-50",
                        children: e.jsxs("tr", {
                          children: [
                            e.jsx("th", {
                              scope: "col",
                              className:
                                "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                              children: "№",
                            }),
                            e.jsx("th", {
                              scope: "col",
                              className:
                                "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                              children: "Игрок",
                            }),
                            e.jsx("th", {
                              scope: "col",
                              className:
                                "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                              children: "Позиция",
                            }),
                            e.jsx("th", {
                              scope: "col",
                              className:
                                "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                              children: "Характеристики",
                            }),
                            e.jsx("th", {
                              scope: "col",
                              className:
                                "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                              children: "Статистика",
                            }),
                            e.jsx("th", {
                              scope: "col",
                              className:
                                "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",
                              children: "Действия",
                            }),
                          ],
                        }),
                      }),
                      e.jsx("tbody", {
                        className: "bg-white divide-y divide-gray-200",
                        children: f.map((i) =>
                          e.jsxs(
                            "tr",
                            {
                              className: "hover:bg-gray-50",
                              children: [
                                e.jsx("td", {
                                  className: "px-6 py-4 whitespace-nowrap",
                                  children: e.jsx("div", {
                                    className:
                                      "text-sm font-medium text-gray-900",
                                    children: i.number,
                                  }),
                                }),
                                e.jsx("td", {
                                  className: "px-6 py-4 whitespace-nowrap",
                                  children: e.jsxs("div", {
                                    className: "flex items-center",
                                    children: [
                                      e.jsx("div", {
                                        className: "flex-shrink-0 h-10 w-10",
                                        children: e.jsx("img", {
                                          className:
                                            "h-10 w-10 rounded-full object-cover",
                                          src: i.image,
                                          alt: i.name,
                                        }),
                                      }),
                                      e.jsxs("div", {
                                        className: "ml-4",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "text-sm font-medium text-gray-900",
                                            children: i.name,
                                          }),
                                          e.jsx("div", {
                                            className: "text-sm text-gray-500",
                                            children: i.nationality,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                e.jsx("td", {
                                  className: "px-6 py-4 whitespace-nowrap",
                                  children: e.jsx("span", {
                                    className:
                                      "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",
                                    children: i.position,
                                  }),
                                }),
                                e.jsxs("td", {
                                  className:
                                    "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                  children: [
                                    i.height,
                                    " см, ",
                                    i.weight,
                                    " кг",
                                  ],
                                }),
                                e.jsx("td", {
                                  className:
                                    "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                  children: e.jsxs("div", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                      e.jsxs("span", {
                                        className:
                                          "px-2 py-1 text-xs rounded bg-blue-100 text-blue-800",
                                        children: [i.matches, " матчей"],
                                      }),
                                      e.jsxs("span", {
                                        className:
                                          "px-2 py-1 text-xs rounded bg-green-100 text-green-800",
                                        children: [i.goals, " голов"],
                                      }),
                                    ],
                                  }),
                                }),
                                e.jsxs("td", {
                                  className:
                                    "px-6 py-4 whitespace-nowrap text-right text-sm font-medium",
                                  children: [
                                    e.jsx(g, {
                                      variant: "ghost",
                                      size: "sm",
                                      onClick: () => j(i),
                                      className:
                                        "text-blue-600 hover:text-blue-900 mr-2",
                                      children: e.jsx(Y, {
                                        className: "h-4 w-4",
                                      }),
                                    }),
                                    e.jsx(g, {
                                      variant: "ghost",
                                      size: "sm",
                                      onClick: () => S(i.id),
                                      className:
                                        "text-red-600 hover:text-red-900",
                                      children: e.jsx(_, {
                                        className: "h-4 w-4",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            },
                            i.id
                          )
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            }),
      ],
    });
  };
export { ae as default };
