import { useDispatch, useSelector } from "react-redux";
import InitialHeader from "../Header/header";
import { removeUser } from "../../store/userSlice/user";
import { useNavigate } from "react-router";

const Browse = ()=>{
    const userProfile = useSelector((state)=>state.user?.profilePic || "default-profile-pic-url");
    const userDispatch = useDispatch();
    const navigate = useNavigate();
    const handleSignOut = () =>{
        userDispatch(removeUser());
        navigate("/");
    }
    return(
        <div>
            <InitialHeader/>
            <div className="absolute right-0 top-0 flex">
                <img className="h-12 w-12 m-4 rounded-full" src={userProfile} alt="user"/>
                <button onClick={handleSignOut} className="px-6 py-2 rounded-lg bg-red-700 text-white hover:bg-red-800 m-4">Sign Out</button>
            </div>
            
        </div>
    );
}

export default Browse;