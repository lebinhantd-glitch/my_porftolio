import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HeroSection } from "./pages/HeroSection";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import { Contact } from "./pages/Contact";
import {Projects} from "./pages/Projects";
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <NavBar />

        <main>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;