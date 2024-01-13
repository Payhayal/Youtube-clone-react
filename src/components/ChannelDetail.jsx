import millify from "millify";
import moment from "moment/moment";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import StringArea from "./StringArea";
const ChannelDetail = (detail) => {
  return (
    <>
      <h1 className="mt-3 text-xl font-bold p-3 bg-[#F8F9F9]">
        {detail.detail?.title}
      </h1>
      <div className="flex justify-between items-center p-3 bg-[#F8F9F9]">
        <div className="flex items-center gap-4">
          <img
            className="rounded-full w-12 h-12"
            src={detail?.detail?.author?.avatar[0].url}
          />

          <div>
            <h4 className="font-bold">{detail.detail.author?.title}</h4>
            <p>{detail.detail.author?.stats?.subscribersText}</p>
          </div>
          <button className="bg-[#A6ACAF] h-9 rounded-full text-black px-3 transition hover:bg-[#CCD1D1]">
            Subscribe
          </button>
        </div>
        <div className="flex items-center rounded-full py-1 px-6 text-lg bg-[#A6ACAF] transition hover:bg-[#CCD1D1] cursor-pointer">
          <div className="flex gap-2 items-center pr-3 border-r-2 border-white">
            <AiFillLike />
            <span>{millify(detail.detail.stats?.likes)}</span>
          </div>
          <div className="pl-2">
            <AiFillDislike />
          </div>
        </div>
      </div>
      <div className="bg-[#F8F9F9] rounded mt-2 cursor-pointer hover:bg-[#CCD1D1]">
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
