import React, { Fragment, useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import moment from 'moment';
import AdSense from 'react-adsense';

// Components
import API, { API_SECRET } from '../services/api.service';
import Restaurants from '../components/City/Restaurants';
import Filter from '../components/City/Filter';

const CityScreen = () => {
  const { city } = useParams();
  let history = useHistory();
  let now = moment();
  let nowDay = moment().format("dddd").toLowerCase();
  let day_start = nowDay + '_open_at';
  let day_stop = nowDay + '_close_at';
  let day_start_menu = nowDay + '_start';
  let day_stop_menu = nowDay + '_stop';
  const [exists, setExists] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [deliveryFilter, setDeliveryFilter] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [menuFilter, setMenuFilter] = useState(false);
  const [init, setInit] = useState(true);
  const bCity = encodeURIComponent(city);

  useEffect(() => {
		API.get(`restaurant/checkCityExists`, {params: {'API_SECRET': API_SECRET, 'city': bCity} })
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
      setLoading(true);
      setRestaurants([]);
      setFilteredRestaurants([]);
      setInit(true);
      API.get(`restaurant/listingCity`, {params: {'API_SECRET': API_SECRET, 'city': bCity} })
      .then(res => {
          if(res.status === 200){
              /* let filteredData = res.data.filter(function (restaurant) {
                  return (restaurant.address.city === city);
              }); */
              setRestaurants(res.data);
              setFilteredRestaurants(res.data);
              setLoading(false);
              setInit(false);
          }
      })
      .catch(error => console.log("Error: "+error));
    }
  }, [exists, city])

  useEffect(() => { 
    if(deliveryFilter || openFilter || menuFilter){  
      let newData = restaurants.filter(function (r) {
        let open_at = moment(r.opening_hours[day_start], "hh:mm:ss");
        let close_at = moment(r.opening_hours[day_stop], "hh:mm:ss");
        let start_at = moment(r.menu_hours[day_start_menu], "hh:mm:ss");
        let stop_at = moment(r.menu_hours[day_stop_menu], "hh:mm:ss");
        return (
          ((deliveryFilter) ? r.delivery.can_order === "1" : 1)
          && 
          ((openFilter) ? now.isBetween(open_at, close_at) : 1)
          &&
          ((menuFilter) ? now.isBetween(start_at, stop_at) : 1)
        );
      });
      setFilteredRestaurants(newData);
    }else{
      setFilteredRestaurants(restaurants);
    }
  }, [deliveryFilter, openFilter, menuFilter, restaurants])

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
          <link rel="canonical" href={process.env.REACT_APP_FRONTEND_URL+'city/'+city} />
          <meta property="og:title" content={city + ' heti menü, ' + city + ' napi menü!'}/>
          <meta property="og:description" content={'Keress ebédet ' + city + ' területén! Heti menü, napi menü ' + city + 'területén'}/>
          <meta property="og:url" content={process.env.REACT_APP_FRONTEND_URL+'city/'+city}/>
        </Helmet>
        <section className="section pb-5 products-listing" style={{ paddingTop: 20 }}>
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
                deliveryFilter={deliveryFilter}
                setDeliveryFilter={setDeliveryFilter}
                openFilter={openFilter}
                setOpenFilter={setOpenFilter}
                menuFilter={menuFilter}
                setMenuFilter={setMenuFilter}
              />
              <AdSense.Google
                client='ca-pub-0702538969981759'
                slot='4187493889'
                style={{ display: 'block', width: '100%' }}
                format='auto'
                responsive='true'
              />
              <Restaurants 
                loading={loading}
                restaurants={filteredRestaurants}
                init={init}
              />
            </div> {/* row */}
          </div> {/* container */}    
      </section>
    </Fragment>
  );
};

export default CityScreen;
