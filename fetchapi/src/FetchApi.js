import React, { useEffect, useState } from "react";

const FetchApi = () => {
  let [result, setResult] = useState([]);
  let temp = [];

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((data) => data.json())
      .then((jsondata) => {
        //temp.push(jsondata)
        console.log(jsondata);
        setResult(jsondata);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {" "}
      <ul>
        {result.map((ele, index) => (
          <ul key={index} style={{ backgroundColor: "grey", margin: "1vh", padding:"1vh" }}>
            <h2>{ele.name}</h2>
            <h3>{ele.website}</h3>
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default FetchApi;
