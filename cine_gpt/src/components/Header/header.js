import { LOGO_URL } from "../../utils/constants";
import {auth} from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/user";
import { useNavigate } from "react-router";
import { DEFAULT_PROFILE_URL } from "../../utils/constants";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect,useState } from "react";

const InitialHeader = () => {
    const userDispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(true);

    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            userDispatch(
                addUser({
                  uid: user.uid,
                  displayName: user.displayName,
                  email: user.email,
                  profilePic: DEFAULT_PROFILE_URL,
                })
              );
          navigate("/browse");
        } else {
          navigate("/");
        }
        setLoading(false); // Set loading to false after auth check
      })
      return () => unsubscribe();
    },[userDispatch, navigate]);
    return (
        <div className="bg-gradient-to-b from-black to-transparent h-32 flex items-center">
            <img src={LOGO_URL} alt="logo" className="h-32 w-64 absolute top-0 left-4 z-100" />
        </div>
    )
}

export default InitialHeader;