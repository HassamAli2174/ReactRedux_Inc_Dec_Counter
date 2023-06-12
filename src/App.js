import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber, multiNumber, divNumber} from "./Action/index";


const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const mySecondState = useSelector((state) => state.multiTheNumber);

  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>Using React and Redux</h4>
        <div className="quantity">
          <a className="quantity_minus" title="Decrement" onClick={() => dispatch(decNumber())}>
            <span>-</span>
          </a>
          <input type="text" name="quantity" className="quantity_input" value={myState} />
          <a className="quantity_plus" title="Increment" onClick={() => dispatch(incNumber(5))}>
            <span>+</span>
          </a>
        </div>
      </div>

      <div className="container my-5">
        <h1>Multiplication/Division counter</h1>
        <h4>Using React and Redux</h4>
        <div className="quantity">
          <a className="quantity_minus" title="Divide" onClick={() => dispatch(divNumber())}>
            <span>/</span>
          </a>
          <input type="text" name="quantity" className="quantity_input" value={mySecondState} />
          <a className="quantity_plus" title="Multiply" onClick={() => dispatch(multiNumber(5))}>
            <span>*</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
