import React, { Fragment, useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Components
import API, { API_SECRET } from '../services/api.service';
import Restaurants from '../components/City/Restaurants';
import Filter from '../components/City/Filter';

const CityScreen = () => {
  const { city } = useParams();
  let history = useHistory();
  const [exists, setExists] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
		API.get(`restaurant/checkCityExists/${city}`, {params: {'API_SECRET': API_SECRET} })
        .then(res => {
            if(res.status === 200){
                if(res.data === 0) {
                    history.push("/");
                    return;
                }
                setExists(true);
            }
        })
        .catch(error => console.log("Error: "+error));
  }, [history, city])

  useEffect(() => {
    if(exists && city){
      API.get(`restaurant/listing`, {params: {'API_SECRET': API_SECRET} })
      .then(res => {
          if(res.status === 200){
              let filteredData = res.data.filter(function (restaurant) {
                  return (restaurant.address.city === city);
              });
              setRestaurants(filteredData);
              setFilteredRestaurants(filteredData);
              setLoading(false)
          }
      })
      .catch(error => console.log("Error: "+error));
    }
  }, [exists, city])

  const handleSearchInput = val => {
    setSearch(val);
    const fData = restaurants.filter(element => {
      return element.name.toLowerCase().includes(val.toLowerCase());
    });
    return setFilteredRestaurants(fData);
  }

  return (
    <Fragment>
        <Helmet>
          <title>{city} heti menü, {city} napi menü!</title>
          <meta name="description" content={'Keress ebédet ' + city + ' területén! Heti menü, napi menü ' + city + 'területén'} />
          <link rel="canonical" href={process.env.REACT_APP_FRONTEND_URL} />
        </Helmet>
        <section className="section pt-5 pb-5 products-listing">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h4 className="font-weight-bold mt-0 mb-3">
                <Link to="#" onClick={() => history.goBack()}><i className="fas fa-arrow-left" style={{ marginRight: 10 }}></i></Link> 
                ÉTTERMEK <small className="h6 mb-0 ml-2">{restaurants.length} étterem <span style={{ color: '#F0A500', fontWeight: 'bold', fontSize: 22 }}>{city}</span> területén</small></h4>
              </div> {/* col-md-12 */}
            </div> {/* row d-none-m */}
            <div className="row">
              <Filter 
                search={search}
                handleSearchInput={handleSearchInput}
              />
              <Restaurants 
                loading={loading}
                restaurants={filteredRestaurants}
              />
            </div> {/* row */}
          </div> {/* container */}    
      </section>
    </Fragment>
  );
};

export default CityScreen;
