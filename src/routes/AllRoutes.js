import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  Admin,
  ProductList,
  ProductDetail,
  Contact,
  ContactIta,
  ContactEu,
  ContactDk,
  PageNotFound,
} from "../pages";

export const AllRoutes = () => {
  const user = true;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="contact" element={<Contact />}>
          <Route path="ita" element={<ContactIta />} />
          <Route path="eu" element={<ContactEu />} />
          <Route path="dk" element={<ContactDk />} />
        </Route>
        <Route path="admin" element={user ? <Admin /> : <Navigate to="/" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
