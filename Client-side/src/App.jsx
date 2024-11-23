import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BaseLayout from "./Components/Layout/BaseLayout";
import PlaceholderPage from "./Components/Common/PlaceholderPage";
import Home from "./Pages/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* BaseLayout includes shared components */}
        {/* BaseLayout wraps all pages */}
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          {/* Other Pages */}
          <Route path="shop" element={<PlaceholderPage />} />
          <Route path="product" element={<PlaceholderPage />} />
          <Route path="contact" element={<PlaceholderPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
