import { useRef, useState } from "react";
import validateLogin from "../../utils/validateLogin";
import { auth } from "../../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { DEFAULT_PROFILE_URL } from "../../utils/constants";
import { FaUser, FaEnvelope, FaLock, FaSpinner } from "react-icons/fa";

const Body = () => {
    const [isSignUp, setSignUp] = useState(true);
    const [errorMessage, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);

    const handleButtonClick = async () => {
        setIsLoading(true);
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const message = validateLogin(email, password);
        setError(message);

        if (message !== null) {
            setIsLoading(false);
            return;
        }

        try {
            if (isSignUp) {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                await updateProfile(userCredential.user, {
                    displayName: nameRef?.current?.value,
                    photoURL: DEFAULT_PROFILE_URL,
                });
            } else {
                await signInWithEmailAndPassword(auth, email, password);
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-black/80 p-8 rounded-xl backdrop-blur-sm animate-fade-in">
                <div>
                    <h2 className="text-center text-3xl font-extrabold text-white">
                        {isSignUp ? "Create your account" : "Welcome back"}
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="rounded-md shadow-sm space-y-4">
                        {isSignUp && (
                            <div className="relative">
                                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    ref={nameRef}
                                    type="text"
                                    className="appearance-none rounded-lg relative block w-full px-10 py-3 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-cinegpt-accent focus:border-cinegpt-accent focus:z-10 sm:text-sm"
                                    placeholder="Full Name"
                                />
                            </div>
                        )}
                        
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                ref={emailRef}
                                type="email"
                                className="appearance-none rounded-lg relative block w-full px-10 py-3 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-cinegpt-accent focus:border-cinegpt-accent focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        
                        <div className="relative">
                            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                ref={passwordRef}
                                type="password"
                                className="appearance-none rounded-lg relative block w-full px-10 py-3 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-cinegpt-accent focus:border-cinegpt-accent focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    {errorMessage && (
                        <div className="text-red-500 text-sm font-medium bg-red-100/10 p-3 rounded-lg">
                            {errorMessage}
                        </div>
                    )}

                    <button
                        onClick={handleButtonClick}
                        disabled={isLoading}
                        className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-cinegpt-primary hover:bg-cinegpt-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cinegpt-accent transition-all duration-200"
                    >
                        {isLoading ? (
                            <FaSpinner className="animate-spin text-xl" />
                        ) : (
                            isSignUp ? "Sign Up" : "Sign In"
                        )}
                    </button>

                    <div className="text-center">
                        <button
                            onClick={() => setSignUp(!isSignUp)}
                            className="text-cinegpt-accent hover:text-cinegpt-accent/80 text-sm font-medium transition-colors duration-200"
                        >
                            {isSignUp ? "Already have an account? Sign In" : "New to CineGPT? Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Body;
