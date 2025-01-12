import { useRef, useState } from "react";
import validateLogin from "../../utils/validateLogin";
import { auth } from "../../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/user";
import { useNavigate } from "react-router";
import { DEFAULT_PROFILE_URL } from "../../utils/constants";


const Body = () => {
  const userDispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignUp, setSignUp] = useState(true);
  const [errorMessage, setError] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const handleSuccess = (user) => {
    userDispatch(
      addUser({
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        profilePic: DEFAULT_PROFILE_URL,
      })
    );
    navigate("/browse");
  };
  function handleButtonClick() {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const message = validateLogin(email, password);
    console.log(message);
    setError(message);
    if (message !== null) return; // data invalid.

    if (isSignUp) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          // Update the user's profile with their name
          return updateProfile(user, {
            displayName: nameRef?.current?.value,
            profilePic: DEFAULT_PROFILE_URL,
          }).then(() => user);
        })
        .then((user) => {
          handleSuccess(user);
        })
        .catch((error) => {
          setError(error.code + "-" + error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          handleSuccess(user);
        })
        .catch((error) => {
          setError(error.code + "-" + error.message);
        });
    }
  }
  function handleFormChange() {
    setSignUp(!isSignUp);
  }
  return (
    <div className="Body">
      <form
        onClick={(e) => e.preventDefault()}
        className="w-3/12 h-3/4 bg-black bg-opacity-75 my-6 mx-auto p-6 flex flex-col space-y-11 rounded-lg shadow-lg"
      >
        <h1 className="text-white text-3xl">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUp && (
          <input
            ref={nameRef}
            className="w-full p-3 text-lg text-white bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={emailRef}
          className="w-full p-3 text-lg text-white bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          type="email"
          placeholder="Email"
        />
        <input
          ref={passwordRef}
          className="w-full p-3 text-lg text-white bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          type="password"
          placeholder="Password"
        />
        {errorMessage && (
          <p className="text-red-700 font-bold">{errorMessage}</p>
        )}
        <button
          onClick={handleButtonClick}
          className="w-full py-3 text-lg font-semibold text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Submit
        </button>
        <p onClick={handleFormChange} className="text-white cursor-pointer">
          {isSignUp ? "Already a user? Sign In" : "New to Netflix? Sign Up Now"}
        </p>
      </form>
    </div>
  );
};

export default Body;
