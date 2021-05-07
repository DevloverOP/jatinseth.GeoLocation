
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
if(prevcords.lat===pos.coords.latitude && prevcords.lon===pos.coords.longitude){ console.log(prevcords.lat,pos.coords.latitude);

  document.getElementById("speed").innerHTML = `Speed:${0}`;
  document.getElementById("state").innerHTML = "Stopped";
  document.getElementById("state").style = deco("stop");
}
else{
  console.log(prevcords.lat,pos.coords.latitude);
  prevcords.lat=pos.coords.latitude;
  prevcords.lon=pos.coords.longitude;
  document.getElementById("speed").innerHTML = `Speed:${pos.coords.spee?pos.coords.spee:0}`;
  document.getElementById("state").innerHTML = "Moving";
  document.getElementById("state").style = deco("move");
}

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
});


navigator.geolocation.watchPosition(yourLocation, catchError,opt);