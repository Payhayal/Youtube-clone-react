import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getData } from "../utils/helpers";
import SideNav from "./../components/SideNav";
import VideoCard from "../components/VideoCard";
import Loading from "../components/Loading";

const SearchResults = () => {
  const [results, setResults] = useState(null);
  const [params, setParams] = useSearchParams();

  const query = params.get("search_query");

  useEffect(() => {
    setResults(null);

    getData(
      `https://youtube138.p.rapidapi.com/search/?q=${query}`
      ).then((data) => setResults(data));
  }, [query]);

  const handleClick = () => {
    setParams({ search_query: results.didYouMean });
  };

  return (
    <div className="flex bg-pink-500 text-black min-h-[100vh]">
      <SideNav />
      <div className="flex flex-col gap-15 p-6 w-full ">
        {results?.didYouMean && (
          <p onClick={handleClick} className="cursor-pointer text-2xl">
            Did You Mean
            <span className="font-bold mx-3">
              {results?.didYouMean}
              </span>
          </p>
        )}
        {!results ? (
          <Loading />
        ) : (
          results.contents.map((item, i) => {
            if (item.type !== "video") return;
            return <VideoCard key={i} video={item.video} />;
          })
        )}
      </div>
    </div>
  );
};

export default SearchResults;
