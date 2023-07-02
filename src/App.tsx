import "./App.css";

const links = [
  {
    name: "My Portfolio",
    url: "https://www.hendx.dev/",
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
