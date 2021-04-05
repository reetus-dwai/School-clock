// while (1==1){
  let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /)
  let time = hour + ":" + minute;
  
  document.getElementById("time").innerHTML = time;
// }
// let date = Date.now();
// let time = date.getHours() + ":" + date.getMinutes();

// document.getElementById("time").innerHTML = time;
