import React, { useEffect, useState } from "react"; // Fixed import of useEffect and useState
import Item from "./Item";
import Axios from "axios";

function ShopAll() {
  const [supplement, setSupplement] = useState([]);

  useEffect(() => {
    
    Axios.get("http://localhost:8000/api/products")
      .then((res) => {
        console.log(res.data);
        setSupplement(res.data);
        console.log("send data",res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="flex-col justify-center">
        <div className="px-6">
          <h1 className="text-5xl font-bold py-4">Buy your supplement</h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center ">
          {supplement
            .reduce((acc, supplement, index) => {
              // Start a new row for every 3rd item
              if (index % 3 === 0) {
                acc.push([]);
              }

              // Add current supplement to the current row (last one in `acc`)
              acc[acc.length - 1].push(supplement);

              return acc;
            }, [])
            .map((row, rowIndex) => (
              <div
                key={rowIndex}
                style={{
                  
                  
                  
                }}
              >
                {row.map((supplement) => (
                  <div key={supplement.id}>
                    <Item
                      nameItem={supplement.ProductName}
                      price={supplement.Price}
                      infoItem={supplement.Information}
                      storage={supplement.StorageNumber}
                      className="flex"

                    />
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ShopAll;
