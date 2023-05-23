import "./App.css";

const links = [
  {
    name: "My Portfolio",
    url: "https://www.thejoshhendrix.com/",
  },
  {
    name: "HENDX (My Web3 Project)",
    url: "https://hennyscript.netlify.app/",
  },
  {
    name: "Web3 Dapp Blockchain Game",
    url: "https://darling-crepe-c9d52e.netlify.app/",
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
