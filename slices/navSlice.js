import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    origin: null,
    desination: null,
    travelTimeInformation: null
}

export const navSlice = createSlice ({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.desination = action.payloads;
        },
        settravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payloads;
        },
    },
});

export const { setOrigin, setDestination, settravelTimeInformation} = navSlice.actions;

// Selectors
export const selectOrigin = (state) => state.nav.origin
export const selectdesination = (state) => state.nav.desination
export const selecttravelTimeInformation = (state) => state.nav.travelTimeInformation

export default navSlice.reducer;


