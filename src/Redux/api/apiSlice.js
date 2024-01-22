import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  params: [],
  url: "",
};

export const apiSlice = createSlice({
  name: "params",
  initialState,
  reducers: {
    setParams : (state, action) =>{
     
      // state.params = action.payload.params;
      state.params = action.payload;
      //  state.username = action.payload;
             
    }
    // setMyData: (state, action) => {
    //   // 'params' ve 'url' değerlerini ayrı ayrı kontrol edip güncelleme
    //   if (action.payload.params !== undefined) {
    //     state.params = action.payload.params;
    //   }
    //   if (action.payload.url !== undefined) {
    //     state.url = action.payload.url;
    //   }
    // },
  },
});

export const { setParams } = apiSlice.actions;
export default apiSlice.reducer;