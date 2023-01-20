import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import "./styles.css";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
