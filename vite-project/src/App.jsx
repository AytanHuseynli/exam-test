import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./Pages/Nopage/NoPage";
import Home from "./Pages/Home/Home";
import Layout from "./Layout/Layout";
import { HelmetProvider } from 'react-helmet-async';
import DetailPage from "./Pages/DetailPage/DetailPage";
import "./App.css"
export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="DetailPage" element={<DetailPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

