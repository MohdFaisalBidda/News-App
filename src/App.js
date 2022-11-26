import "./App.css"
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import NewsContextProvider from "./Components/NewsContext";

const App = () => {
  return (
    <NewsContextProvider >
      <NavBar/>
      <h1 className="text-3xl my-6 mx-6 text-blue-500 text-center">Top Headlines🔥</h1>
      <News />
    </NewsContextProvider>

  );
}

export default App;
