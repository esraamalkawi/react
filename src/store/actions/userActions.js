import axios from "axios";
import * as actionTypes from "./types";

export const createUser = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:8000/signup", userData);
      dispatch({
        type: actionTypes.CREATE_USER,
        payload: res.data,
      });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};
