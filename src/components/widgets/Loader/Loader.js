import React from "react";

import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="circle_area">
        <div>
          <div className="loading_circle" />
          <span className="loading_text">Preparing for you...</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
