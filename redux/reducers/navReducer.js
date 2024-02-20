import { createSlice } from "@reduxjs/toolkit"

// state 
const initialState = {
    origin:null,
    destination:null,
    travelTimeInformation:null   
}

export const navReducer = createSlice({
    name:"nav",
    initialState:initialState,
    // dispatcher to send data and action into data layer
    reducers:{
        setOrigin:(state,action) => {
            state.origin = action.payload
        },
        setDestination:(state,action) => {
            state.destination = action.payload
        },
        setTravelTimeInformation:(state,action) => {
            state.travelTimeInformation = action.payload
        }
    }
})


// action will be used with useDispatch()
export const {setOrigin,setDestination,setTravelTimeInformation} = navReducer.actions


//selectors will be used with  useSelector()
export const selectOrigin = (state) => state.nav.origin
export const selectDestination = (state) => state.nav.destination
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation


// reducer
export default navReducer.reducer