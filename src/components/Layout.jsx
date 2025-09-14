import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <div className="component-layout">
        <Header />
        <div className=" basic-inner">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
