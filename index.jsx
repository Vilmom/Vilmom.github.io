import React from 'react';
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./src/landingPage/landingPage";
import { Projects } from "./src/projects/projects";
import { Education } from "./src/education/education";
import { JobHistory } from "./src/jobHistory/jobHistory";
import { Contact } from "./src/contact/contact";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/job-history" element={<JobHistory />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
);