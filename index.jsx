import React from 'react';
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./frontend/src/screens/landingPage/landingPage";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
        </Routes>
    </Router>
);