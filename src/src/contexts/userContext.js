import axios from "axios";
import { createContext, useReducer } from "react";
import usersReducer from "../reducers/usersReducer";

const initialState = {
  isPending: true,
  user: {},
  error: null,
};

export const UsersContext = createContext();

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  //user login
  async function loginUser(user) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("/api/users/login", user, config);

    await localStorage.setItem("userInfo", JSON.stringify(data));

    const userLogin = (await localStorage.getItem("userInfo"))
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;

    dispatch({
      type: "LOGIN_USER",
      payload: userLogin,
    });
    //console.log(data)
  }

  //register user
  async function registerUser(newuser) {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post("/api/users/register", newuser, config);
      await localStorage.setItem("userInfo", JSON.stringify(data));
      const userLogin = (await localStorage.getItem("userInfo"))
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null;

      dispatch({
        type: "REGISTER_USER",
        payload: userLogin,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  //logout
  const logout = async () => {
    await localStorage.removeItem("userInfo");
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <UsersContext.Provider
      value={{
        loginUser,
        user: state.user,
        isPending: state.isPending,
        registerUser,
        logout,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UserContextProvider;
