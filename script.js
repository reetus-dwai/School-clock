function weak(){
  return "A";

}

function showTime(){
    var date = new Date();
    var hour = date.getHours(); // 0 - 23
    var min = date.getMinutes(); // 0 - 59
    var month = date.getMonth(); //0 - 11
    var day = date.getDate();
    var day_of_the_week = date.getDay();
    var year = date.getFullYear();
    var session = "AM";
    var week = weak();

    if(hour == 0){
        hour = 12;
    }
    
    if(hour > 12){
        hour = hour - 12;
        session = "PM";
    }

    month += 1;
    year -= 2000;
    
    // hour = (hour < 10) ? "0" + hour: hour;
    min = (min  < 10) ? "0" + min: min;

    var time_date = "\n"+ month + "/" + day  + "/" + year;
    var time = hour + ":" + min  + " " + session;
    document.getElementById("time").innerText = time + time_date;
    document.getElementById("time").textContent = time + time_date;

    //Next period stuff
    var next_period = "Period " + period(hour, min, session, week) + " in: " + deltaT(hour, min, period(hour, min, session, week)) + " minutes";
    document.getElementById("next_period").innerText = next_period;
    document.getElementById("next_period").textContent = next_period;

    setTimeout(showTime, 1000);
}

function period(h, m, s, w){
  var periods = ["1A", "2A", "3A", "4AB", "1B", "2B", "3B"];
  var hour = h;
  var min = m;
  var session = s;
  var week = w;

//A week
  if(week == "A"){
    if(session == "PM"){
      if(hour >= 2 && min >= 35 && hour != 12){
        return periods[4]; // next day's period
      } else if (hour >= 1 && min >= 35){
        return period[3]; // period 4
      } else return period[2] // period 3
    } else {
      if (hour <= 7 && min <= 50){
        return periods[0]; // 1st period
      } else if (hour <= 9 && min <= 35){
        return periods[1]; // second period
      } else {
        return periods[2]; // period 3
      }
    }
  } else {
//B day
   if(session == "PM"){
      if(hour >= 2 && min >= 35 && hour != 12){
        return periods[0]; // next day's period
      } else if (hour >= 1 && min >= 35){
        return period[3]; // period 4
      } else return period[6] // period 3
    } else {
      if (hour <= 7 && min <= 50){
        return periods[4]; // first period
      } else if (hour <= 9 && min <= 35){
        return periods[5]; // period 2
      } else {
        return periods[6]; // period 3
      }
    }
  }
}

function deltaT(h, m, p){
  var periods = ["1A", "2A", "3A", "4AB", "1B", "2B", "3B"];
  var period = p;
  var hour = h;
  var min = m;

  return "some amount of ";
}

showTime();