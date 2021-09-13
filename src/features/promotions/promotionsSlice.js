import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';

export const fetchPromotions = createAsyncThunk(
    'promotions/fetchPromotions',
    async () => {
        const response = await fetch(baseUrl + 'promotions');
        return response.json();
    }
);

const initialState = {
    isLoading: true, 
    errMsg: null, 
    promotionsArray: [] 
}

const promotionsSlice = createSlice({
    name: 'promotions',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPromotions.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchPromotions.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.promotionsArray = action.payload;
        },
        [fetchPromotions.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.payload;
        },
    },
});

export const selectFeaturedPromotion = (state) => {
      
    return state.promotions.promotionsArray.find(
        (item) => item.featured
    );
}


export const selectFetchPromotionsStatus = state => {
    const isLoading = state.promotions.isLoading
    const errMsg = state.promotions.errMsg
    return {
        isLoading,
        errMsg
    }
}

export const promotionsReducer = promotionsSlice.reducer;
