import React from "react";
import Menu from "./Menu";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainSection: {
    paddingTop: "4rem",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Menu />
      <section className={classes.mainSection}>
        <Typography variant="h4" color="initial">
          This page is still under construction.
        </Typography>
        <Typography variant="h4" color="initial">
          Please visit our contact page to send your enquiry.
        </Typography>
      </section>
    </div>
  );
}
