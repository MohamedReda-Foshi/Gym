import React from "react";
import Button from "../components/Button";

function ProductPage() {
  return (
    <div className="py-28 px-4">
      <div className="flex-row gap-1 border rounded-2xl grid grid-cols-5 bg-slate-700 ">
        <div className="p-3 col-span-1">
          <img
            className="h-[200px] rounded-r-xl "
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="Product"
          />
        </div>

        <div className="flex-col p-5  col-span-4">
          <h1 className="text-4xl font-bold pb-3 flex ">Title</h1>

          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not
            </p>
          </div>
          <Button button="add to card"/>
        </div>
    </div>
    </div>
     
  );
}

export default ProductPage;
