import React, { useEffect, useState } from "react"; // Fixed import of useEffect and useState
import Item from "./Item";
import Axios from 'axios';

function ShopI() {
  const [supplement, setSupplement] = useState([]); // Using an array as initial state

  useEffect(() => {
    // Fetch data from the API
    Axios.get("http://localhost:5000/Product")
      .then((res) => {
        console.log(res.data);  // Log the response here
        setSupplement(res.data); // Set the response data to the state
      })
      .catch((err) => {
        console.error(err); // Log any errors
      });
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="flex-col justify-center">
      <div className="px-6">
        <h1 className="text-5xl font-bold py-4">Buy your supplement</h1>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center">
        {supplement.map((supplement) => {
          return (
            <div key={supplement.id}> {/* Make sure to add a unique key */}
              <Item
                nameItem={supplement.ProductName} 
                price={supplement.Price}
                infoItem={supplement.Information}
                storage={supplement.StorageNumber} 
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShopI;
