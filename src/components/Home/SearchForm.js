import React, { useState, useEffect } from 'react';
import Select from 'react-select'

// utils
import API, { API_SECRET } from '../../services/api.service';

const SearchForm = () => {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    
    useEffect(() => {
        API.get(`info/restaurantLocations`, {params: {'API_SECRET': API_SECRET} })
        .then(res => {
            let response = res.data
            if(res.status === 200){
                let array = []
                response.map( (a, i) => {
                    let temp = {
                        key: i,
                        value: a.city,
                        label: a.city,
                    }
                    return array.push(temp)
                })
                setCities(array)
            }
        })
        .catch(error => console.log("Error: "+error));
    }, [])

    const handleChange = selectedOption => {
        setSelectedCity(selectedOption.value);
        window.location.href = "/city/"+selectedOption.value;
    };

    const searchBtn = () => {
        if(selectedCity === '') return;
        window.location.href = "/city/"+selectedCity;
    }
    
    return (
        <form className="form-noborder">
            <div className="form-row">
                <div className="col-lg-10 col-md-10 col-sm-12 form-group">
                    <div className="location-dropdown">
                        <Select
                            className="basic-single"
                            classNamePrefix="select"
                            options={cities}
                            defaultValue={null}
                            isSearchable={true}
                            name="city"
                            placeholder="Keresés..."
                            onChange={handleChange}
                        />
                    </div> {/* location-dropdown */}
                </div> {/* form-group */}
                <div className="col-lg-2 col-md-2 col-sm-12 form-group">
                    <button type="button" className="btn btn-primary btn-block btn-lg btn-gradient menuzzBtn" style={{ height: 38, padding: '4px 5px' }} onClick={ () => searchBtn() }>Keresés</button>
                </div> {/* form-group */}
            </div> {/* form-row */}
        </form>
    )
}

export default SearchForm;