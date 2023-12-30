import React, { useState } from "react";
import Header from "../Header";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
      <Header />
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="logo"
      />
      <form className="absolute w-3/12 p-12 bg-black mx-auto my-36 left-0 right-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
       { !isSignInForm &&<input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700"
        />}
        <input
          type="email"
          placeholder="Email or Phone number"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        {/* <div>
          <span>
            <input type="checkbox" placeholder="Remember me" />
          </span>
          <span>Need help?</span>
        </div> */}
        <p  onClick={()=>{toggleSignInForm()}}>{isSignInForm ? "New to Netflix? Sign Up" : "Already user ? Sign In now"}</p>
      </form>
    </div>
  );
};

export default Login;
