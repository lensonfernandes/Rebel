import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    myName: "",
    age: "",
    salary: "",
    hobby: "",
  });

  return (
    <div>
      <form className="p-3">
        <div className="mb-3">
          <label className="form-label" for="name">
            {" "}
            Name
          </label>
          <input type="text" className="form-control" id="name" value={data.myName} onChange={e=>setData({...data, myName:e.target.value})}></input>
        </div>
        <div className="mb-3">
          <label className="form-label" for="age">
            {" "}
            Age
          </label>
          <input type="text" className="form-control" id="age" value={data.age} onChange={e=>setData({...data, age:e.target.value})}> </input>
        </div>
        <div className="mb-3">
          <label className="form-label" for="salary">
            {" "}
            Salary
          </label>
          <input type="text" className="form-control" id="salary" value={data.salary} onChange={e=>setData({...data, salary:e.target.value})}></input>
        </div>
        <div className="mb-3">
          <label className="form-label" for="hobby">
            {" "}
            Hobby
          </label>
          <input type="text" className="form-control" id="hobby" value={data.hobby} onChange={e=>setData({...data, hobby:e.target.value})}></input>
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
