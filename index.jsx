// src/App.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="container py-5 bg-light min-vh-100">
      <div className="card mx-auto" style={{ width: "18rem" }}>
        <img
          src="https://via.placeholder.com/300x200"
          className="card-img-top"
          alt="Product"
        />
        <div className="card-body">
          <h5 className="card-title">Classic Watch</h5>
          <p className="card-text">Price: ₹2,999</p>
          <button
            className="btn btn-primary"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Hide Details" : "Show Details"}
          </button>
          {showDetails && (
            <p className="mt-2">Waterproof h, 2-year warranty.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
