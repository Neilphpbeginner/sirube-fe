import React from "react";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import ContactUS from "./components/ContactUS";

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact_us" component={ContactUS} />
      </Switch>
    </div>
  );
}
