import "./App.css"
import News from "./Components/News";
import NewsContextProvider from "./NewsContext";

const App = () => {
  return (
    <NewsContextProvider>
      <News />
    </NewsContextProvider>

  );
}

export default App;
