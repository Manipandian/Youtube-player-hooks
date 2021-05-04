import React from "react";
import VideoDetail from "./videoDetail";
import SearchBar from "./searchBar";
import VideoList from "./videoList";
import useVideos from "../hooks/useVideos";


const App = () => {
    // const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = React.useState(null);
    const [videos, onSearchText] = useVideos("cars");

    React.useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos])
    return (
        <div className="ui container"> 
            <SearchBar getSearchText={onSearchText}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList 
                            videos={videos}
                            // onVideoClick={setSelectedVideo} // It is equal to below case
                            onVideoClick={(video) => setSelectedVideo(video)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;