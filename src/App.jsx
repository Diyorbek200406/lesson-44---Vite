import "./App.css";
// package
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
// layout
import RootLayout from "./layout/RootLayout";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate to="./error" />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
