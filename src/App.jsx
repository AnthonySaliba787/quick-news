import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import NewsGrid from "./components/NewsGrid";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setItems(data.articles));
  }, [category]);

  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="w-full min-h-screen flex flex-col justify-center items-center mx-auto">
                <div className="w-full min-h-screen flex flex-col justify-start items-center">
                  <Navbar
                    active={active}
                    setActive={setActive}
                    setCategory={setCategory}
                  />
                  <NewsGrid items={items} />
                </div>
              </div>
            }
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
