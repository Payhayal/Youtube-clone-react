import { useContext } from "react";
import SideNav from "./../components/SideNav";
import { YoutubeContext } from "../context/youtubeContext";
import Loading from "../components/Loading";
import VideoCard from "../components/VideoCard";

const Feed = () => {
  const { videos } = useContext(YoutubeContext);
  return (
    <div className="flex min-h-[100vh] text-black">
      <SideNav />
      <div className="videos w-full">
        {!videos ? (
          <Loading />
        ) : (
          videos.map((item, index) => {
            if (item.type !== "video") return;
            return <VideoCard key={index} video={item.video} />;
          })
        )}
      </div>
    </div>
  );
};

export default Feed;
