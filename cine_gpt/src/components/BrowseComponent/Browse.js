import { useDispatch, useSelector } from "react-redux";
import InitialHeader from "../Header/header";
import { removeUser } from "../../store/user";
import { useNavigate } from "react-router";
import useNowPlayingMovies from "../../hooks/moviesHook";
import usePopular from "../../hooks/popular";
import useTopRated from "../../hooks/topRated";
import useUpComing from "../../hooks/upcoming";
import MovieTrailer from "../MovieTrailer/MovieTrailer";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import MovieLists from "../MovieSuggestions/MovieLists";
import { toggleGPTSearch } from "../../store/gptSearch";
import GPTSearch from "../GPTComponents/GPTSearch";

const Browse = () => {
  const userProfile = useSelector((state) => state.user?.profilePic);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchSelector = useSelector((state) => state?.gptSearch?.gptSearch);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUser());
      navigate("/");
    });
  };
  const handleGPTSearch = () => {
    dispatch(toggleGPTSearch(!searchSelector));
  };
  useNowPlayingMovies();
  usePopular();
  useTopRated();
  useUpComing();
  return (
    <div className="relative min-h-screen">
      <div className="fixed top-0 w-full z-50">
        <InitialHeader />
        <div className="absolute right-4 top-4 flex items-center gap-4">
          {searchSelector && (
            <div>
              <select
                name="languages"
                className="bg-black/80 text-white px-8 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-cinegpt-accent"
              >
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="telugu">Telugu</option>
                <option value="chinese">Chinese</option>
                <option value="korean">Korean</option>
                <option value="spanish">Spanish</option>
              </select>
            </div>
          )}
          <div onClick={handleGPTSearch}className="bg-cinegpt-accent px-4 py-2 rounded-md hover:bg-cinegpt-accent/80 transition-all duration-300 cursor-pointer">
            <p className="text-white font-medium">
              {searchSelector ? "Home Page" : "GPT Search"}
            </p>
          </div>

          <div className="group relative">
            <img
              src={userProfile}
              alt="profile"
              className="h-10 w-10 rounded-full cursor-pointer"
            />
            <div className="absolute right-0 top-12 bg-black/90 p-4 rounded-md invisible group-hover:visible transition-all duration-300">
              <button
                onClick={handleSignOut}
                className="text-white hover:text-cinegpt-accent flex items-center gap-2"
              >
                <FaSignOutAlt /> Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
      {searchSelector ? (
        <GPTSearch />
      ) : (
        <div>
          <div className="relative">
            <MovieTrailer />
          </div>
          <div className="movie_recommendation bg-black">
            <MovieLists type="nowPlaying" />
            <MovieLists type="popular" />
            <MovieLists type="topRated" />
            <MovieLists type="upComing" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Browse;
