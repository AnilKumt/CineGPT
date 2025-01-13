import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../store/movies";
import { API_OPTIONS,NOW_PLAYING_API_URL } from "../utils/constants";


const useNowPlayingMovies = () => {

    const movieDispatch = useDispatch();
    useEffect(()=>{
        getMovies();
    },[]);

    const getMovies =async ()=>{
        const data = await fetch(NOW_PLAYING_API_URL,API_OPTIONS);
        const json = await data.json();
        movieDispatch(addNowPlaying(json.results));
    }
}

export default useNowPlayingMovies;