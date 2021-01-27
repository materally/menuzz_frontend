import moment from 'moment';

export const menuHours = {
    todayMenuHours,
};

let nowDay = moment().format("dddd").toLowerCase();

function todayMenuHours(menu_hours) {
  let day_start = nowDay + '_start';
  let day_stop = nowDay + '_stop';
  let start_at = moment(menu_hours[day_start], "hh:mm:ss");
  let stop_at = moment(menu_hours[day_stop], "hh:mm:ss");
  let now = moment();
  let classname;
  let time;
  let todayIsAvailable = menu_hours[nowDay];

  if(todayIsAvailable === "1"){
    if (now.isBetween(start_at, stop_at)) {
      classname = 'bg-success text-white';
      time = <><i className="fa fa-clock-o"></i> {menu_hours[day_start].substring(0,5) + " - " + menu_hours[day_stop].substring(0,5)} </>
    } else {
      classname = 'bg-danger text-white';
      time = <><i className="fa fa-clock-o"></i> {menu_hours[day_start].substring(0,5) + " - " + menu_hours[day_stop].substring(0,5)} </>
    }
  }else{
    classname = 'bg-light text-dark';
    time = 'MA NEM ELÉRHETŐ';
  }

  return {
    classname: classname,
    time: time
  }
}

