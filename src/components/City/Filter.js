import React from "react";
import styled from "styled-components";

// Components

const Filter = (props) => {
    return (
    <div className="col-md-12">
        <FilterDiv className="filters shadow-sm rounded bg-white mb-4 p-4 row">
            
            <div className="col-lg-3 col-md-6 col-sm-12 custom-control text-center">
                <input type="text" className="form-control" placeholder="Keress rá egy étteremre" id="search" style={{ minWidth: 210 }} value={props.search} onChange={ (e) => props.handleSearchInput(e.target.value) } />
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 custom-control custom-checkbox text-center">
                <input type="checkbox" className="custom-control-input" id="menuFilter" checked={props.menuFilter} onChange={ () => props.setMenuFilter(!props.menuFilter) }/>
                <label className="custom-control-label" htmlFor="menuFilter">Most menü elérhető</label>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 custom-control custom-checkbox text-center">
                <input type="checkbox" className="custom-control-input" id="openFilter" checked={props.openFilter} onChange={ () => props.setOpenFilter(!props.openFilter) }/>
                <label className="custom-control-label" htmlFor="openFilter">Most nyitva</label>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 custom-control custom-checkbox text-center">
                <input type="checkbox" className="custom-control-input" id="can_delivery" checked={props.deliveryFilter} onChange={ () => props.setDeliveryFilter(!props.deliveryFilter) } />
                <label className="custom-control-label" htmlFor="can_delivery">Házhozszállítás</label>
            </div>
                        
        </FilterDiv> {/* filters shadow-sm rounded bg-white mb-4 */}    
    </div> /* col-md-3 */
  );
};

const FilterDiv = styled.div`
    align-items: center;
`;

export default Filter;