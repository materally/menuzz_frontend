import React from "react";

// utils
import { menuHours, openHours } from '../../helpers';
import PageLoading from '../UI/PageLoading';

// Components
import RestaurantItem from './RestaurantItem';

const Restaurants = (props) => {

    const renderRestaurants = () => {
        return props.restaurants.length > 0 && props.restaurants.map((r, index) => {
            const menuHour = menuHours.todayMenuHours(r.menu_hours);
            const openHour = openHours.todayOpenHours(r.opening_hours);
            return <RestaurantItem 
                        key={index}
                        image={r.logo}
                        name={r.name}
                        slug={r.slug}
                        address={r.address}
                        menuHour={menuHour}
                        openHour={openHour}
                        delivery={r.delivery.can_order}
                        phone={r.contact.phone_1}
                        menu_url={r.menu_url}
                    /> 
        })
    }

    return (
    <div className="col-md-12">
        { props.loading && <PageLoading /> }
        <div className="row">
            { (!props.init && props.restaurants.length === 0) && <div className="alert alert-danger" role="alert" style={{ width: '100%' }}>A szűrés nem hozott eredményt!</div> }
            { renderRestaurants() }
        </div> {/* row */}
    </div> /* col-md-8 */
    );
};

export default Restaurants;