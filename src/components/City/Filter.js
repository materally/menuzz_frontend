import React from "react";

// Components

const Filter = (props) => {
    return (
    <div className="col-md-3">
        <div className="filters shadow-sm rounded bg-white mb-4">

            <div className="filters-header border-bottom pl-4 pr-4 pt-3 pb-3">
                <h5 className="m-0">Szűrés {props.city}</h5>
            </div>

            <div className="filters-body">
                <div id="accordion">
                    <div className="filters-card border-bottom p-4">
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="filters-card-body card-shop-filters">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="cb1"/>
                                    <label className="custom-control-label" htmlFor="cb1">Most nyitva</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="cb2"/>
                                    <label className="custom-control-label" htmlFor="cb2">Házhozszállítás</label>
                                </div>
                                
                            </div> {/* filters-card-body card-shop-filters */}
                        </div> {/* collapse show */}
                    </div> {/* filters-card border-bottom p-4 */}
                </div> {/* accordion */}
            </div> {/* filters-bofy */}
        </div> {/* filters shadow-sm rounded bg-white mb-4 */}    
    </div> /* col-md-3 */
  );
};

export default Filter;