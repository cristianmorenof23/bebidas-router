import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import FavoritosPage from "./pages/FavoritosPage";
import Layout from "./layouts/Layout";

export default function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} index />
          <Route path="/favoritos" element={<FavoritosPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
