function updateCityTime() {
  let mexicoCityElement = document.querySelector("#mexico-city");
  if (mexicoCityElement) {
    let mexicoCityDateElement = mexicoCityElement.querySelector(".date");
    let mexicoCityTimeElement = mexicoCityElement.querySelector(".time");
    let mexicoCityTime = moment().tz("America/Mexico_City");

    mexicoCityDateElement.innerHTML =
      mexicoCityTime.format("dddd DD MMMM YYYY");
    mexicoCityTimeElement.innerHTML = mexicoCityTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  let seoulCityElement = document.querySelector("#seoul");
  if (seoulCityElement) {
    let seoulDateElement = seoulCityElement.querySelector(".date");
    let seoulTimeElement = seoulCityElement.querySelector(".time");
    let seoulCityTime = moment().tz("Asia/Seoul");

    seoulDateElement.innerHTML = seoulCityTime.format("dddd DD MMMM YYYY");
    seoulTimeElement.innerHTML = seoulCityTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  setInterval(function () {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd DD MMMM YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "hh:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>`;
  }, 1000);
}

let citiesSelectElement = document.querySelector("#select-city");
citiesSelectElement.addEventListener(`change`, updateCity);

updateCityTime();
setInterval(updateCityTime, 1000);
