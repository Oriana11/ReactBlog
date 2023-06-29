import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { ProductList } from "./pages/ProductList";
import { ProductDetail } from "./pages/ProductDetail";
import { Contact } from "./pages/Contact";
import { Admin } from "./pages/Admin";
import { PageNotFound } from "./pages/PageNotFound";
import { ContactIta } from "./components/ContactIta";
import { ContactEu } from "./components/ContactEu";
import { ContactDk } from "./components/ContactDk";

import "./App.css";

function App() {
  const user = true;

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="contact" element={<Contact />}>
            <Route path="ita" element={<ContactIta />} />
            <Route path="eu" element={<ContactEu />} />
            <Route path="dk" element={<ContactDk />} />
          </Route>
          <Route
            path="admin"
            element={user ? <Admin /> : <Navigate to="/" />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
