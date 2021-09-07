import { createContext, useReducer, useContext } from "react";
import { eventsReducer } from "../reducers/eventsReducer";
import axios from "axios";

const initialState = {
  loading: true,
  events: [],
  error: null,
};

export const eventsContext = createContext(initialState);

const EventsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(eventsReducer, initialState);

  //get all events
  async function getAllevents() {
    const config = {
      headers: {
        authorization: "token",
      },
    };
    const res = await axios.get("/api/events", config);
    dispatch({
      type: "GET_EVENTS",
      payload: res.data,
    });
  }

  //add a event
  async function addEvent(event) {
    const user = await JSON.parse(localStorage.getItem("userInfo"));
    console.log(user);
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: user.token,
      },
    };
    const res = await axios.post("/api/events", event, config);
    dispatch({
      type: "ADD_EVENT",
      payload: res.data,
    });
    console.log(user);
  }

  return (
    <eventsContext.Provider
      value={{
        events: state.events,
        loading: state.loading,
        getAllevents,
        addEvent,
      }}
    >
      {children}
    </eventsContext.Provider>
  );
};

export default EventsContextProvider;
