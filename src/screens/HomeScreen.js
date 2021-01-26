import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

// Components
import Hero from '../components/Layout/Home/Hero';

const HomeScreen = () => {
  return (
    <Fragment>
        <Helmet>
            <title>Menüzz - Heti menü, napi menü!</title>
            <meta name="description" content="Keress ebédet a közeledben! Heti menü, napi menü" />
        </Helmet>
        <Hero />
    </Fragment>
  );
};

export default HomeScreen;
