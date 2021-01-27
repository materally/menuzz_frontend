import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

// Components
import Hero from '../components/Home/Hero';
import PopularCities from '../components/Home/PopularCities';

const HomeScreen = () => {
  return (
    <Fragment>
        <Helmet>
            <title>Menüzz - Heti menü, napi menü!</title>
            <meta name="description" content="Keress ebédet a közeledben! Heti menü, napi menü" />
        </Helmet>
        <Hero />
        <PopularCities />
    </Fragment>
  );
};

export default HomeScreen;
