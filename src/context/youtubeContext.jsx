import axios from "axios";
import { Children, createContext, useEffect, useState } from "react";
import { options } from "../utils/constants";

export const YoutubeContext = createContext();

export const YoutubeProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState({
    name: "New",
    type: "category",
  });

  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);
    if (selectedCategory.type === 'category') {
      fetchCategory(selectedCategory.name);
    }
  }, [selectedCategory]);

  const fetchCategory = (category) => {
    axios
      .get(`https://youtube138.p.rapidapi.com/search/?q=${category}`, options)
      .then((res) => setVideos(res.data.contents))
      .catch((err) => console.log(err));
  };

  return (
    <YoutubeContext.Provider
      value={{ selectedCategory, setSelectedCategory, videos }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};
