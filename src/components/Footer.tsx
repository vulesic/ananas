import React from "react";
import WithLogging from "./WithLogging";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-4 text-center" data-testid="footer">
      © Ananas {new Date().getFullYear()} test — Built with React and Tailwind by Dragan Vulešić{" "}
    </footer>
  );
};

export default WithLogging(Footer, "Footer");
