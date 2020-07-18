import React from "react";
import "../css/menu.css";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="main-menu">
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6">Sirube</Typography>
          <div style={{ width: "100%" }}>
            <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
              <Box p={1}>
                <Link style={{ textDecoration: "none" }} to="/">
                  <Typography variant="h6" color="secondary">
                    Home
                  </Typography>
                </Link>
              </Box>
              <Box p={1}>
                <Link style={{ textDecoration: "none" }} to="/about">
                  <Typography variant="h6" color="secondary">
                    About
                  </Typography>
                </Link>
              </Box>
              <Box p={1}>
                <Link style={{ textDecoration: "none" }} to="/contact_us">
                  <Typography variant="h6" color="secondary">
                    Contact Us
                  </Typography>
                </Link>
              </Box>
            </Box>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
