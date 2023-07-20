export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c111887eb8msh3734e33f5421631p1d0710jsncda5f6c7776b",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

// try {
//   const response = await fetch("/cities", options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }
