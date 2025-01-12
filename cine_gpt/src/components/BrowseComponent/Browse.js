import { useDispatch, useSelector } from "react-redux";
import InitialHeader from "../Header/header";
import { removeUser } from "../../store/userSlice/user";
import { useNavigate } from "react-router";
import useMovies from "../../hooks/moviesHook";
import MovieTrailer from "../MovieTrailer/MovieTrailer";

const Browse = () => {
  const userProfile = useSelector(
    (state) => state.user?.profilePic || "default-profile-pic-url"
  );
  const userDispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    userDispatch(removeUser());
    navigate("/");
  };

  useMovies();

  return (
    <div className="relative min-h-screen flex flex-col">
      <InitialHeader />
      <div className="flex absolute z-20 right-0 justify-end items-center p-4">
        <img
          className="h-12 w-12 rounded-full"
          src={userProfile}
          alt="user"
        />
        <button
          onClick={handleSignOut}
          className="px-6 py-2 ml-4 rounded-lg bg-red-700 text-white hover:bg-red-800"
        >
          Sign Out
        </button>
      </div>
      <div className="mt-0 flex-grow">
        <MovieTrailer />
      </div>
    </div>
  );
};

export default Browse;
