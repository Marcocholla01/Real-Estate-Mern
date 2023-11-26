import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from "../../firebase";
import { BASE_URL } from "../../Url";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../../redux/user/userSlice";
import { useNavigate} from 'react-router-dom';

function GoogleOauth() {
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider()
    const auth = getAuth(app)

    const result = await signInWithPopup(auth, provider);


    const res = await fetch(`${BASE_URL}/api/auth/google`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: result.displayName,
        email: result.user.email,
        photo: result.user.photoURL
      })
    })
    const data = await res.json()
    dispatch(signInSuccess(data))
    navigate(`/`)
    try {
    } catch (error) {
      console.log("could not sign in with Google", error)


    }
  };
  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="bg-blue-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
    >
      continue with google
    </button>
  );
}

export default GoogleOauth;
