import React from "react";
import { Link } from "react-router-dom";
import WithLogging from "../components/WithLogging";

const NavigateTo: React.FC<{ path: string }> = ({ path }) => {
  return (
    <div className="container mx-auto py-10">
      <p>Invalid criteria</p>
      <Link to={path} className="block w-20 mt-4 py-2 px-4 text-white bg-orange-500 rounded-md border uppercase text-sm text-center">
        Back
      </Link>
    </div>
  );
};

export default WithLogging(NavigateTo, "NavigateTo");
