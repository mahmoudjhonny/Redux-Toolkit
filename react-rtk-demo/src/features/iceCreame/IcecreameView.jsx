import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreameSlice";

export const IcecreameView = () => {
  const [value, setvalue] = useState(1);
  const numOfIceCreams = useSelector((state) => state.icecreame.numOfIceCreame);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number Of Ice Creames - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice Creame</button>
      <input
        type="text"
        value={value}
        onChange={(e) => setvalue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock Ice Creame
      </button>
    </div>
  );
};
