import {createContext, useReducer} from "react";
import eventReducer from "../reducers/eventReducer";
import axios from "axios";

const initialState={
    loading:true,
    event:[],
    error: null
}

export const EventContext = createContext();

const EventContextProvider=({children}) => {
    const [state, dispatch]= useReducer(eventReducer, initialState)

    //get all events
    async function getEvent() {
     const res = await axios.get("https://radiant-everglades-86669.herokuapp.com/api/v2/food")
     try{
         dispatch({
             type: "GET_ALL_EVENTS",
             payload:res.data
         })
 } catch (error){
     console.log(error)
 }
    }
    return (
        <EventContext.Provider value = {{ getFood, food:state.food}}> {children}</EventContext.Provider>
    )
}


export default EventContextProvider;