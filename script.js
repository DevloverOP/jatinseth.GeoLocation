
let loc = document.getElementById("loc");
const opt={
  enableHighAccuracy: false,
  timeout: 1000,
  maximumAge: 0
};
let prevcords={};
//getting coordinates

function yourLocation(pos) {
document.getElementById("indicator").style.backgroundColor="green";
 document.getElementById("lat").innerHTML = pos.coords.latitude;
  document.getElementById("long").innerHTML = pos.coords.longitude;
  loc.innerHTML = "Accuracy:-" + pos.coords.accuracy;
  console.log(prevcords);
if(prevcords.lat===pos.coords.latitude && prevcords.lon===pos.coords.longitude){
  document.getElementById("speed").innerHTML = `Speed:${0}`;
  document.getElementById("state").innerHTML = "Stopped";
  document.getElementById("state").style = deco("stop");
}else{
  prevcords.lat=pos.coords.latitude;
  prevcords.lon=pos.coords.longitude;
  document.getElementById("speed").innerHTML = `Speed:${pos.coords.speed}`;
  document.getElementById("state").innerHTML = "Moving";
  document.getElementById("state").style = deco("move");
}

  // prevcords={
  //   lat:pos.coords.latitude,
  //   lon:pos.coords.longitude
  // }
  
  








  // let speed =0;
  // if (speed===pos.coords.speed||pos.coords.speed === null) {
  //   console.log(speed,pos.coords.speed);
  //   document.getElementById("speed").innerHTML = `Speed:${0}`;
  //   document.getElementById("state").innerHTML = "Stopped";
  //   document.getElementById("state").style = deco("stop");
  // } else{
  //   speed = pos.coords.speed;
  //   document.getElementById("speed").innerHTML = `Speed:${speed}`;
  //   document.getElementById("state").innerHTML = "Moving";
  //   document.getElementById("state").style = deco("move");
  // }
  setTimeout(() => {
    document.getElementById("indicator").style.backgroundColor="red";  
  },1000); 
}






function deco(aniName) {
  return `padding:5px;
  border-radius:20px;
  animation: ${aniName} infinite alternate-reverse 500ms;
  `;
}

// catching errors if any
function catchError(err) {
  switch (err.code) {
    case err.PERMISSION_DENIED:
      loc.innerHTML = "permission denied by user";
      break;
    case err.POSITION_UNAVAILABLE:
      loc.innerHTML = "Position information unavailable ";
      break;
    case err.TIMEOUT:
      loc.innerHTML = "timeout issue";
      break;
    default:
      loc.innerHTML = "uncaught error";
      break;
  }
}

//clearing labels
document.getElementById("clear").addEventListener("click", () => {
  location.reload();
  // document.getElementById("lat").innerHTML = "Latitude";
  // document.getElementById("long").innerHTML = "Longitude";
  // document.getElementById("state").style = deco("stop");
  // loc.innerHTML = "Accuracy:-0";
  // document.getElementById("indicator").style.backgroundColor="red"; 
});


navigator.geolocation.watchPosition(yourLocation, catchError,opt);
