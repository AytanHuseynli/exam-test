import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import "./DetailPage.css"

function DetailPage() {
  const [details, setdetails] = useState([]);

  useEffect(() => {
    fetch('https://northwind.vercel.app/api/categories')
      .then((response) => response.json())
      .then((data) => setdetails(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Helmet>
        <title>DetailPage</title>
      </Helmet>
      <div>
        <h1>DetailPage</h1>
        <table border="1" style={{ width: '100%', textAlign: 'left', marginTop: '20px' }}>
          <thead style={{backgroundColor:"pink"}}>
            <tr className="tr">
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {details.map((x) => (
              <tr key={x.id}>
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DetailPage;
