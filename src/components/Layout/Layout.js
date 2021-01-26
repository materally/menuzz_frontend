import React, { Fragment } from "react";

// Components
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const Layout = ({ children }) => {
  return (
    <Fragment>
        <Navbar />
        {children}
        <Footer />
    </Fragment>
  );
};

export default Layout;
