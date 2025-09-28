import { createSlice } from "@reduxjs/toolkit";


// const initialState = {
//   title:'java',
//   text:'text'
// }

const MainSlice = createSlice({
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

export const mainActions = MainSlice.actions;
export default MainSlice.reducer;