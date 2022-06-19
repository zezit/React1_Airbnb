import React from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import "./style/style.css";

export default function App() {
    return (
        <main>
            <Navbar />
            <MainContent />
        </main>
    );
}