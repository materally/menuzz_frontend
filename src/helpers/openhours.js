import moment from 'moment';

export const openHours = {
    todayOpenHours,
};

let nowDay = moment().format("dddd").toLowerCase();

function todayOpenHours(opening_hours) {
  let day_start = nowDay + '_open_at';
  let day_stop = nowDay + '_close_at';
  let open_at = moment(opening_hours[day_start], "hh:mm:ss");
  let close_at = moment(opening_hours[day_stop], "hh:mm:ss");
  let now = moment();
  let classname;
  let time;
  let todayIsOpen = opening_hours[nowDay];

  if(todayIsOpen === "1"){
    if (now.isBetween(open_at, close_at)) {
      classname = 'badge badge-success';
      time = <>NYITVA&nbsp;<i className="fas fa-clock-o"></i> {opening_hours[day_start].substring(0,5) + " - " + opening_hours[day_stop].substring(0,5)} </>
    } else {
      classname = 'badge badge-danger';
      time = <>ZÁRVA&nbsp;<i className="fas fa-clock"></i> {opening_hours[day_start].substring(0,5) + " - " + opening_hours[day_stop].substring(0,5)} </>
    }
  }else{
    classname = 'badge badge-default';
    time = 'MA ZÁRVA';
  }

  return {
    classname: classname,
    time: time
  }
}

