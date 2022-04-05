import React, { useReducer } from "react";
import DataContext from "./dataContext";
import dataReducer from "./dataReducer";
import { GET_ID, ID_ERROR } from "../types";
const DataState = (props) => {
  const initialState = {
    validId: [],
  };
  const msg = "viga";
  const [state, dispatch] = useReducer(dataReducer, initialState);
  //get day tasks
  const getId = async (id) => {
    try {
      const res = await fetch(`/api/IdValidator/37709296019`).then((x) =>
        x.json()
      );
      console.log("id res", res.data);
      dispatch({
        type: GET_ID,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ID_ERROR,
        payload: err.response.msg,
      });
    }
  };
  return (
    <DataContext.Provider
      value={{
        validId: state.validId,
        getId,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
export default DataState;
