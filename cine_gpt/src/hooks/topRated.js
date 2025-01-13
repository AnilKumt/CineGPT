import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRated } from "../store/movies";
import { API_OPTIONS,TOP_RATED_API_URL } from "../utils/constants";


const useTopRated = () => {

    const movieDispatch = useDispatch();
    useEffect(()=>{
        getMovies();
    },[]);

    const getMovies =async ()=>{
        const data = await fetch(TOP_RATED_API_URL,API_OPTIONS);
        const json = await data.json();
        movieDispatch(addTopRated(json.results));
    }
}

export default useTopRated;