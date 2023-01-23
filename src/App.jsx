import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const details = [
    {
      head: "Free",
      cost: "$0",
      user: "single User",
      storages: "5Gb storage",
      access: "Community Access",
      projects: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      domain: "Free Subdomain",
      report: "Monthly Status Reports",
    },
    {
      head: "Plus",
      cost: "$9",
      user: "5 Users",
      storages: "50GB Storage",
      access: "Community Access",
      projects: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      domain: "Free Subdomain",
      report: "Monthly Status Reports",
    },
    {
      head: "Pro",
      cost: "$49",
      user: "Unlimited Users",
      storages: "150GB Storage",
      access: "Community Access",
      projects: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      domain: "Free Subdomain",
      report: "Monthly Status Reports",
    },
  ];
  return (
    <div className="App">
      <div className="header">
        <h1>Price List</h1>
      </div>

      <div className="container">
        <div className="row">
          {details.map((ele, index) => {
            return <Pricelist props={ele} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default App;
function Pricelist({ props }) {
  return (
    <div className=".col col-lg-4 col-md-6 ">
      <div className="card ">
        <div className="card-header text-center">
          <p className="text-muted">{props.head}</p>
          <label>
            <h3>{props.cost}</h3>
          </label>
          <small>/month</small>
        </div>
        <div className="card-body">
          <p>🔹{props.user}</p>
          <p>🔹{props.storages}</p>
          <p>🔹{props.access}</p>
          <p>🔹{props.projects}</p>
          <p>🔹{props.support}</p>
          <p>🔹{props.domain}</p>
          <p>🔹{props.report}</p>
          <div className="d-grid">
            <button className="btn btn-primary">Button</button>
          </div>
        </div>
      </div>
    </div>
  );
}
