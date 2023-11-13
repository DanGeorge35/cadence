import React, { useState } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
  };

//   const stopLoading = () => {
//     setLoading(false);
//   };
  startLoading;

  return (
    <div className={`loader ${loading ? "visible" : "hidden"}`}>
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
