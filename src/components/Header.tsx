import logo from "../assets/ananas-logo.png";
import WithLogging from "./WithLogging";

const Header = () => {
  return (
    <header className="bg-gray-100  border-b-4 border-[#fe4f2a] w-full sticky top-0 z-50" data-testid="header">
      <h1 className="container mx-auto ">
        <img src={logo} alt="logo" />
      </h1>
    </header>
  );
};

export default WithLogging(Header, "Header");
