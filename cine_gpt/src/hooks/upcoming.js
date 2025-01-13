import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpComing } from "../store/movies";
import { API_OPTIONS,UPCOMING_API_URL } from "../utils/constants";


const useUpComing = () => {

    const movieDispatch = useDispatch();
    useEffect(()=>{
        getMovies();
    },[]);

    const getMovies =async ()=>{
        const data = await fetch(UPCOMING_API_URL,API_OPTIONS);
        const json = await data.json();
        movieDispatch(addUpComing(json.results));
    }
}

export default useUpComing;