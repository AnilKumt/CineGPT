import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovies } from "../store/movies";
import { API_OPTIONS,ALL_MOVIES_API_URL } from "../utils/constants";


const useMovies = () => {

    const movieDispatch = useDispatch((state)=>state.movies.allMovies);
    useEffect(()=>{
        getMovies();
    },[]);

    const getMovies =async ()=>{
        const data = await fetch(ALL_MOVIES_API_URL,API_OPTIONS);
        const json = await data.json();
        movieDispatch(addMovies(json.results));
    }
}

export default useMovies;