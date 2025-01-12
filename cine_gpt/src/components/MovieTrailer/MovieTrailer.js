import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/movieTrailer";

const MovieTrailer = () => {
    const moviesData = useSelector((state) => state?.movies?.allMovies);
    const topMovieTrailerId = useSelector((state)=> state?.movies?.topMovieId)
    // Default to an empty array if no movies are available
    const topMovieId = !moviesData || (moviesData.length===0) ? null : moviesData[0].id;

    // Always call the hook unconditionally
    const { isLoading } = useMovieTrailer({ topMovieId });

    return (
        <div>
        {isLoading ?<h1>Loader</h1> : (<iframe width="560" height="315" src={"https://www.youtube.com/embed/"+topMovieTrailerId} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>)}
    </div>
    );
};

export default MovieTrailer;
