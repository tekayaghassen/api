import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

const AppNavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/" style={{ color: "white" }}>
        Contact App
      </Link>
    </Navbar>
  );
};

export default AppNavBar;

