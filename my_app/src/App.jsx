import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";

// import { Home } from "./pages/Home";
// import { About } from "./pages/About";
// import { Skills } from "./pages/Skills";
// import { Projects } from "./pages/Projects";
// import { Contact } from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        
        <NavBar />

        <main className="flex-grow">
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;