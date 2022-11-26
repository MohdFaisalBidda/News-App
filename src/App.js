import "./App.css"
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import NewsContextProvider from "./Components/NewsContext";

const App = () => {
  return (
    <NewsContextProvider >
      <NavBar/>
      <News />
    </NewsContextProvider>

  );
}

export default App;
