import { createSlice } from '@reduxjs/toolkit';




const usersContainer = createSlice({
    
    name:'usersBox',
    initialState:{
        userEmail:'',
    },

    reducers:{
        userCred: (state, action) =>{
            state.userEmail = action.payload
        }
    }

});

export const { userCred } = usersContainer.actions;

export const reducer = usersContainer.reducer;