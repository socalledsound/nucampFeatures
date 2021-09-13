import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
// import { CAMPSITES } from '../../app/shared/CAMPSITES'
export const fetchCampsites = createAsyncThunk(
    'campsites/fetchCampsites',
    async () => {
        const response = await fetch(baseUrl + 'campsites');
        return response.json();
    }
);

const initialState = {
    isLoading: true, 
    errMsg: null, 
    campsitesArray: [],
}

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCampsites.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchCampsites.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = null;
            state.campsitesArray = action.payload;
        },
        [fetchCampsites.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.payload;
        },
    },
});

export const selectCampsites = state => state.campsites.campsitesArray

export const selectFeaturedCampsite = state => {
    return state.campsites.campsitesArray.find((item) => item.featured);
}

export const selectCampsiteById = campsiteId => state => {
    return state.campsites.campsitesArray.find(
        (campsite) => campsite.id === parseInt(campsiteId)
    );
}
 
export const selectFetchCampsitesStatus = state => {
    const campsitesLoading = state.campsites.isLoading
    const campsitesErrMsg  = state.campsites.errMsg
    return {
        campsitesLoading, 
        campsitesErrMsg 
    }
}

export const campsitesReducer = campsitesSlice.reducer;
