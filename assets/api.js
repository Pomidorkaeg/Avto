var p = (o, a, s) =>
  new Promise((i, l) => {
    var m = (t) => {
        try {
          g(s.next(t));
        } catch (c) {
          l(c);
        }
      },
      n = (t) => {
        try {
          g(s.throw(t));
        } catch (c) {
          l(c);
        }
      },
      g = (t) => (t.done ? i(t.value) : Promise.resolve(t.value).then(m, n));
    g((s = s.apply(o, a)).next());
  });
import { j as e, L as d, a as r } from "./index.js";
import { T as f } from "./trophy.js";
import { C as u } from "./chevron-right.js";
const b = ({
    id: o,
    title: a,
    type: s,
    season: i,
    teams: l,
    source: m,
    featured: n = !1,
  }) =>
    e.jsx(d, {
      to: `/tournaments/${o}`,
      className: r(
        "block rounded-xl overflow-hidden card-hover border transition-all duration-300",
        n
          ? "bg-gradient-to-br from-fc-green/5 to-fc-green/20 border-fc-green"
          : "bg-white border-gray-200 hover:border-fc-green/50"
      ),
      children: e.jsxs("div", {
        className: "p-6",
        children: [
          e.jsxs("div", {
            className: "mb-4 flex items-center justify-between",
            children: [
              e.jsx("div", {
                className: r(
                  "flex items-center justify-center w-12 h-12 rounded-full",
                  n ? "bg-fc-green text-white" : "bg-fc-green/10 text-fc-green"
                ),
                children: e.jsx(f, { size: 20 }),
              }),
              e.jsx("span", {
                className: r(
                  "text-sm font-medium px-3 py-1 rounded-full",
                  n
                    ? "bg-fc-yellow/20 text-fc-yellow"
                    : "bg-gray-100 text-gray-600"
                ),
                children: i,
              }),
            ],
          }),
          e.jsx("h3", {
            className: r(
              "text-xl font-bold mb-2 line-clamp-2",
              n ? "text-fc-green" : "text-gray-800"
            ),
            children: a,
          }),
          e.jsx("p", { className: "text-gray-500 mb-4", children: s }),
          e.jsxs("div", {
            className:
              "flex justify-between items-center pt-4 border-t border-gray-100",
            children: [
              e.jsxs("div", {
                className: "text-sm text-gray-500",
                children: [l, " команд"],
              }),
              e.jsxs("div", {
                className: r(
                  "flex items-center text-sm font-medium",
                  n ? "text-fc-green" : "text-gray-600"
                ),
                children: [
                  "Источник: ",
                  m,
                  e.jsx(u, { size: 16, className: "ml-1" }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  j = (o, a) =>
    p(void 0, null, function* () {
      return (
        console.log(`Fetching tournament data for ID: ${o} from source: ${a}`),
        new Promise((s, i) => {
          setTimeout(() => {
            if (Math.random() > 0.8) {
              i(new Error("Failed to fetch tournament data"));
              return;
            }
            s({
              title:
                "Кубок среди любительских команд МОО СФФ «Сибирь» сезона 2024 года",
              season: "2024",
              lastUpdated: new Date().toLocaleDateString("ru-RU"),
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
                {
                  position: 1,
                  name: "Рыбованов Алексей",
                  team: "Бурятия",
                  goals: 5,
                },
                {
                  position: 2,
                  name: "Бекеровский Андрей",
                  team: "Темп",
                  goals: 4,
                },
                {
                  position: 3,
                  name: "Винтер Даниил",
                  team: "Рассвет",
                  goals: 3,
                },
                {
                  position: 4,
                  name: "Савченко Борис",
                  team: "Енисей-М",
                  goals: 3,
                },
                {
                  position: 5,
                  name: "Бенедиктов Владимир",
                  team: "Байкал",
                  goals: 2,
                },
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
                {
                  position: 3,
                  name: "Чуриков Даниил",
                  team: "Енисей-М",
                  warnings: 3,
                },
                {
                  position: 4,
                  name: "Жариков Роман",
                  team: "Темп",
                  warnings: 2,
                },
                {
                  position: 5,
                  name: "Голышев Александр",
                  team: "Восход",
                  warnings: 2,
                },
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
                {
                  position: 3,
                  name: "Яковлев Егор",
                  team: "Темп",
                  expulsions: 1,
                },
                {
                  position: 4,
                  name: "Пальму Ян",
                  team: "Байкал",
                  expulsions: 1,
                },
                {
                  position: 5,
                  name: "Шориков Даниил",
                  team: "Восход",
                  expulsions: 1,
                },
              ],
            });
          }, 1500);
        })
      );
    }),
  v = () =>
    p(void 0, null, function* () {
      return (
        console.log("Fetching tournaments list"),
        new Promise((o) => {
          setTimeout(() => {
            o([
              {
                id: "league-3",
                title: "3 Лига ПФЛ",
                type: "Регулярный чемпионат",
                season: "2024",
                teams: 16,
                source: "sff-siberia.ru",
                featured: !0,
              },
              {
                id: "russia-cup",
                title: "Кубок России",
                type: "Кубковый турнир",
                season: "2023-2024",
                teams: 32,
                source: "sff-siberia.ru",
                featured: !1,
              },
              {
                id: "novosibirsk-championship",
                title: "Чемпионат города Новосибирска",
                type: "Городской чемпионат",
                season: "2024",
                teams: 12,
                source: "ffnso.ru",
                featured: !0,
              },
              {
                id: "victory-cup",
                title: "Кубок победы",
                type: "Кубковый турнир",
                season: "2024",
                teams: 16,
                source: "ffnso.ru",
                featured: !1,
              },
              {
                id: "novosibirsk-region-cup",
                title: "Кубок новосибирской области",
                type: "Региональный кубок",
                season: "2024",
                teams: 18,
                source: "ffnso.ru",
                featured: !1,
              },
            ]);
          }, 1e3);
        })
      );
    });
export { b as T, j as a, v as g };
