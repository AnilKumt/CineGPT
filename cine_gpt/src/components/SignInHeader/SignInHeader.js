import { LOGO_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/user";
import { useNavigate } from "react-router";
import { DEFAULT_PROFILE_URL } from "../../utils/constants";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../utils/firebase";
import { FaSpinner } from "react-icons/fa";

const InitialHeader = () => {
    const userDispatch = useDispatch();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
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
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, [userDispatch]);

    return (
        <header className="bg-gradient-to-b from-black via-black/70 to-transparent py-4">
            <img 
                src={LOGO_URL} 
                alt="CineGPT" 
                className="h-16 md:h-20 w-auto ml-4" 
            />
        </header>
    );
};


export default InitialHeader;
