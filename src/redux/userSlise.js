import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
   name:'userSlice',
   initialState:{
    user:null,
    users:null,
    isAuthentication:true,
   },
   reducers:{
  
    loginUser:(state,action)=>{
        state.user = action.payload
        state.isAuthentication = action.payload

        localStorage.setItem(JSON.stringify(state.user))
        localStorage.setItem(JSON.stringify(state.isAuthentication))
       
    }
     
   }
    
})


export default userSlice.reducer;

export const {loginUser} = userSlice.actions


