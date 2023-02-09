import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  let [search, setSearch] = useState("");

  let searchCity = () =>{


  }

  return (
    <div className="App p-3">
      
      <h2 className="">Whats the weather like?</h2>
      <div>
        <label className="form-label" for="location">
          Enter city
        </label>
        <input
          type="text"
          className="form-control "
          id="location"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        ></input>
        <button className='btn bg-primary text-white m-2' onClick={searchCity}>Search</button>
      </div>
    </div>
  );
}

export default App;
