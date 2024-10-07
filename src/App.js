import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import Contact from "./pages/contact/Contact.jsx";
import NotFound from "./pages/404/NotFound.jsx";
import Services from "./pages/services/Services.jsx";
import JoinUs from "./pages/contact/joinUs.jsx";

function App() {
  const location = useLocation();
  const showFooter =
    location.pathname !== "/contact_us" && location.pathname !== "/join_us";
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact_us" element={<Contact />} />
        <Route path="/join_us" element={<JoinUs />} />
        <Route path="/our_services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
