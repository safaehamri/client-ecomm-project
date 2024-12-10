import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainLayout from "./Components/Layout/MainLayout";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import ShoppingCart from "./Pages/ShoppingCart";
import CheckoutDetails from "./Pages/CheckoutDetails";
import OrderComplete from "./Pages/OrderComplete";
import BaseLayoutCart from "./Components/Layout/BaseLyoutCart";
import ProfileLayoutPage from "./Components/Layout/ProfileLayoutPage";
import Account from "./Pages/Account";
import AddressPage from "./Pages/AddressPage";
import MyOrders from "./Pages/MyOrders";
import MyWishlist from "./Pages/MyWishlist";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* MainLayout includes shared components */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:productId" element={<Product />} />
          <Route path="contact" element={<Contact />} />
          {/* Shopping Cart Routes */}
          <Route path="cart" element={<BaseLayoutCart />}>
            <Route index element={<Navigate to="shopping-cart" />} />
            {/* Render individual pages inside ShoppingCart */}
            <Route path="shopping-cart" element={<ShoppingCart />} />
            <Route path="checkout" element={<CheckoutDetails />} />
            <Route path="order-complete" element={<OrderComplete />} />
          </Route>
          {/* profile page routes */}
          <Route path="profile" element={<ProfileLayoutPage />}>
            <Route index element={<Navigate to="Account" />} />
            <Route path="Account" element={<Account />} />
            <Route path="Address" element={<AddressPage />} />
            <Route path="myOrders" element={<MyOrders />} />
            <Route path="wantList" element={<MyWishlist />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
