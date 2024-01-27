import React from "react";
import GptSearchBar from "../GptSearchBar";
import GptMovieSuggestions from "../GptMovieSuggestions";
import { LOGO } from "../../Utils/constants";

const GptSearch = ()=>{
    return <>
         <img
        className="absolute -z-10"
        src={LOGO}
        alt="logo"
      />
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </>
}

export default GptSearch;