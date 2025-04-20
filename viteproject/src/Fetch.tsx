import React, { useEffect, useState } from 'react';

function Fetch() {
    console.log("started");
  const [data, setData] = useState([]);
  console.log("first called")
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from API
    console.log("second called")
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div>
      <h1>Data from API</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.slice(0, 5).map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Fetch;
