import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  console.log(num);
  // function Increase() {
  //   return setNum((n) => n + 1);
  // }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-2 text-center">
          <button
            className="btn btn-success"
            onClick={() => setNum((n) => n + 1)}
          >
            Increase
          </button>
        </div>
        <div className="col-2 text-center">
          <h3 className="mt-3 mb-0">{num}</h3>
        </div>
        <div className="col-2 text-center">
          <button
            className="btn btn-success"
            onClick={() => setNum((n) => n - 1)}
          >
            Decrease
          </button>
        </div>
      </div>
      <div className="row justify-content-center align-items-center mt-5">
        <div className="col-2 text-center">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => setNum(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
