import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <p className="four">404!</p>
        <h1>Can't reach anything!</h1>
        <Link className="btn btn-primary" to={"/"}>
          Back
        </Link>
      </div>
    </section>
  );
};

export default Error;
