import React from "react";
import moment from 'moment';

let nowDay = moment().format("dddd").toLowerCase();

// Components

const OpenHours = (props) => {
    const oh = props.open_hours;

    const nO = (hour) => {
        return hour.substring(0,5);
    }
    
    return (
        <div className="bg-white rounded shadow-sm text-white mb-4 p-4 clearfix restaurant-detailed-earn-pts card-icon-overlap">
        <h6 className="pt-0 text-menuzz mb-1 font-weight-bold">NYITVATARTÁS</h6>
            <p className={"mb-1 " + (nowDay === "monday" ? "openCloseTable" : "")}>Hétfő 
                { (oh.monday === "1") ? (
                    <span className="float-right text-dark">{nO(oh.monday_open_at)} - {nO(oh.monday_close_at)}</span>
                ) : <span className="float-right closedInTimeTable">ZÁRVA</span>  }
            </p>
            <p className={"mb-1 " + (nowDay === "tuesday" ? "openCloseTable" : "")}>Kedd 
                { (oh.tuesday === "1") ? (
                    <span className="float-right text-dark">{nO(oh.tuesday_open_at)} - {nO(oh.tuesday_close_at)}</span>
                ) : <span className="float-right closedInTimeTable">ZÁRVA</span>  }
            </p>
            <p className={"mb-1 " + (nowDay === "wednesday" ? "openCloseTable" : "")}>Szerda 
                { (oh.wednesday === "1") ? (
                    <span className="float-right text-dark">{nO(oh.wednesday_open_at)} - {nO(oh.wednesday_close_at)}</span>
                ) : <span className="float-right closedInTimeTable">ZÁRVA</span>  }
            </p>
            <p className={"mb-1 " + (nowDay === "thursday" ? "openCloseTable" : "")}>Csütörtök 
                { (oh.thursday === "1") ? (
                    <span className="float-right text-dark">{nO(oh.thursday_open_at)} - {nO(oh.thursday_close_at)}</span>
                ) : <span className="float-right closedInTimeTable">ZÁRVA</span>  }
            </p>
            <p className={"mb-1 " + (nowDay === "friday" ? "openCloseTable" : "")}>Péntek 
                { (oh.friday === "1") ? (
                    <span className="float-right text-dark">{nO(oh.friday_open_at)} - {nO(oh.friday_close_at)}</span>
                ) : <span className="float-right closedInTimeTable">ZÁRVA</span>  }
            </p>
            <p className={"mb-1 " + (nowDay === "saturday" ? "openCloseTable" : "")}>Szombat 
                { (oh.saturday === "1") ? (
                    <span className="float-right text-dark">{nO(oh.saturday_open_at)} - {nO(oh.saturday_close_at)}</span>
                ) : <span className="float-right closedInTimeTable">ZÁRVA</span>  }
            </p>
            <p className={"mb-1 " + (nowDay === "sunday" ? "openCloseTable" : "")}>Vasárnap 
                { (oh.sunday === "1") ? (
                    <span className="float-right text-dark">{nO(oh.sunday_open_at)} - {nO(oh.sunday_close_at)}</span>
                ) : <span className="float-right closedInTimeTable">ZÁRVA</span>  }
            </p>
        </div>
    );
};


export default OpenHours;