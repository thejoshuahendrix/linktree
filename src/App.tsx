import "./App.css";

const links = [
  {
    name: "My Portfolio",
    url: "https://www.thejoshhendrix.com/",
  },
  {
    name: "React Docs",
    url: "https://reactjs.org/",
  },
  {
    name: "Add Tailwind CSS",
    url: "https://tailwindcss.com/docs/guides/create-react-app",
  },
  {
    name: "Learn React",
    url: "https://reactjs.org/docs/getting-started.html",
  },
  {
    name: "Vite + React",
    url: "https://vitejs.dev/guide/#scaffolding-your-first-vite-project",
  },
];

const App = () => {
  return (
    <>
      {links.map((link) => (
        <div className="linkbox">
          <a href={link.url}>{link.name}</a>
        </div>
      ))}
    </>
  );
};

export default App;
