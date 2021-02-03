import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// utils
import API, { API_SECRET, API_URL } from '../../services/api.service';
import PageLoading from '../UI/PageLoading';

// components

const PopularCities = () => {
   const [loading, setLoading] = useState(true);
   const [cities, setCities] = useState([]);

   useEffect(() => {
      API.get(`home/home_cities`, {params: {'API_SECRET': API_SECRET} })
         .then(res => {
               setCities(res.data);
               setLoading(false);
         })
         .catch(error => console.log("Error: "+error));
   }, [])

   const renderCities = () => {
      return cities.length > 0 && cities.map((c, index) => {
         if(c.image_url){
            return (
               <div className="col-md-3 col-6" key={c.id}>
                  <div className="IndexCity products-box">
                     <Link to={`/city/${c.url}`}>
                           <img src={`${API_URL}city/${c.image_url}`} className="img-fluid" alt={`${c.city_name} napi menü, heti menü`} style={{ borderRadius: 6, height: 180 }} />
                           <div className="IndexCity__City">
                              <h6 className="IndexCity__H6">{c.city_name}</h6>
                           </div>
                     </Link>
                  </div>
               </div>
            )
         }
      })
   }

    return (
        <section className="section pt-5 pb-5 bg-white homepage-add-section">
         <div className="container">
            <div className="row">
               { loading && <PageLoading /> }
               { renderCities() }
            </div>
         </div>
      </section>
    )
}

export default PopularCities;