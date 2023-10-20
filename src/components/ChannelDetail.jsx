import millify from "millify";
import moment from "moment/moment";
import React from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import StringArea from "./StringArea";
const ChannelDetail = (detail) => {
  return (
    <>
      <h1 className="mt-3 text-xl font-bold p-3 bg-pink-300">{detail.detail.title}</h1>
      <div className="flex justify-between items-center p-3 bg-pink-300">
        <div className="flex items-center gap-4">
          <img
            className="rounded-full w-12 h-12"
            src={detail.detail.author?.avatar[0]?.url}
          />

          <div>
            <h4 className="font-bold">{detail.detail.author?.title}</h4>
            <p>{detail.detail.author?.stats?.subscribersText}</p>
          </div>
          <button className="bg-pink-500 h-9 rounded-full text-black px-3 transition hover:bg-pink-600">
            Subscribe
          </button>
        </div>
        <div className="flex items-center rounded-full py-1 px-6 text-lg bg-pink-500 transition hover:bg-pink-600 cursor-pointer">
          <div className="flex gap-2 items-center pr-3 border-r-2 border-white">
            <AiFillLike />
            <span>{millify(detail.detail.stats?.likes)}</span>
          </div>
          <div className="pl-2">
            <AiFillDislike />
          </div>
        </div>
      </div>
      <div className="bg-pink-300 rounded mt-2 cursor-pointer hover:bg-pink-400">
        <div className="flex gap-3 font-bold">
          <p>{millify(detail.detail.stats?.views)} views</p>
          <p>{moment(detail.detail.publishedData).fromNow()}</p>
          <ul className="flex gap-3">
            {detail.detail.superTitle?.items.slice(0, 3).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <StringArea text={detail.detail.description} max={200} />
      </div>
    </>
  );
};

export default ChannelDetail;
