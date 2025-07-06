async function getWeather(city) {
  try {
    var response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=8b44d48dda2742a58b0223529252306&q=${city}&days=3`);
    var data = await response.json();

    var days = data.forecast.forecastday;
    var cartoona = "";

    for (var i = 0; i < days.length; i++) {
        if(i==0){
            cartoona+= `
        <div class="col-md-4">
          <div class="card text-white bg-dark mb-3">
            <div class="card-header">${days[i].date}</div>
            <div class="card-body text-center">
            <h4 class="card-title fs-5 ">${data.location.name}</h4>
              <div <h1 class="card-title  ff">${days[i].day.avgtemp_c}°C</h1>
              <img src="https:${days[i].day.condition.icon}" alt="icon"></div>
              <p class="card-text text-primary">${days[i].day.condition.text}</p>
              <div class="hh d-flex align-items-center ps-3 text-centre justify-content-centre">
        <img src="icon-umberella.png" class="ps-2"alt="" >
        <p class="card-text  ps-2">${days[i].day.daily_chance_of_rain}%</p>
        <img src="icon-compass.png" class="ps-2" alt="">
        <p class="card-text  ps-2">${days[i].day.maxwind_kph}km/h</p>
        <img src="icon-wind.png" class="ps-2" alt="">
        <p class="card-text  ps-2">${data.current.wind_dir}%</p>

      </div>
            </div>
          </div>
        </div>
      `;
        }
      else{
        cartoona += `
        <div class="col-md-4 ">
          <div class="card text-white bg-dark mb-3">
            <div class="card-header">${days[i].date}</div>
            <div class="card-body text-center">
              <h3 class="card-title">${days[i].day.avgtemp_c}°C</h3>
              <h5 class="card-title">${days[i].day.avgtemp_f}°</h5>
              <img src="https:${days[i].day.condition.icon}" alt="icon">
              <p class="card-text text-primary">${days[i].day.condition.text}</p>
            </div>
          </div>
        </div>
      `;
      }
    }

    document.getElementById("ss").innerHTML = cartoona;

  } catch (err) {
    console.log("Error:", err);
  }
}


function getCity() {
   var city = document.getElementById("cityInput").value.trim();
  if (city !== "") {
    getWeather(city); 
  }
}

 getWeather('cairo'); 

 

