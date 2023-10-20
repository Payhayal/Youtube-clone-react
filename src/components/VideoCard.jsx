import millify from "millify";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <Link to={`/watch/${video.videoId}`}>
      <div className="lg:max-w-[500px]">
        {/* video section */}
      <div className="relative mt-5 bg-pink-300">
        <img
          className="rounded-lg w-full"
          src={
            video.thumbnails[1]
              ? video.thumbnails[1]?.url
              : video.thumbnails[0]?.url
          }
        />
        <span className="absolute right-2 bottom-2 bg-pink-300 p-1 rounded">
          {video?.lengthSeconds}
        </span>
      </div>
      {/* bottom info section */}
      <div className="flex gap-4 bg-pink-300">
        <img
          className="rounded-full w-12 h-12"
          src={video.author?.avatar[0].url}
        />
        <div className="bg-pink-300">
          <h4 className="font-bold">{video?.title}</h4>
          <p>{video.author?.title}</p>
          <div className="flex gap-3">
            <p>{millify(video.stats?.views)}</p>
            <p>{video?.publishedTimeText}</p>
          </div>
        </div>
      </div>
      </div>
    </Link>
  );
};

export default VideoCard;
