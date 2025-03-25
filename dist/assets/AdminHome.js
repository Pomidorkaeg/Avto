var C = Object.defineProperty;
var x = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty,
  g = Object.prototype.propertyIsEnumerable;
var N = (s, r, a) =>
    r in s
      ? C(s, r, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (s[r] = a),
  d = (s, r) => {
    for (var a in r || (r = {})) p.call(r, a) && N(s, a, r[a]);
    if (x) for (var a of x(r)) g.call(r, a) && N(s, a, r[a]);
    return s;
  };
var c = (s, r) => {
  var a = {};
  for (var l in s) p.call(s, l) && r.indexOf(l) < 0 && (a[l] = s[l]);
  if (s != null && x)
    for (var l of x(s)) r.indexOf(l) < 0 && g.call(s, l) && (a[l] = s[l]);
  return a;
};
import { r as i, j as e, a as n } from "./index.js";
import { U as v } from "./users.js";
import { T as b } from "./trophy.js";
import { C as y } from "./calendar.js";
const m = i.forwardRef((l, a) => {
  var t = l,
    { className: s } = t,
    r = c(t, ["className"]);
  return e.jsx(
    "div",
    d(
      {
        ref: a,
        className: n(
          "rounded-lg border bg-card text-card-foreground shadow-sm",
          s
        ),
      },
      r
    )
  );
});
m.displayName = "Card";
const o = i.forwardRef((l, a) => {
  var t = l,
    { className: s } = t,
    r = c(t, ["className"]);
  return e.jsx(
    "div",
    d({ ref: a, className: n("flex flex-col space-y-1.5 p-6", s) }, r)
  );
});
o.displayName = "CardHeader";
const j = i.forwardRef((l, a) => {
  var t = l,
    { className: s } = t,
    r = c(t, ["className"]);
  return e.jsx(
    "h3",
    d(
      {
        ref: a,
        className: n("text-2xl font-semibold leading-none tracking-tight", s),
      },
      r
    )
  );
});
j.displayName = "CardTitle";
const f = i.forwardRef((l, a) => {
  var t = l,
    { className: s } = t,
    r = c(t, ["className"]);
  return e.jsx(
    "p",
    d({ ref: a, className: n("text-sm text-muted-foreground", s) }, r)
  );
});
f.displayName = "CardDescription";
const h = i.forwardRef((l, a) => {
  var t = l,
    { className: s } = t,
    r = c(t, ["className"]);
  return e.jsx("div", d({ ref: a, className: n("p-6 pt-0", s) }, r));
});
h.displayName = "CardContent";
const u = i.forwardRef((l, a) => {
  var t = l,
    { className: s } = t,
    r = c(t, ["className"]);
  return e.jsx(
    "div",
    d({ ref: a, className: n("flex items-center p-6 pt-0", s) }, r)
  );
});
u.displayName = "CardFooter";
const E = () =>
  e.jsxs("div", {
    children: [
      e.jsx("h1", {
        className: "text-2xl font-bold mb-6",
        children: "Панель управления",
      }),
      e.jsxs("div", {
        className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
        children: [
          e.jsxs(m, {
            children: [
              e.jsxs(o, {
                className: "pb-2",
                children: [
                  e.jsx(j, {
                    className: "text-lg font-medium",
                    children: "Игроки",
                  }),
                  e.jsx(f, { children: "Управление игроками команды" }),
                ],
              }),
              e.jsx(h, {
                children: e.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center space-x-2",
                      children: [
                        e.jsx(v, { className: "h-10 w-10 text-fc-green" }),
                        e.jsx("span", {
                          className: "text-2xl font-bold",
                          children: "6",
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "text-sm text-gray-500",
                      children: "3 активных, 3 в запасе",
                    }),
                  ],
                }),
              }),
            ],
          }),
          e.jsxs(m, {
            children: [
              e.jsxs(o, {
                className: "pb-2",
                children: [
                  e.jsx(j, {
                    className: "text-lg font-medium",
                    children: "Турниры",
                  }),
                  e.jsx(f, { children: "Управление турнирами" }),
                ],
              }),
              e.jsx(h, {
                children: e.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center space-x-2",
                      children: [
                        e.jsx(b, { className: "h-10 w-10 text-fc-green" }),
                        e.jsx("span", {
                          className: "text-2xl font-bold",
                          children: "5",
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "text-sm text-gray-500",
                      children: "2 актуальных, 3 завершены",
                    }),
                  ],
                }),
              }),
            ],
          }),
          e.jsxs(m, {
            children: [
              e.jsxs(o, {
                className: "pb-2",
                children: [
                  e.jsx(j, {
                    className: "text-lg font-medium",
                    children: "Следующий матч",
                  }),
                  e.jsx(f, { children: "Дата ближайшего матча" }),
                ],
              }),
              e.jsx(h, {
                children: e.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center space-x-2",
                      children: [
                        e.jsx(y, { className: "h-10 w-10 text-fc-green" }),
                        e.jsx("span", {
                          className: "text-lg font-bold",
                          children: "12.08.2024",
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "text-sm text-gray-500",
                      children: "ФК Сибирь - ФК Спартак",
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
export { E as default };
