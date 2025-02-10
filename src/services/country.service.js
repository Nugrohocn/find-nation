import axios from "axios";

export const getDataCountries = (callback) => {
  axios
    .get("https://restcountries.com/v3.1/all")
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      callback(error);
    });
};
