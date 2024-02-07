import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  params: [],
  prefix:"",
  url: "",
  paramsTwo: [],
  paramss:{},
};

export const apiSlice = createSlice({
  name: "params",
  initialState,
  reducers: {
    setParams : (state, action) =>{
     
      // state.params = action.payload.params;
      state.params = action.payload;
      //  state.username = action.payload;
             
    },

    setPrefix:(state, action) =>{
     
     
      state.prefix = action.payload;
   
             
    },
    setParamss : (state, action) =>{
     
     
      state.paramss = action.payload;
   
             
    },

    setParamsTwo:(state, action) =>{

      state.paramsTwo = action.payload
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

export const { setParams ,setPrefix,setParamss,setParamsTwo} = apiSlice.actions;
export default apiSlice.reducer;