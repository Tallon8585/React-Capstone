import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./styles/app.scss";

import CartProvider from "./context/CartProvider";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import SingleMerchItem from "./pages/SingleMerchItem";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";
import icons from "./helpers/icons";

icons();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route path="/products/:id" component={SingleMerchItem} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/cart" component={Cart} />

            <Redirect exact from="/" to="/home" />
          </Switch>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
