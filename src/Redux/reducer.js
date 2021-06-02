import {  createSlice } from '@reduxjs/toolkit';




const usersContainer = createSlice({
    
    name:'usersBox',
    initialState:{
        userEmail:'',
        
        orderListData:[]
    },

    reducers:{
        userCred: (state, action) =>{
            state.userEmail = action.payload
        },
        accessOrderList: (state, action) =>{
            state.orderListData = action.payload
        }
    },
  

});

export const { userCred, accessOrderList } = usersContainer.actions;

export const reducer = usersContainer.reducer;