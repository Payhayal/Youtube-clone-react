import { AiFillBell, AiOutlineSearch, AiFillYoutube } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/results?search_query=${e.target[0].value}`);

    e.target[0].value = "";
  };

  return (
    <header className="flex justify-between items-center p-4 bg-black text-white">
      <Link to={"/"} className="flex items-center gap-3 text-3xl">
        <AiFillYoutube className="text-red-600 text-5xl" />
        <h1>Youtube</h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white rounded"
      >
        <input
          className="rounded px-8 py-2 text-black outline-none"
          placeholder="search..."
          type="text"
        />
        <button className="mr-2 text-black text-2xl">
          <AiOutlineSearch />
        </button>
      </form>
      <AiFillBell className="text-yellow-500 text-2xl mb-5" />
    </header>
  );
};

export default Header;
