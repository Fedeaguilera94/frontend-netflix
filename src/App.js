import "./App.css";
import RandomVideo from "./components/randomvideo/RandomVideo";
import Section from "./components/section/Section";
let API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const url = {
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    netflix: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
    comedy: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=35`,
    history: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=36`,
  };

  return (
    <>
      <RandomVideo url={url.netflix} />

      <div>
        <Section title={"Top"} url={url.popular} />
      </div>
      <div>
        <Section title={"Original Netflix"} url={url.netflix} />
      </div>
      <div>
        <Section title={"Comedy"} url={url.comedy} />
      </div>
      <div>
        <Section title={"History"} url={url.history} />
      </div>
    </>
  );
}

export default App;
