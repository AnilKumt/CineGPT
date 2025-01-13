import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopTrailerMovieId } from "../store/movies";

const useMovieTrailer = ({ topMovieId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const movieIdDispatch = useDispatch();

  useEffect(() => {
    if (!topMovieId) return;
    
    const fetchTrailer = async () => {
      try {
        const VIDEO_API_URL = `https://api.themoviedb.org/3/movie/${topMovieId}/videos?language=en-US`;
        const response = await fetch(VIDEO_API_URL, API_OPTIONS);
        const data = await response.json();
        

        const allVideos = Object.values(data.results || {});
        

        const filteredVideos = allVideos.filter((movie) => movie.type === "Trailer");
        
        const trailerVideo = filteredVideos.length ? filteredVideos[0] : allVideos[0];
      

        if (trailerVideo) {
          movieIdDispatch(addTopTrailerMovieId(trailerVideo.key));
        }
      } catch (error) {
        console.error("Failed to fetch trailer videos:", error);
      } finally {
        setIsLoading(false); // Ensure loader is hidden after fetch completes
      }
    };

    fetchTrailer();
  }, [movieIdDispatch, topMovieId]);

  return { isLoading };
};

export default useMovieTrailer;
