"use client";
import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/experience", element: <Experience />},
    {path: "/contact", element: <Contact />},
]);

export default router