import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* import BaseLayout from "./Components/Layout/BaseLayout";
 */
import MainLayout from "./Components/Layout/MainLayout";
import PlaceholderPage from "./Components/Common/PlaceholderPage";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* mainlayout includes shared components */}
        {/* mainlayout wraps all pages */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* Other Pages */}
          <Route path="shop" element={<Shop />} />
          <Route path="product" element={<PlaceholderPage />} />
          <Route path="contact" element={<PlaceholderPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
