function showTime(){
  let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /)
  let time = hour + ":" + minute;
  
  document.getElementById("time").innerHTML = time;
  document.getElementById("time").textContent = time;
  setTimeout(showTime, 1000);
}

showTime();
