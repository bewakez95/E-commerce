import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import "../src/App.css";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
import Dashboard from "./pages/dashboard/Dashboard";
import Category from "./pages/category/Category";
import Customers from "./pages/customers/Customers";
import PaymentOptions from "./pages/paymentOptions/PaymentOptions";
import Product from "./pages/product/Product";
import Profile from "./pages/profile/Profile";
import Reviews from "./pages/reviews/Reviews";
import AdminLayout from "./components/layouts/AdminLayout";
import Orders from "./pages/orders/Orders";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div>
      <Routes>
        {/* //public */}
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/" element={<ErrorPage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
        {/* //private */}
        <Route path="/category" element={<Category />}></Route>
        <Route path="/customer" element={<Customers />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/payment" element={<PaymentOptions />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
      </Routes>
    </div>
  );
}

export default App;
