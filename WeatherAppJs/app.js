//Init storage
const weatherStorageLocation = new StorageLoc();
//Get stored location data
const weatherLocation = weatherStorageLocation.getLocationData();

// Init weather Object

const weatherinfo = new Weather(weatherLocation.city, weatherLocation.state);

//Init UI
const ui = new UI();

// Get weather on DOM Load

document.addEventListener('DOMContentLoaded', getWeather);

// Change location even
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  weatherinfo.changeLocation(city, state);

  // Set Location in Local Storage
  weatherStorageLocation.setLocationData(city, state);
  
  
  //Get and display weather
  getWeather();

  //close modal
  $('#locModal').modal('hide');

});




function getWeather() {

  weatherinfo.getWeather()
  .then(results => ui.paint(results))
    //.then(results => console.log(results.current))
 //   .then(results => console.log(results))
    .catch(err => console.log(err));
 
}

