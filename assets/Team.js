import { c as o, r as d, j as e, a } from "./index.js";
import { N as b, F as u } from "./Footer.js";
import { U as p } from "./users.js";
import { C as c } from "./calendar.js";

const j = o("Flag", [
  [
    "path",
    {
      d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",
      key: "i9b6wo",
    },
  ],
  ["line", { x1: "4", x2: "4", y1: "22", y2: "15", key: "1cm3nv" }],
]);
const w = o("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);

const M = () => {
  const [l, n] = d.useState("players");
  const [i, r] = d.useState("all");
  const [t, x] = d.useState(null);

  const gudautaTeam = {
    name: "ФК Гудаута",
    coaches: [
      {
        id: "c1",
        name: "Иван Петров",
        position: "Главный тренер",
        image:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
      },
      {
        id: "c2",
        name: "Сергей Иванов",
        position: "Ассистент тренера",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
      },
    ],
    players: [
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
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
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
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
        matches: 22,
        goals: 2,
        assists: 3,
        yellowCards: 4,
        redCards: 0,
      },
    ],
  };

  const schoolTeam = {
    name: "СШ Гудаута",
    coaches: [
      {
        id: "c3",
        name: "Михаил Сидоров",
        position: "Главный тренер",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
      },
    ],
    players: [
      {
        id: "3",
        name: "Артем Смирнов",
        position: "Защитник",
        number: 6,
        birthDate: "07.12.2005",
        height: 184,
        weight: 78,
        nationality: "Россия",
        image:
          "https://images.unsplash.com/photo-1539614474467-f8a89c5aa8f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
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
        birthDate: "18.03.2006",
        height: 177,
        weight: 72,
        nationality: "Россия",
        image:
          "https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        matches: 28,
        goals: 5,
        assists: 7,
        yellowCards: 3,
        redCards: 0,
      },
    ],
  };

  const renderTeamSection = (team) => {
    return (
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{team.name}</h2>

        {/* Coaches Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Тренерский штаб
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.coaches.map((coach) => (
              <div
                key={coach.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg text-gray-900">
                    {coach.name}
                  </h4>
                  <p className="text-gray-600">{coach.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Players Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Игроки</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.players.map((player) => (
              <div
                key={player.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-300"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-fc-green font-bold text-xl px-3 py-1 rounded-full">
                    #{player.number}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg text-gray-900">
                    {player.name}
                  </h4>
                  <p className="text-gray-600">{player.position}</p>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-500">Возраст:</span>
                        <span className="ml-1 font-medium">
                          {new Date().getFullYear() -
                            new Date(
                              player.birthDate.split(".").reverse().join("-")
                            ).getFullYear()}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500">Рост:</span>
                        <span className="ml-1 font-medium">
                          {player.height} см
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500">Матчи:</span>
                        <span className="ml-1 font-medium">
                          {player.matches}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500">Голы:</span>
                        <span className="ml-1 font-medium">{player.goals}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <b />
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Команды</h1>
            <p className="text-xl text-gray-600">
              Познакомьтесь с нашими командами, тренерами и игроками
            </p>
          </div>

          {renderTeamSection(gudautaTeam)}
          {renderTeamSection(schoolTeam)}
        </div>
      </main>
      <u />
    </div>
  );
};

export default M;
