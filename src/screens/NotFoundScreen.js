import React from "react";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const NotFoundScreen = () => {
  return (
    <section className="section pt-5 pb-5 osahan-not-found-page">
        <Helmet>
            <title>A keresett oldal nem található!</title>
            <meta name="description" content="Keress ebédet a közeledben! Heti menü, napi menü" />
        </Helmet>
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center pt-5 pb-5">
                    <img className="img-fluid" src="/img/404.png" alt="404" />
                    <h1 className="mt-2 mb-2">Az oldal nem található</h1>
                    <p>Uh-oh! A keresett oldal nem létezik!</p>
                    <Link className="btn btn-primary btn-lg" to="/">UGRÁS A KEZDŐLAPRA</Link>
                </div>
            </div>
        </div>
    </section>
  );
};

export default NotFoundScreen;
