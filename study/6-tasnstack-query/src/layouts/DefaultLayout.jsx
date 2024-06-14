import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default DefaultLayout;
