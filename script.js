function weak(d, s, h, m){
  var day = d;
  var session = s;
  var hour = h;
  var min = m;
  var week = "A";
  var transitioning_to_A;
  var transitioning_to_B;
  return "A";
  if (week == "A" && day == 7 && session == "PM" && hour == 11 && min >= 50){
    transitioning_to_B = true;
    if (transitioning_to_A){
      if (day == 1){
        week = "A"
        transitioning_to_A = false;
        return "A"
      }
      return "B";
    } else if(transitioning_to_B){
      if (day == 1){
        week = "B"
        transitioning_to_B = false;
        return "B"
      }
      return "A";
    }
  } else if (week == "B" && day == 7 && session == "PM" && hour == 11 && min >= 50){
    transitioning_to_A = true;
    if (transitioning_to_A){
      if (day == 1){
        week = "A"
        transitioning_to_A = false;
        return "A"
      }
      return "B";
    } else if(transitioning_to_B){
      if (day == 1){
        week = "B"
        transitioning_to_B = false;
        return "B"
      }
      return "A";
    }
  }
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
    var week = weak(day_of_the_week, session, hour, min);

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
    var next_period = "Period " + period(hour, min, session, week) + " in: " + deltaT(hour, min, period(hour, min, session, week));
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
  var period = p;
  var hour = h;
  var min = m;

  var deltaH;
  var deltaM;

  // if (period == "1A" || period == "1B") {
  //   if (hour == 7){
  //     deltaH = 0;
  //     deltaM = (50 - min);
  //   } else {
  //     if (hour == 12){
  //       if (min <=35){
  //         deltaH = 7;
  //       } else {
  //         deltaH = 6;
  //       }
  //     } 
  //   }
  // }


    /*
 else if (period == "2A" || period == "2B"){
    if (min == 0){
      deltaH = 12 - hour;
      deltaM = 0;
    } else {
      deltaH = 11 - hour;
      deltaM = 60 - min;
    }
  }
    */



  if (period == "3A" || period == "3B"){
    if (min == 0){
      deltaH = 12 - hour;
      deltaM = 0;
    } else {
      deltaH = 11 - hour;
      deltaM = 60 - min;
    }
  } else if (period == "4AB"){
    if (min -= 45){
      if (hour == 12){
        deltaH = 1
      } else {
        deltaH = 0
      }
      deltaM = 45 - min;
    } else {
      deltaH = 0;
      deltaM = 45 + (60 - min);
    }
  }
  

  if (deltaM == 0){
    if (deltaH == 1){
      return (deltaH + " hour");
    } else {
      return (deltaH + " hours");
    }
  } else if (deltaH == 0){
    if (deltaM == 1){
      return (deltaM + " minute");
    } else {
      return (deltaM + " minutes");
    }
  } else {
    if (deltaH == 1){
      if (deltaM == 1){
        return (deltaH + " hour and " + deltaM + " minute");
      } else {
        return (deltaH + " hour and " + deltaM + " minutes");
      }
    } else { 
      if (deltaM == 1){
        return (deltaH + " hours and " + deltaM + " minute");
      } else {
        return (deltaH + " hours and " + deltaM + " minutes");
      }
    }
  }
}

showTime();