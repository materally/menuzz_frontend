import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

// Components
import Hero from '../components/Home/Hero';
import LatestRestaurants from "../components/Home/LatestRestaurants";
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
        <LatestRestaurants />
    </Fragment>
  );
};

export default HomeScreen;
