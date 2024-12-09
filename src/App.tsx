import "./App.css";

const links = [
  {
    name: "My Patreon",
    url: "https://patreon.com/user?u=14418362",
  },
  {
    name: "My Portfolio",
    url: "https://joshhendrix.me",
  },
  {
    name: "My TikTok",
    url: "https://www.tiktok.com/@joshhenny",
  },
  {
    name: "My LinkedIn",
    url: "https://www.linkedin.com/in/joshua-hendrix-a03066144/",
  },
  {
    name: "My GitHub",
    url: "https://github.com/thejoshuahendrix",
  },
  {
    name: "My YouTube",
    url: "https://www.youtube.com/channel/UC9zrt277wSXsHyCmPgUqzdQ",
  },
  {
    name: "My Github REPO of Resources",
    url: "https://github.com/thejoshuahendrix/repo-of-repos",
  },
  {
    name: "Build Your Own X REPO",
    url: "https://github.com/codecrafters-io/build-your-own-x",
  },
];

const App = () => {
  return (
    <>
      <div>
        <h2>Josh's Links</h2>
      </div>
      {links.map((link) => (
        <div
          onClick={() => (window.location.href = link.url)}
          className="linkbox"
        >
          <a href={link.url}>{link.name}</a>
        </div>
      ))}
    </>
  );
};

export default App;
