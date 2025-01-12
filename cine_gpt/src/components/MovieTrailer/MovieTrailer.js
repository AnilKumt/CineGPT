import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/movieTrailer";
import MovieTrailerVideo from "../MovieTrailerVideo/MovieTrailerVideo";
const MovieTrailer = () => {
    const moviesData = useSelector((state) => state?.movies?.allMovies);
    const topMovieTrailerId = useSelector((state)=> state?.movies?.topMovieId)
    // Default to an empty array if no movies are available
    const topMovieId = !moviesData || (moviesData.length===0) ? null : moviesData[0].id;

    // Always call the hook unconditionally
    const { isLoading } = useMovieTrailer({ topMovieId });

    return (
        <div>
            {isLoading ?<h1>Loading</h1> : <MovieTrailerVideo movieVideoId={topMovieTrailerId}/>}
            <button className="absolute top-[80%] left-16 text-3xl bg-white text-black px-4 py-2 rounded-lg">Play</button>
        </div>
    );
}

export default MovieTrailer;
