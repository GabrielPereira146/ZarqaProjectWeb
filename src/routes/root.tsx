import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import React from "react";
import { Footer } from "../components/footer";

export default function Root() {
    return (
        <>
            <Header />
            <div id="detail">
                <Outlet />
            </div>
            <Footer/>
        </>
    );
}