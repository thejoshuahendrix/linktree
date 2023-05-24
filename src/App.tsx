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
    name: "My LinkedIn",
    url: "https://www.linkedin.com/in/joshua-hendrix-a03066144/",
  },
  {
    name: "My GitHub",
    url: "https://github.com/thejoshuahendrix",
  },
];

const App = () => {
  return (
    <>
    <div><h2>Josh's Links</h2></div>
      {links.map((link) => (
        <div className="linkbox">
          <a href={link.url}>{link.name}</a>
        </div>
      ))}
    </>
  );
};

export default App;
