import Header from "../components/header/Header.tsx";
import Footer from "../components/footer/Footer.tsx";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  )
}
export default MainLayout