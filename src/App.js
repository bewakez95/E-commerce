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
import PrivateRoute from "./components/layouts/privateRoute/PrivateRoute";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { getUserInfo } from "./redux/auth/userAction";
import { auth } from "./firebase-config";

function App() {
  const dispatch = useDispatch();
  onAuthStateChanged(auth, (user) => {
    if (user?.uid) {
      dispatch(getUserInfo(user.uid));
    }
  });
  return (
    <div>
      <Routes>
        {/* //public */}
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/" element={<ErrorPage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
        {/* //private */}

        <Route
          path="/category"
          element={
            <PrivateRoute>
              <Category />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/customer"
          element={
            <PrivateRoute>
              <Customers />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <PaymentOptions />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/product"
          element={
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/reviews"
          element={
            <PrivateRoute>
              <Reviews />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
