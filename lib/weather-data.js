import axios from "axios";
import { geocodingAPI, weatherAPI } from "@component/utils/values";

export const getWeatherOfCountry = async (country) => {
  return await axios
    .get(
      `${weatherAPI}lat=${country.lat}&lon=${country.lon}&units=metric&appid=928a27766aa002b7b43bf3153e34cc62`
    )
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.error(e.message); // "oh, no!"
    });
};

export const getGeoCoding = async (countryName) => {
  return await axios
    .get(`${geocodingAPI}q=${countryName}&appid=928a27766aa002b7b43bf3153e34cc62`)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.error(e.message); // "oh, no!"
    });
};
