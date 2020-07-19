import React from "react";
import Menu from "./Menu";
import { Helmet } from "react-helmet";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Box,
  makeStyles,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  contactFormSection: {
    paddingTop: "4rem",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  root: {
    width: "75%",
    height: "100vh",
    backgroundColor: "green",
    label: {
      fontSize: "5rem",
    },
  },
}));

export default function ContactUS() {
  const classes = useStyles();
  return (
    <div>
      <Helmet>
        <title>SIRUBE | Contact Us</title>
        <meta name="description" content="Contact SIRUBE" />
        <meta name="keywords" content="contact, rudi, ben" />
      </Helmet>
      <Menu />
      <section className={classes.contactFormSection}>
        <div className={classes.root}>
          <FormControl>
            <FormLabel className={classes.contactFormSection.label}>
              Hello
            </FormLabel>

            <FormHelperText></FormHelperText>
          </FormControl>
        </div>
      </section>
    </div>
  );
}
