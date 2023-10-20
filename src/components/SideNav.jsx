import { useContext } from "react";
import { categories } from "../utils/constants";
import { YoutubeContext } from "../context/youtubeContext";

const SideNav = () => {
  const { selectedCategory, setSelectedCategory } = useContext(YoutubeContext);

  return (
    <nav className="flex flex-col p-4">
      {categories.map((item, indexx) => (
        <div key={indexx} onClick={() => setSelectedCategory(item)}>
          <div
            className={`
           ${selectedCategory.name === item.name && "bg-purple-500"}
           flex items-center gap-2 p-2 py-3 text-lg cursor-pointer rounded-md transition hover:bg-purple-300`}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
          {item.divider && <hr />}
        </div>
      ))}
    </nav>
  );
};

export default SideNav;
