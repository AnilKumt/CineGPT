import { useDispatch, useSelector } from "react-redux";
import InitialHeader from "../Header/header";
import { removeUser } from "../../store/user";
import { useNavigate } from "react-router";
import useNowPlayingMovies from "../../hooks/moviesHook";
import MovieTrailer from "../MovieTrailer/MovieTrailer";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";


const Browse = () => {
  const userProfile = useSelector((state) => state.user?.profilePic);
  const userDispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      userDispatch(removeUser());
      navigate("/");
    });
  };

  useNowPlayingMovies();

  return (
    <div className="relative min-h-screen">
      <div className="fixed top-0 w-full z-50">
        <InitialHeader />
        <div className="absolute right-4 top-4 flex items-center gap-4">
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

      <div className="relative">
        <MovieTrailer />
      </div>
      <div className="movie_recommendation">
        {/* <MovieLists/> */}
      </div>
    </div>
  );
};


export default Browse;
