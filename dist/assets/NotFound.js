import { b as s, r, j as e, L as n } from "./index.js";
const a = () => {
  const t = s();
  return (
    r.useEffect(() => {
      console.error(
        "404 Error: User attempted to access non-existent route:",
        t.pathname
      );
    }, [t.pathname]),
    e.jsx("div", {
      className: "min-h-screen flex items-center justify-center bg-gray-100",
      children: e.jsxs("div", {
        className: "text-center",
        children: [
          e.jsx("h1", {
            className: "text-4xl font-bold mb-4",
            children: "404",
          }),
          e.jsx("p", {
            className: "text-xl text-gray-600 mb-4",
            children: "Oops! Page not found",
          }),
          e.jsx(n, {
            to: "/",
            className: "text-blue-500 hover:text-blue-700 underline",
            children: "Return to Home",
          }),
        ],
      }),
    })
  );
};
export { a as default };
