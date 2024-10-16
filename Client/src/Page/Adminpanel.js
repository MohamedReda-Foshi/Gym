import React from "react";
import { useState } from "react";
import Dashboard from "../components/Dashboard";
import CreateProduct from "../components/CreateProduct";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Adminpanel() {
  const [view, setView] = useState("dashboard");
  return (
    <div className="pt-28">
      <div className="min-h-screen p-4">
        <nav className="shadow-md rounded-lg p-4 flex justify-between">
          <Button button="Dashboard">
            <button onClick={() => setView("dashboard")}></button>
          </Button>
          <Link to="/CreateProduct">
            <Button button="Create Product"></Button>
          </Link>
        </nav>

        <div className="mt-4">
          {view === "dashboard" && <Dashboard />}
          {view === "create-product" && <CreateProduct />}
        </div>
      </div>
    </div>
  );
}

export default Adminpanel;
