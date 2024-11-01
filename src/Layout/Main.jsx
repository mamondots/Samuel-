import { Outlet } from "react-router-dom";
import Header from "../Pages/Header/Header";
import Navbar from "../Pages/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
