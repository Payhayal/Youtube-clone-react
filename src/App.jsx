import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import VideoDetail from "./pages/VideoDetail";
import Header from "./components/Header";
import SearchResults from "./pages/SearchResults";
import ColorItem from "./components/ColorItem";
import { useEffect, useState } from "react";

function App() {
  const colors = [
    "#be2edd",
    "#d0a212",
    "#6ab04c",
    "#1e90ff",
    "#9370db",
    "#2bc7a7",
    "#3e886d",
    "#ef95ff",
    "#b22222",
  ];

  const [state, setState] = useState(false);

  useEffect(() => {
    const currentColor = localStorage.getItem("color");

    setTheme(currentColor);
  }, []);

  const setTheme = (color) => {
    document.documentElement.style.setProperty("--bg-color", color);
  };

  const setColor = (event) => {
    const currentColor = event.target.style.getPropertyValue("--bg-color");

    setTheme(currentColor);

    localStorage.setItem("color", currentColor);
  };

  return (
    <>
      <div className="App">
        <div className={`color-switcher ${state && "color-switcher--open"}`}>
          <button
            onClick={() => setState((prevState) => !prevState)}
            className="settingBtn"
          >
            <i className="ri-settings-2-fill"></i>
          </button>
          {/* <h1 className="heading">Select Color</h1> */}
          <div className="color-list">
            {colors?.map((color, idx) => (
              <ColorItem key={idx} setColor={setColor} color={color} />
            ))}
          </div>
        </div>
      </div>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/watch/:videoId" element={<VideoDetail />} />
          <Route path="/results" element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
