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
    
    hour = (hour < 10) ? "0" + hour: hour;
    min = (min  < 10) ? "0" + min: min;

    var time = hour + ":" + min  + " " + session;
    document.getElementById("time").innerText = time;
    document.getElementById("time").textContent = time;
    
    var time_date = month + "/" + day  + "/" + year;
    document.getElementById("date").innerText = time_date;
    document.getElementById("date").textContent = time_date;

    setTimeout(showTime, 1000);
}

showTime();