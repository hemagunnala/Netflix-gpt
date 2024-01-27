import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload;
        },
        addTrailerVideo: (state,action)=>{
            state.trailerVideo = action.payload;
        },
        addUpcomingMovies: (state,action)=>{
            state.upComingMovies = action.payload;
        },
        addTopRatedMovies :(state,action)=>{
            state.topRatedMovies = action.payload;
        }
    }
})

// export actions and reducer

export const {addNowPlayingMovies,addTrailerVideo, addPopularMovies,addTopRatedMovies,addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;