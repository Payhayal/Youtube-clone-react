import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../utils/helpers";
import ReactPlayer from "react-player/youtube";
import Loading from "./../components/Loading";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import millify from "millify";
import ChannelDetail from "../components/ChannelDetail";
import VideoCard from "./../components/VideoCard";

const VideoDetail = () => {
  const { videoId } = useParams();
  const [detail, setDetail] = useState(null);
  const [relateds, setRelateds] = useState(null);

  useEffect(() => {
    setDetail(null);
    setRelateds(null);

    getData(`/details/?id=${videoId}`).then((data) => setDetail(data));

    getData(`/related-contents/?id=${videoId}`).then((data) =>
      setRelateds(data.contents)
    );
  }, [videoId]);

  return (
    <div className="flex flex-col gap-5 lg:flex-row p-4 bg-pink-500 min-h-[95vh]">
      <div className="lg:max-w-[1100px]">
        <ReactPlayer
          width={"100%"}
          height={"470px"}
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          playing={true}
        />
        {!detail ? <Loading /> : <ChannelDetail detail={detail} />}
      </div>
      <div className="flex flex-col justify-center gap-6 lg:max-w-[400px] sm:m-auto">
        {!relateds
          ? "..."
          : relateds.map((item, index) => {
              if (item.type !== "video") return;
              return (<VideoCard key={index} video={item.video} />);
            })}
      </div>
    </div>
  );
};

export default VideoDetail;
