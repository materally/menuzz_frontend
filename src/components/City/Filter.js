import React from "react";
import styled from "styled-components";

// Components

const Filter = (props) => {
    return (
    <div className="col-md-12">
        <FilterDiv className="filters shadow-sm rounded bg-white mb-4 p-4">

            <h6 className="m-0 mr-5">Szűrés {props.city}</h6>
            
            <div className="custom-control mr-4">
                <input type="text" className="form-control" placeholder="Keress rá egy étteremre" id="search" style={{ minWidth: 210 }} value={props.search} onChange={ (e) => props.handleSearchInput(e.target.value) } />
            </div>

            <div className="custom-control custom-checkbox mr-3">
                <input type="checkbox" className="custom-control-input" id="cb1"/>
                <label className="custom-control-label" htmlFor="cb1">Most nyitva</label>
            </div>

            <div className="custom-control custom-checkbox mr-1">
                <input type="checkbox" className="custom-control-input" id="cb2"/>
                <label className="custom-control-label" htmlFor="cb2">Házhozszállítás</label>
            </div>
                        
            
                
                
        </FilterDiv> {/* filters shadow-sm rounded bg-white mb-4 */}    
    </div> /* col-md-3 */
  );
};

const FilterDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
`;

export default Filter;