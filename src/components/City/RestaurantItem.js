import React from "react";
import { Link } from 'react-router-dom';

// Components
import styles from './RestaurantItem.module.css';

const RestaurantItem = (props) => {
    return (
        <div className={"col-md-3 col-sm-6 mb-4 pb-2 " + styles.RestaurantItem}>
            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <div className="list-card-image">
                    {
                        props.delivery === "1" && <div className="star position-absolute"><span className="badge badge-success"><i className="fas fa-truck"></i> KISZÁLLÍTÁS</span></div>
                    }
                    <div className="favourite-heart text-danger position-absolute"><a href={"tel: " + props.phone}><i className="fas fa-phone"></i> {props.phone}</a></div>
                    {
                        (props.menu_url !== null && props.menu_url !== undefined) && <div className="member-plan position-absolute"><a href={props.menu_url} target="_blank"><span className="badge badge-primary"><i className="fas fa-utensils"></i> MENÜ</span></a></div>
                    }
                    
                    <Link to={"/restaurant/"+props.slug}>
                        <img src={props.image} className="img-fluid item-img" alt="asd"/>
                    </Link>
                </div>
                <div className="p-3 position-relative">
                    <div className="list-card-body">
                        <h6 className="mb-1"><Link to={"/restaurant/"+props.slug} className="text-black">{props.name}</Link></h6>
                        <p className="text-gray mb-3">{props.address.street} {props.address.address}</p>
                        <p className="text-gray mb-3 time"><span className={` ${props.menuHour.classname} rounded-sm pl-2 pb-1 pt-1 pr-2`}><b>MENÜ</b> {props.menuHour.time}</span></p>
                    </div>
                    <div className="list-card-badge" style={{ textAlign: 'right' }}>
                        {
                            <span className={props.openHour.classname}>{props.openHour.time}</span>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantItem;