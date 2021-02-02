import React from "react";

// Components

const Menu = (props) => {
    
    return (
        <section className="offer-dedicated-nav bg-white border-top-0 shadow-sm">
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <ul className="nav" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="pills-info-tab" data-toggle="pill" href="#pills-info" role="tab" aria-controls="pills-info" aria-selected="true">Étterem információk</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-gallery-tab" data-toggle="pill" href="#pills-gallery" role="tab" aria-controls="pills-gallery" aria-selected="false">Galéria</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-ratings-tab" data-toggle="pill" href="#pills-ratings" role="tab" aria-controls="pills-ratings" aria-selected="false">Értékelések</a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;