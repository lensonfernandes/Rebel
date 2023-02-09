import React, { useEffect, useState } from "react";

export const Pagination = () => {
  let limit = 10;
  const totalPages = 5000 / limit;

  let [pageNo, setPageNo] = useState(0);
  let [pageData, setPageData] = useState([]);

  let pageNoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((data) => data.json())
      .then((res) => {
        let newPageData = res.slice(pageNo*limit, pageNo*limit+ limit)
        console.log(res);
        console.log(newPageData)
        setPageData(newPageData)
        
      });
  }, [pageNo ]);

  return (
    <>
      <h1>Images</h1>
      {pageNoArray.map((pageNo, i) => (
        <button>{pageNo}</button>
      ))}
      {
        pageData.map((data, index)=>(
            <div key={index}>
                <h2>{data.title}</h2>
                <img src={data.url} />
            </div>
        ))
      }
    </>
  );
};
