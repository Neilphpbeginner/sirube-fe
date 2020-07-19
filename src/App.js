import React from "react";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import ContactUS from "./components/ContactUS";
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <div>
      <Helmet>
        <title>SIRUBE Services and Consulting</title>
        <meta name="description" content="COVID-19 Cleaning Services" />
        <meta name="keywords" content="cleaning, sevices" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact_us" component={ContactUS} />
      </Switch>
    </div>
  );
}
