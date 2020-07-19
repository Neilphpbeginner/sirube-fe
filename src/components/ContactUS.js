import React from "react";
import Menu from "./Menu";
import { Helmet } from "react-helmet";

export default function ContactUS() {
  return (
    <div>
      <Helmet>
        <title>SIRUBE | Contact Us</title>
        <meta name="description" content="Contact SIRUBE" />
        <meta name="keywords" content="contact, rudi, ben" />
      </Helmet>
      <Menu />
    </div>
  );
}
