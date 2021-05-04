import {useEffect, useState} from "react";
import youTube from "../API/youtube";

const useVideos = (searchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        onSearchText(searchTerm);
    }, [searchTerm])

    const onSearchText = async text => {
        const response = await youTube.get("/search", {
            params: {
                q: text
            }
        });
        console.log(response.data.items);
        setVideos(response.data.items);
    }

    return [videos, onSearchText];
}

export default useVideos;