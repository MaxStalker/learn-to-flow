import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      This is main page
      <Link to="/lesson-1">Go to first lesson</Link>
    </div>
  );
};

export default Main;
