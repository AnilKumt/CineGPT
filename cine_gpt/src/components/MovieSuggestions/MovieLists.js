import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MovieLists = ({type}) => {
    const moviesData = useSelector((state)=>state?.allMovies[type]);

    if(!moviesData) return null;

    const scrollLeft = () => {
        const slider = document.getElementById(`slider-${type}`);
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const scrollRight = () => {
        const slider = document.getElementById(`slider-${type}`);
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        <div className="mb-8">
            <h1 className="text-2xl font-bold text-white mb-4 pl-2">
                {type.split(/(?=[A-Z])/).join(" ")}
            </h1>
            
            <div className="relative group">
                <button 
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-black/50 p-4 rounded-r-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    <FaChevronLeft className="text-white" />
                </button>

                <div 
                    id={`slider-${type}`}
                    className="flex overflow-x-scroll scrollbar-hide scroll-smooth gap-4 pb-4"
                >
                    {moviesData.map((movie) => (
                        <MovieCard 
                            key={movie.id}
                            imageId={movie.poster_path}
                            title={movie.original_title}
                        />
                    ))}
                </div>

                <button 
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-black/50 p-4 rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    <FaChevronRight className="text-white" />
                </button>
            </div>
        </div>
    );
};

export default MovieLists;
