function showTime(){
    var date = new Date();
    var hour = date.getHours(); // 0 - 23
    var min = date.getMinutes(); // 0 - 59
    var month = date.getMonth(); //0 - 11
    var day = date.getDate();
    var year = date.getFullYear();
    var session = "AM";
    
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

    var deltaT
    var next_period = "Period " + period(hour, min) + " in: " + deltaT() + " minutes";
    document.getElementById("next_period").innerText = next_period;
    document.getElementById("next_period").textContent = next_period;


    setTimeout(showTime, 1000);
}

function period(hour, min){
  var periods["1A", "2A", "3A", "4AB", "1B", "2B", "3B"]

}

showTime();