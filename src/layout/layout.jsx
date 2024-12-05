import Footer from "./footer/Footer.jsx";
import Header from "./header/Header.jsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
        <Header/>
            <Outlet/>
        <Footer/>
        </>
    )
}