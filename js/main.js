function loadCountry() {
  fetch("https://api.covid19api.com/countries")
    .then((res) => res.json())
    .then((data) => showOnDom(data));
}

function showOnDom(data) {
  const allCountry = document.getElementById("all-country");
  data.forEach((country) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <h1>${country.Country}</h1>
    <button onclick="coronaUpdate('${country.Slug}')">Show COVID-19 Update</button>
    `;
    allCountry.appendChild(div);
  });
}
function coronaUpdate(countryName) {
  console.log(countryName);
  fetch(`https://api.covid19api.com/total/dayone/country/${countryName}`)
    .then((res) => res.json())
    .then((data) => totalUpdate(data));
}
function totalUpdate(countryArr) {
  const lastLength = countryArr.length - 1;
  const country = countryArr[lastLength];
  const coronaDetailsDiv = document.getElementById("corona-update");

  coronaDetailsDiv.innerHTML = `<h1>${country.Country}</h1>
  <h3>Total Case:${country.Confirmed}</h3>
  `;
}
