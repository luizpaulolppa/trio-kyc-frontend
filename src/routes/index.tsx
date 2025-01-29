import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Identification from "../pages/Identification";

export function RoutesConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="identification" element={<Identification />} />
      </Routes>
    </BrowserRouter>
  )
}
