import {  createSlice } from '@reduxjs/toolkit';




const usersContainer = createSlice({
    
    name:'usersBox',
    initialState:{
        userEmail:'',
        
        orderListData:[],
        stockListData:0
    },

    reducers:{
        userCred: (state, action) =>{
            state.userEmail = action.payload
        },
        accessOrderList: (state, action) =>{
            state.orderListData = action.payload
        },
        accessTotalStock: (state, action) =>{
            state.stockListData = action.payload
        },
    },
  

});

export const { userCred, accessOrderList, accessTotalStock } = usersContainer.actions;

export const reducer = usersContainer.reducer;