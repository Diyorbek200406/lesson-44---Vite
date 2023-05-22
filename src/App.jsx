import "./App.css";
// package
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <h1>My Articles</h1>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Navigate to="./error" />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
