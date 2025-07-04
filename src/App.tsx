import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Proyecto from "./pages/Proyecto";
import Avances from "./pages/Avances";
import Home from "./pages/Home";
import Sidebar from "./lib/components/sidebar/Sidebar";
import Footer from "./lib/components/footer/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <BrowserRouter basename="/tp-grupal-dyw/">
      <div className="min-h-screen flex w-full">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} isMobile={isMobile} />

        <div
          className="flex flex-col flex-1 overflow-hidden"
        >
          <main className="flex-1 bg-primary overflow-auto md:ml-64">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/avances" element={<Avances />} />
              <Route path="/proyecto" element={<Proyecto />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
