import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../Utils/userSlice";
import { toggleGptSearchView } from "../../Utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../../Utils/constants";
import { changeLanguage } from "../../Utils/configSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store=>store.user);
    const showGptSearch = useSelector(store=>store.gpt.showGptSearch)

    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {   
            const {uid,email,displayName,photoURL} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
            navigate("/browse")
          } else {
             dispatch(removeUser()); 
             navigate("/")
          }
        });
        //unsubscribe is called when the component unmounts
        return ()=> unsubscribe();
  },[])
const handleSignOut = ()=>{
    signOut(auth).then(() => {
        navigate("/");
      }).catch((error) => {
        navigate("/error");
      });
}
  return (
    <div className="absolute px-8 w-full py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="log"
      />
      {user && <div className="flex p-2">
      {showGptSearch && <select className="p-2 m-2 bg-gray-900 text-white" onChange={(e)=>dispatch(changeLanguage(e.target.value))}>
          {SUPPORTED_LANGUAGES?.map(({identifier,name})=>{
            return <option key={identifier} value={identifier}>{name}</option>
          })}
        </select>}
        <button onClick={()=>dispatch(toggleGptSearchView())} className="py-2 px-4 m-2 mx-4 mx-2 bg-purple-800 text-white rounded-lg">{showGptSearch ? "Home Page" : "GPT Search"}</button>
        <img
         className="w-12 h-12"
          alt="userIcon"
          src={user?.photoURL}
        />
        <button onClick={handleSignOut} className="font-bold text-white">Sign Out</button>
      </div>}
    </div>
  );
};

export default Header;
