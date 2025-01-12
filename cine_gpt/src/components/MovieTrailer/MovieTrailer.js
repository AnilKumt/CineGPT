import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/movieTrailer";
import MovieTrailerVideo from "../MovieTrailerVideo/MovieTrailerVideo";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const MovieTrailer = () => {
    const moviesData = useSelector((state) => state?.movies?.allMovies);
    const topMovieTrailerId = useSelector((state) => state?.movies?.topMovieId);
    const topMovieId = !moviesData || moviesData.length === 0 ? null : moviesData[0].id;
    const { isLoading } = useMovieTrailer({ topMovieId });

    return (
        <div className="relative w-full h-screen">
            {isLoading ? (
                <div className="flex items-center justify-center h-full bg-cinegpt-dark">
                    <div className="animate-pulse flex flex-col items-center">
                        <div className="w-32 h-32 bg-gray-700 rounded-full mb-4"></div>
                        <div className="h-4 w-48 bg-gray-700 rounded"></div>
                    </div>
                </div>
            ) : (
                <>
                    <MovieTrailerVideo movieVideoId={topMovieTrailerId} />
                    <div className="absolute bottom-[20%] left-[5%] z-50 space-y-4">
                        <div className="flex space-x-4">
                            <button className="flex items-center space-x-2 px-8 py-3 bg-white hover:bg-gray-200 text-black rounded-lg transition-all duration-300 transform hover:scale-105">
                                <FaPlay className="text-xl" />
                                <span className="font-semibold">Play</span>
                            </button>
                            <button className="flex items-center space-x-2 px-8 py-3 bg-gray-500/70 hover:bg-gray-500/90 text-white rounded-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
                                <FaInfoCircle className="text-xl" />
                                <span className="font-semibold">More Info</span>
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default MovieTrailer;
