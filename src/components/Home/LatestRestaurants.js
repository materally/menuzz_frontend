import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';

// utils
import API, { API_SECRET } from '../../services/api.service';
import PageLoading from '../UI/PageLoading';
import { menuHours } from '../../helpers';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// components

const LatestRestaurants = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        API.get(`restaurant/getForCarousel`, {params: {'API_SECRET': API_SECRET} })
        .then(res => {
            if(res.status === 200){
                setRestaurants(res.data);
                setLoading(false);
            }
        })
        .catch(error => console.log("Error: "+error));
    }, [])

    const renderLatestRestaurants = () => {
        return restaurants.length > 0 && restaurants.map((r, index) => {
            const menuHour = menuHours.todayMenuHours(r.menu_hours);
            return <div className="item" key={index}>
                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                    <div className="list-card-image">
                        <Link to={`restaurants/${r.slug}`}>
                            <img src={`${r.logo}`} className="img-fluid item-img" alt={`${r.name}`}/>
                        </Link>
                    </div>
                    <div className="p-3 position-relative">
                        <div className="list-card-body">
                            <h6 className="mb-1"><Link to={`restaurants/${r.slug}`} className="text-black">{r.name}</Link></h6>
                            <p className="text-gray mb-3">{r.address.city} {r.address.street} {r.address.address}</p>
                            <p className="text-gray mb-3 time"><span className={` ${menuHour.classname} rounded-sm pl-2 pb-1 pt-1 pr-2`}><b>MENÜ</b> {menuHour.time}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        })
    }

    return (
    <section className="section pt-5 pb-5 products-section">
        <div className="container">
        <div className="section-header text-center">
            <h2>Legújabb éttermek</h2>
            <p>Frissen feltöltött menüzős éttermek a Menüzz.hu rendszerébe</p>
            <span className="line"></span>
        </div> {/* section-header text-center */}
        <div className="row">
            <div className="col-md-12">
               { loading && <PageLoading /> }
                <OwlCarousel 
                    className='owl-carousel-four owl-theme'  
                    margin={10} 
                    items={4}
                >
                    { renderLatestRestaurants() }    
                </OwlCarousel>
            </div>
        </div> {/* row */}
        </div> {/* container */}
    </section>
    )
}

export default LatestRestaurants;