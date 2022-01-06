import Header from "./components/header";
import Home from "./home";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "./singleProduct";
import Footer from "./components/footer";
import { useState, useEffect } from "react";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import { ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import NotFound from "./notFound";
import CartContextProvider from "./context/cartContext";
import AddToCart from "./components/addToCart";
import axios from "axios";
import { removeUserSession, getToken, setUserSession } from "./utils/common";

function App() {
  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = getToken();
    if (!token) {
      return;
    }
    axios.defaults.headers = {
      "Content-Type": "application/json",
    };
    axios
      .post(`http://localhost:4000/verifyToken?token=${token}`, user)
      .then((response) => {
        setUserSession(response.data.token, response.data.user);
      })
      .catch((error) => {
        removeUserSession();
      });
    userSetstate(JSON.parse(localStorage.getItem("user")));
  }, []);
  injectStyle();
  const [search, setSearch] = useState("");
  const [showDailog, setShowDailog] = useState(false);
  const [user, userSetstate] = useState();
  const navigation = [
    { path: "#home", label: "Home" },
    { path: "#products", label: "Products" },
    { path: "#contact", label: "contact" },
  ];
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleShowDailog = () => {
    setShowDailog(!showDailog);
  };

  return (
    <>
      <CartContextProvider>
        <Header
          logo={["Muzzammil", <sup key={1}>ELECTRONICS</sup>]}
          navigation={navigation}
          onSearch={handleSearch}
          onShowDailog={handleShowDailog}
          user={user}
        />
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/" element={<Home search={search} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <AddToCart showDailog={showDailog} onShowDailog={handleShowDailog} />
        <Footer />
        <ToastContainer />
      </CartContextProvider>
    </>
  );
}

export default App;
