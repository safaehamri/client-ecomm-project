import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BaseLayout from "./Components/BaseLayout";
import HomePageLayout from "./Components/HomePageLayout";
import PlaceholderPage from "./Components/PlaceholderPage";
import Home from "./Components/Home";

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
