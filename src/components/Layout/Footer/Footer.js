import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import { FacebookProvider, Page } from 'react-facebook';

const Footer = () => {
    return (
    <Fragment>
        <section className="footer pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12 col-sm-12">
                        <h6 className="mb-3">Éttermed van?</h6>
                        <form className="newsletter-form mb-1">
                            <div className="input-group">
                                <input type="text" placeholder="Írd be az e-mail címed" className="form-control" />
                                <div className="input-group-append">
                                    <button type="button" className="btn btn-primary">
                                        Küldés
                                    </button>
                                </div>
                            </div>
                        </form>
                        <p>Add meg az e-mail címedet és felvesszük veled a kapcsolatot!</p>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <h6 className="mb-3" style={{ textAlign: 'center' }}>Rólunk</h6>
                        <ul style={{ textAlign: 'center' }}>
                            <li><Link to="/">Mi ez?</Link></li>
                            <li><Link to="/">Kapcsolatfelvétel</Link></li>
                            <li><Link to="/">Blog</Link></li>
                            <li><Link to="/">Careers</Link></li>
                            <li><Link to="/">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12" style={{ textAlign: 'center' }}>
                        <FacebookProvider appId="1613042828876052">
                            <Page href="https://www.facebook.com/menuzzhu" />
                        </FacebookProvider>
                    </div>
                </div>
            </div>
        </section>
        <section className="footer-bottom-search pt-4 pb-4 bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <p className="text-black">VÁROSOK</p>
                        <div className="search-links">
                            <Link to="/city/Debrecen">Debrecen</Link> |  <Link to="/city/Biharkeresztes">Biharkeresztes</Link> | <Link to="/city/Kokad">Kokad</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer className="pt-4 pb-4 text-center">
            <div className="container">
                <p className="mt-0 mb-0">&copy; Minden jog fenntartva! - Menuzz.hu</p>
                <p><small className="mt-0 mb-0"> Verzió: 2.0 - 2021.02.16.</small></p>
                <small className="mt-0 mb-0"> Az esetleges elírásokért felelősséget nem vállalunk!</small>
            </div>
        </footer>
    </Fragment>
    )
}


export default Footer;