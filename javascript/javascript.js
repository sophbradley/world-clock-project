function updateCityTime() {
  let mexicoCityElement = document.querySelector("#mexico-city");
  let mexicoCityDateElement = mexicoCityElement.querySelector(".date");
  let mexicoCityTimeElement = mexicoCityElement.querySelector(".time");
  let mexicoCityTime = moment().tz("America/Mexico_City");

  mexicoCityDateElement.innerHTML = mexicoCityTime.format("dddd DD MMMM YYYY");
  mexicoCityTimeElement.innerHTML = mexicoCityTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  let seoulCityElement = document.querySelector("#seoul");
  let seoulDateElement = seoulCityElement.querySelector(".date");
  let seoulTimeElement = seoulCityElement.querySelector(".time");
  let seoulCityTime = moment().tz("Asia/Seoul");

  seoulDateElement.innerHTML = seoulCityTime.format("dddd DD MMMM YYYY");
  seoulTimeElement.innerHTML = seoulCityTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

updateCityTime();
setInterval(updateCityTime, 1000);
