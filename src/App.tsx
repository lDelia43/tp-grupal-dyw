import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Proyecto from './pages/Proyecto';
import Avances from './pages/Avances';
import Home from './pages/Home';


const Navbar = () => (
  <nav className="bg-primary text-black p-4 flex gap-6">
    <Link to="/" className="hover:underline">Home</Link>
    <Link to="/avances" className="hover:underline">Avances</Link>
    <Link to="/proyecto" className="hover:underline">Proyecto</Link>
  </nav>
);

function App() {
  return (
    <BrowserRouter basename="/tp-grupal-dyw">
      <Navbar />
      <main className="p-6 bg-neutral-light min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/avances" element={<Avances />} />
          <Route path="/proyecto" element={<Proyecto />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
