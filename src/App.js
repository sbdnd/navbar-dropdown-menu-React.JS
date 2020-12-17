import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import ContactUs from "./components/pages/ContactUs";
import SignUp from "./components/pages/SignUp";
import Marketing from "./components/pages/Marketing";
import Services from "./components/pages/Services";
import Consulting from "./components/pages/Consulting";
import Design from "./components/pages/Design";
import Products from "./components/pages/Products";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/marketing" component={Marketing} />
          <Route exact path="/consulting" component={Consulting} />
          <Route exact path="/design" component={Design} />
          <Route exact path="/products" component={Products} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
