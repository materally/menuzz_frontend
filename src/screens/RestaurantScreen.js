import React, { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, useHistory } from "react-router-dom";

// utils
import { menuHours, openHours } from '../helpers';

// Components
import API, { API_SECRET } from '../services/api.service';
import PageLoading from '../components/UI/PageLoading';
import Header from '../components/Restaurant/Header';

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
            console.log(res.data.data)
            if(res.status === 200){
                const d = res.data.data;
                console.log(d)
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
                </Fragment>
                )
            }
        }
    }

    return (
    <Fragment>
        <Helmet>
            <title>{name} {city} - Heti menü, napi menü!</title>
            <meta name="description" content="Keress ebédet a közeledben! Heti menü, napi menü" />
        </Helmet>
        { renderPage() }
    </Fragment>
    );
};

export default RestaurantScreen;
