import { Routes, Route, Link } from "react-router-dom";
import LayoutAdmin from "./components/pages/Admin/LayoutAdmin";
import ProductComponent from "./components/pages/Customer/ProductComponent";
import HomeComponent from "./components/pages/Customer/HomeComponent";
import Dashboard from "./components/pages/Admin/Dashboard";
import ProductManager from "./components/pages/Admin/ProductManager";
import OrderManager from "./components/pages/Admin/OrderManager";
import ShoppingCart from "./components/pages/Customer/ShoppingCart";
import CheckoutInfor from "./components/pages/Customer/CheckoutInfor";
import ProductDetails from "./components/pages/Customer/ProductDetails";
import LayoutCustomer from "./components/pages/Customer/LayoutCustomer";
import LoginComponent from "./components/pages/Register/LoginComponent";
import LayoutLogin from "./components/pages/Register/LayoutLogin";
import RegisterComponent from "./components/pages/Register/RegisterComponent";
import ForgotPasword from "./components/pages/Register/ForgotPasword";
import AuthRoute from "./util/AuthRoute";
import CheckoutShipping from "./components/pages/Customer/CheckoutShipping";
import CheckoutPayment from "./components/pages/Customer/CheckoutPayment";

function App() {
  return (
    <>
      <Link to={"/"}>Home</Link> |<Link to={"/admin"}>Admin</Link> |
      <Link to={"/login"}>Login</Link>
      <Routes>
        {/* customer route */}
        <Route
          path="/"
          element={
            <AuthRoute redirect={"/login"} keyStore={"customer"}>
              <LayoutCustomer />
            </AuthRoute>
          }
        >
          <Route index element={<HomeComponent />} />
          <Route path="product" element={<ProductComponent />} />
          <Route path="details" element={<ProductDetails />} />
          <Route path="shoppingcart" element={<ShoppingCart />} />
          <Route path="checkout-infor" element={<CheckoutInfor />} />
          <Route path="checkout-shipping-method" element={<CheckoutShipping />} />
          <Route path="checkout-payment" element={<CheckoutPayment />} />
        </Route>
        {/* admin route */}
        <Route
          path="/admin"
          element={
            <AuthRoute redirect={"/login"} keyStore={"admin"}>
              <LayoutAdmin />
            </AuthRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="product" element={<ProductManager />} />
          <Route path="order" element={<OrderManager />} />
        </Route>
        
        <Route path="/login" element={<LayoutLogin />}>
          <Route index element={<LoginComponent />} />
          <Route path="register" element={<RegisterComponent />} />
          <Route path="forgot-password" element={<ForgotPasword />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
