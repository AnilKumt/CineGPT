import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopular} from "../store/movies";
import { API_OPTIONS,POPULAR_API_URL } from "../utils/constants";


const usePopular = () => {

    const movieDispatch = useDispatch();
    useEffect(()=>{
        getMovies();
    },[]);

    const getMovies =async ()=>{
        const data = await fetch(POPULAR_API_URL,API_OPTIONS);
        const json = await data.json();
        movieDispatch(addPopular(json.results));
    }
}

export default usePopular;