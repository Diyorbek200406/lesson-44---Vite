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
import Error from "./pages/Error";
import Faq from "./pages/help/Faq";
import Form from "./pages/help/Form";
// layout
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import ArticlesLayout from "./layout/ArticlesLayout";
import Articles from "./pages/articles/Articles";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="error" element={<Error />} />
        <Route path="*" element={<Navigate to="./error" />} />

        <Route path="contact" element={<ContactLayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="form" element={<Form />} />
        </Route>

        <Route path="articles" element={<ArticlesLayout />}>
          <Route index element={<Articles />} />
        </Route>
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
