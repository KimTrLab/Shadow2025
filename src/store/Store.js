import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit";


// const initialState = {
//   title:'java',
//   text:'text'
// }

const mainSlice = createSlice({
  name : "mainSlice",
  initialState: [],
  reducers:{
    add:(status, action) => {
   //   initialState.title = action.payload.title;
      console.log(action.payload.title)
      status.push({title: action.payload.title, text: action.payload.text});
    },
    clear:(status)=>{
      return []
    }
  }
})

export const mainActions = mainSlice.actions;

export const store = configureStore({
  reducer: { 
    mainSlice: mainSlice.reducer,
  }
})

//export default mainSlice.reducer;