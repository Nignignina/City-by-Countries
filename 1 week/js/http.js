import { MockCountry } from "./fn.js";

const BASE_URL = "https://api.musement.com/api/v3/cities/";

export const getCities = async () => {
  const res = await fetch(BASE_URL, {
    headers: {
      "X-Musement-Application": "{ applicationValue }",
      "X-Musement-Version": "3.4.0",
    },
  });

  const data = await res.json();
  return data;
};

// value OF ALL COUNTRY FROM array
// getCities().then((data) => {
//   data.map(({ country }) => console.log(country));
// });
// selected country by id

// getCities().then((data) => {
//   data.map(({ meta_description }) => console.log(meta_description));
// });
export const country = [60, 82, 139, 66, 64, 161];

getCities()
  .then((data) => {
    console.log(data);
    const france = data.filter((cities) => cities.country.id === 60);
    const italy = data.filter((cities) => cities.country.id === 82);
    const spain = data.filter((cities) => cities.country.id === 161);
    const portugal = data.filter((cities) => cities.country.id === 139);
    const germany = data.filter((cities) => cities.country.id === 64);
    const greece = data.filter((cities) => cities.country.id === 66);
    console.log(italy);

    MockCountry(france, "#FR");

    MockCountry(italy, "#IT");
    MockCountry(spain, "#SP");
    MockCountry(greece, "#GR");
    MockCountry(portugal, "#PR");

    MockCountry(germany, "#GE");

    // modalCity(data);
  })
  .catch((error) => {
    console.error("Si è verificato un errore:", error);
  });
