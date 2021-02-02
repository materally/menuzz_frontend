import React, { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, useHistory, Link } from "react-router-dom";
import { FacebookProvider, Page } from 'react-facebook';

// utils
import { menuHours, openHours } from '../helpers';

// Components
import API, { API_SECRET } from '../services/api.service';
import PageLoading from '../components/UI/PageLoading';
import Header from '../components/Restaurant/Header';
import Menu from '../components/Restaurant/Menu';
import Info from '../components/Restaurant/Info';
import Gallery from '../components/Restaurant/Gallery';
import Ratings from '../components/Restaurant/Ratings';
import GoogleAds from '../components/Restaurant/GoogleAds';
import LocalAds from '../components/Restaurant/LocalAds';
import MenuHours from '../components/Restaurant/MenuHours';
import OpenHours from '../components/Restaurant/OpenHours';

const RestaurantScreen = () => {
    const { slug } = useParams();
    let history = useHistory();
    const [data, setData] = useState({});
    const [city, setCity] = useState('');
    const [name, setName] = useState('Menüzz');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
		API.get(`restaurant/${slug}`, {params: {'API_SECRET': API_SECRET} })
        .then(res => {
            if(res.status === 200){
                const d = res.data.data;
                setData(d)
                setName(d.name)
                setCity(d.address.city)
                setLoading(false);
            }
        })
        .catch(error => {
            history.push("/");
        });
    }, [history, slug])

    const renderPage = () => {
        if(loading){
            return <div style={{ padding: 20 }}><PageLoading /></div>
        }else{
            if(data.hasOwnProperty("restaurant_id")){
                const menuHour = menuHours.todayMenuHours(data.menu_hours);
                const openHour = openHours.todayOpenHours(data.opening_hours, 'header');
                return (
                <Fragment>
                    <Header 
                        data={data}
                        menuHour={menuHour}
                        openHour={openHour}
                    />
                    <Menu />
                    <section className="offer-dedicated-body pt-2 pb-2 mt-4 mb-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="offer-dedicated-body-left">
                                        <div className="tab-content" id="pills-tabContent">
                                            <Info 
                                                data={data}
                                            />
                                            <Gallery 
                                                images={data.images}
                                                name={data.name}
                                            />
                                            <Ratings 
                                                slug={data.slug}
                                            />
                                        </div> {/* tab-content */}
                                    </div> {/* offer-dedicated-body-left */}
                                </div> {/* col-md-8 */}
                                <div className="col-md-4">
                                    <p style={{ textAlign: 'center' }}>
                                        <Link to={"/city/"+city}>további éttermek <b>{city}</b> területén</Link>
                                    </p>
                                    {
                                        data.contact.facebook && (
                                            <div style={{ textAlign: 'center', paddingBottom: 20 }}>
                                                <FacebookProvider appId="1613042828876052">
                                                    <Page href={data.contact.facebook} tabs="timeline" />
                                                </FacebookProvider>
                                            </div>
                                        )
                                    }
                                    <MenuHours 
                                        menu_hours={data.menu_hours}
                                    />
                                    <OpenHours 
                                        open_hours={data.opening_hours}
                                    />
                                    {/* <GoogleAds />
                                    <LocalAds /> */}
                                </div> {/* col-md-4 */}
                            </div>
                        </div>
                    </section>
                </Fragment>
                )
            }
        }
    }

    return (
    <Fragment>
        <Helmet>
            <title>{name} {city} - Heti menü, napi menü!</title>
            <meta name="description" content={"Keress ebédet a " + city + " területén. " + city + " heti menü, napi menü"} />
            <link rel="canonical" href={process.env.REACT_APP_FRONTEND_URL + "/" + city} />
        </Helmet>
        { renderPage() }
    </Fragment>
    );
};

export default RestaurantScreen;
