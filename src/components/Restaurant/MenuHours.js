import React from "react";
import moment from 'moment';

let nowDay = moment().format("dddd").toLowerCase();

// Components

const MenuHours = (props) => {
    const mh = props.menu_hours;

    const nO = (hour) => {
        return hour.substring(0,5);
    }

    return (
    <div className="bg-white rounded shadow-sm text-white mb-4 p-4 clearfix restaurant-detailed-earn-pts card-icon-overlap">
        <h6 className="pt-0 text-menuzz mb-1 font-weight-bold">MENÜ ELÉRHETŐSÉG</h6>
        <p className={"mb-1 " + (nowDay === "monday" ? "openCloseTable" : "")}>Hétfő 
            { (mh.monday === "1") ? (
                <span className="float-right text-dark">{nO(mh.monday_start)} - {nO(mh.monday_stop)}</span>
            ) : <span className="float-right closedInTimeTable">NINCS</span>  }
        </p>
        <p className={"mb-1 " + (nowDay === "tuesday" ? "openCloseTable" : "")}>Kedd 
            { (mh.tuesday === "1") ? (
                <span className="float-right text-dark">{nO(mh.tuesday_start)} - {nO(mh.tuesday_stop)}</span>
            ) : <span className="float-right closedInTimeTable">NINCS</span>  }
        </p>
        <p className={"mb-1 " + (nowDay === "wednesday" ? "openCloseTable" : "")}>Szerda 
            { (mh.wednesday === "1") ? (
                <span className="float-right text-dark">{nO(mh.wednesday_start)} - {nO(mh.wednesday_stop)}</span>
            ) : <span className="float-right closedInTimeTable">NINCS</span>  }
        </p>
        <p className={"mb-1 " + (nowDay === "thursday" ? "openCloseTable" : "")}>Csütörtök 
            { (mh.thursday === "1") ? (
                <span className="float-right text-dark">{nO(mh.thursday_start)} - {nO(mh.thursday_stop)}</span>
            ) : <span className="float-right closedInTimeTable">NINCS</span>  }
        </p>
        <p className={"mb-1 " + (nowDay === "friday" ? "openCloseTable" : "")}>Péntek 
            { (mh.friday === "1") ? (
                <span className="float-right text-dark">{nO(mh.friday_start)} - {nO(mh.friday_stop)}</span>
            ) : <span className="float-right closedInTimeTable">NINCS</span>  }
        </p>
        <p className={"mb-1 " + (nowDay === "saturday" ? "openCloseTable" : "")}>Szombat 
            { (mh.saturday === "1") ? (
                <span className="float-right text-dark">{nO(mh.saturday_start)} - {nO(mh.saturday_stop)}</span>
            ) : <span className="float-right closedInTimeTable">NINCS</span>  }
        </p>
        <p className={"mb-1 " + (nowDay === "sunday" ? "openCloseTable" : "")}>Vasárnap 
            { (mh.sunday === "1") ? (
                <span className="float-right text-dark">{nO(mh.sunday_start)} - {nO(mh.sunday_stop)}</span>
            ) : <span className="float-right closedInTimeTable">NINCS</span>  }
        </p>
    </div>
    );
};


export default MenuHours;