import { useState } from "react";
import Button from "./Button";
import Axios from "axios";

function CreateProduct() {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [info, setinfo] = useState("");

  function handleCreateProduct(e) {
    e.preventDefault(); // Prevent form submission from refreshing the page
    
    Axios.post("http://localhost:8000/api/createproduct", {
      ProductName: name,
      Price: price,
      Information: info,
      })
      .then((res) => {
        console.log("Product created successfully!");
        console.log(res);
        setname("");
        setprice("");
        setinfo("");
        
        
      })
      .catch((err) => {
        console.error("Error creating product:", err);
      });
  }

  return (
    <div className="py-24 bg-gray-700 flex-col  items-center justify-center rounded-lg border-solid flex px-10">
    
    <div className="text-black flex-col p-16">
        <p>Product Name: {name}</p>
        <p>Price: {price}</p>
        <p>Information: {info}</p>
      </div>
      <h1 className="text-4xl font-bold flex py-5">
          Create Product
      </h1>  
      <div className="400 p-10 rounded-lg border-solid border-2">

      <form onSubmit={handleCreateProduct}>
        <p className="text-black">Product Name:</p>
        <input
          className="text-black w-60"
          type="text"
          name="ProductName"
          placeholder="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <p className="text-black">Price:</p>
        <input
          className="text-black w-60 solid"
          type="number"
          name="Price"
          placeholder="price"
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />
        <label>
          <p className="text-black">Information:</p>
          <input
            className="text-black w-60 h-32"
            name="Information"
            type="text"
            placeholder="Information"
            value={info}
            onChange={(e) => setinfo(e.target.value)}
          />
        </label>
        {/* Button to trigger product creation */}
        <Button button="Create Product" />
      </form>
        </div>
    </div>
  );
}

export default CreateProduct;
