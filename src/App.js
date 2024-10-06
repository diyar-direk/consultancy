import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import Contact from "./pages/contact/Contact.jsx";
import NotFound from "./pages/404/NotFound.jsx";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact_us" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {location.pathname !== "/contact_us" && <Footer />}
    </div>
  );
}

export default App;
