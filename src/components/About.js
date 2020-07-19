import React from "react";
import Menu from "./Menu";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div>
      <Helmet>
        <title>SIRUBE | About</title>
        <meta name="description" content="About SIRUBE" />
        <meta
          name="keywords"
          content="consulting santizer cleaning services COC"
        />
      </Helmet>
      <Menu />
    </div>
  );
}
