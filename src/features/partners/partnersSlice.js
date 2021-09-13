import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';

export const fetchPartners = createAsyncThunk(
    'partners/fetchPartners',
    async () => {
        const response = await fetch(baseUrl + 'partners');
        return response.json();
    }
);

const initialState = { 
    isLoading: true, 
    errMsg: null, 
    partnersArray: [] 
}

const partnersSlice = createSlice({
    name: 'partners',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPartners.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchPartners.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = null;
            state.partnersArray = action.payload;
        },
        [fetchPartners.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.payload;
        },
    },
});

export const selectFeaturedPartner = state => {
    return state.partners.partnersArray.find((item) => item.featured);
}

export const selectFetchPartnersStatus = state => {
    const isLoading = state.partners.isLoading
    const errMsg = state.partners.errMsg
    return {
        isLoading,
        errMsg
    }
}

export const partnersReducer = partnersSlice.reducer;
