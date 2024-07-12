import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarElement from "./components/navbar";
import AllProductes from "./components/allproductes";
import BannerElement from "./components/banner";
import FooterElement from "./components/footer";
import AboutElemets from "./components/aboutUs";
import ContactElemets from "./components/contactUs";
import Singleproducts from "./components/singleproducts";
import AddtoCards from "./components/addToCards";
import { ToastProvider } from "react-toast-notifications";
import GetCategories from "./components/getcategories";
import CartContext from "./context/cart_context";
// import { ShopContext } from "./context/cart_context";

function App() {
  // const [search, setSearch] = useState(""); 
  return (
    <ToastProvider autoDismissTimeout={3000}>
      <BrowserRouter>
        <NavbarElement  />
        <CartContext>
          <Switch>
            <Route exact path="/" component={BannerElement} />
            <Route exact path="/all-products" component={AllProductes} />
            <Route
              exact
              path="/all-products/:productId"
              component={Singleproducts}
            />
            <Route exact path="/addtocarts" component={AddtoCards} />
          </Switch>
          <GetCategories />
          <AboutElemets />
          <ContactElemets />
          <FooterElement />
          </CartContext>
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;
