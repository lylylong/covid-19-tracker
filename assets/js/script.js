////////////// DATA PREPARATION /////////////

// initial the input variable
let input = "";
let inputList = "";
let inputBtn = "";
let deleteDiv = "";

// get the input search stored in the array
let countryArray = JSON.parse(localStorage.getItem("countryArray")) || [];
let provinceArray = JSON.parse(localStorage.getItem("provinceArray")) || [];
let cityArray = JSON.parse(localStorage.getItem("cityArray")) || [];

// Modal Setup
let modal = document.querySelector("#modal-div");
let modalNoInput = document.querySelector("#modal-div-no-input");
// modal open function
function modalOpen() {
  modal.style.display = "block";
}
function modalNoInputOn() {
  modalNoInput.style.display = "block";
}
// modal off function
function modalOff() {
  modal.style.display = "none";
}
function modalNoInputOff() {
  modalNoInput.style.display = "none";
}
$("#modal-close").on("click", function () {
  modalOff();
});
$("#modal-2-close").on("click", function () {
  modalNoInputOff();
});

// title case function, to title case the input
function titleCase(str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

// create history buttons
function createHistory() {
  // let inputList = $("#list-group-country");
  let buttonSet = document.createElement("div");
  buttonSet.classList = "field has-addons button-set";
  let buttonDiv = document.createElement("div");
  buttonDiv.classList = "control is-expanded";
  inputBtn = document.createElement("button");
  inputBtn.classList = "button is-fullwidth list-group-item";
  deleteDiv = document.createElement("div");
  deleteDiv.classList = "control delete-div";
  let deleteBtn = document.createElement("button");
  deleteBtn.classList = "button is-danger";
  let deleteIcon = document.createElement("i");
  deleteIcon.classList = "fas fa-trash-alt";
  buttonDiv.append(inputBtn);
  buttonSet.append(buttonDiv);
  deleteBtn.append(deleteIcon);
  deleteDiv.append(deleteBtn);
  buttonSet.append(deleteDiv);
  inputList.append(buttonSet);
}

// Country Array Setup
function saveCountryInputLocal() {
  // if the input saved before, don't need to save again
  if (countryArray.includes(titleCase(input))) {
    return;
  }
  // local storage - save inputs to the array & create history on the left panel
  countryArray.push(titleCase(input));
  localStorage.setItem("countryArray", JSON.stringify(countryArray));
  inputList = $("#list-group-country");
  createHistory();
  inputBtn.textContent = titleCase(input);
  // enable the button right after the creation
  inputBtn.onclick = function () {
    input = inputBtn.textContent;
    console.log(input);
    // invoke the search function
    getCountryData();
  };
  deleteDiv.onclick = function () {
    let toBeDelete = $(this).siblings().children(".list-group-item").text();
    countryArray = JSON.parse(localStorage.getItem("countryArray"));
    // let index = countryArray.indexOf(toBeDelete);
    countryArray.splice(countryArray.indexOf(toBeDelete), 1);
    localStorage.setItem("countryArray", JSON.stringify(countryArray));
    if ((countryArray.length = 1)) {
      countryArray = [];
    }
    $(this).parents(".button-set").remove();
  };
}
// initial print the local storage
for (let i = 0; i < countryArray.length; i++) {
  inputList = $("#list-group-country");
  createHistory();
  inputBtn.textContent = countryArray[i];
  deleteDiv.onclick = function () {
    let toBeDelete = $(this).siblings().children(".list-group-item").text();
    countryArray = JSON.parse(localStorage.getItem("countryArray"));
    // let index = countryArray.indexOf(toBeDelete);
    countryArray.splice(countryArray.indexOf(toBeDelete), 1);
    localStorage.setItem("countryArray", JSON.stringify(countryArray));
    if ((countryArray.length = 1)) {
      countryArray = [];
    }
    $(this).parents(".button-set").remove();
  };
}
// stored search, click & use it to fetch
$("#list-group-country").on("click", ".list-group-item", function () {
  input = $(this).text();
  console.log(input);
  // invoke the search function
  document.querySelector("img")?.remove();
  getCountryData();
});
// Province Array Setup
function saveProvinceInputLocal() {
  // if the input saved before, don't need to save again
  if (provinceArray.includes(titleCase(input))) {
    return;
  }
  // local storage - save inputs to the array & create history on the left panel
  provinceArray.push(titleCase(input));
  localStorage.setItem("provinceArray", JSON.stringify(provinceArray));
  inputList = $("#list-group-province");
  createHistory();
  inputBtn.textContent = titleCase(input);
  // enable the button right after the creation
  inputBtn.onclick = function () {
    input = inputBtn.textContent;
    // invoke the search function
    document.querySelector("img")?.remove();
    getProvinceData();
  };
  deleteDiv.onclick = function () {
    let toBeDelete = $(this).siblings().children(".list-group-item").text();
    provinceArray = JSON.parse(localStorage.getItem("provinceArray"));
    // let index = countryArray.indexOf(toBeDelete);
    provinceArray.splice(provinceArray.indexOf(toBeDelete), 1);
    localStorage.setItem("provinceArray", JSON.stringify(provinceArray));
    if ((provinceArray.length = 1)) {
      provinceArray = [];
    }
    $(this).parents(".button-set").remove();
  };
}
// initial print the local storage
for (let i = 0; i < provinceArray.length; i++) {
  inputList = $("#list-group-province");
  createHistory();
  inputBtn.textContent = provinceArray[i];
  deleteDiv.onclick = function () {
    let toBeDelete = $(this).siblings().children(".list-group-item").text();
    provinceArray = JSON.parse(localStorage.getItem("provinceArray"));
    // let index = countryArray.indexOf(toBeDelete);
    provinceArray.splice(provinceArray.indexOf(toBeDelete), 1);
    localStorage.setItem("provinceArray", JSON.stringify(provinceArray));
    if ((provinceArray.length = 1)) {
      provinceArray = [];
    }
    $(this).parents(".button-set").remove();
  };
}
// stored search, click & use it to fetch
$("#list-group-province").on("click", ".list-group-item", function () {
  input = $(this).text();
  // invoke the search function
  document.querySelector("img")?.remove();
  getProvinceData();
});
// City Array Setup
function saveCityInputLocal() {
  // if the input saved before, don't need to save again
  if (cityArray.includes(titleCase(input))) {
    return;
  }
  // local storage - save inputs to the array & create history on the left panel
  cityArray.push(titleCase(input));
  localStorage.setItem("cityArray", JSON.stringify(cityArray));
  inputList = $("#list-group-city");
  createHistory();
  inputBtn.textContent = titleCase(input);
  // enable the button right after the creation
  inputBtn.onclick = function () {
    input = inputBtn.textContent;
    // invoke the search function
    document.querySelector("img")?.remove();
    getCityData();
  };
  deleteDiv.onclick = function () {
    let toBeDelete = $(this).siblings().children(".list-group-item").text();
    cityArray = JSON.parse(localStorage.getItem("cityArray"));
    // let index = countryArray.indexOf(toBeDelete);
    cityArray.splice(cityArray.indexOf(toBeDelete), 1);
    localStorage.setItem("cityArray", JSON.stringify(cityArray));
    if ((cityArray.length = 1)) {
      cityArray = [];
    }
    $(this).parents(".button-set").remove();
  };
}
// initial print the local storage
for (let i = 0; i < cityArray.length; i++) {
  inputList = $("#list-group-city");
  createHistory();
  inputBtn.textContent = cityArray[i];
  deleteDiv.onclick = function () {
    let toBeDelete = $(this).siblings().children(".list-group-item").text();
    cityArray = JSON.parse(localStorage.getItem("cityArray"));
    // let index = countryArray.indexOf(toBeDelete);
    cityArray.splice(cityArray.indexOf(toBeDelete), 1);
    localStorage.setItem("cityArray", JSON.stringify(cityArray));
    if ((cityArray.length = 1)) {
      cityArray = [];
    }
    $(this).parents(".button-set").remove();
  };
}
// stored search, click & use it to fetch
$("#list-group-city").on("click", ".list-group-item", function () {
  input = $(this).text();
  // invoke the search function
  document.querySelector("img")?.remove();
  getCityData();
});
// One click to remove the history & clear the local storage
function createClearButton() {
  let = clearButtonDiv = $(".clear-button-div");
  let = clearButton = document.createElement("button");
  clearButton.classList = "button clear-button is-rounded is-danger mt-3";
  clearButton.textContent = "Clear All History";
  clearButtonDiv.append(clearButton);
  $(clearButton).on("click", function () {
    $(".list-group-all").children("#button-set").remove();
    localStorage.clear();
    // reload the browser
    location.reload(true);
  });
}
createClearButton();
//////////////// END OF DATA PREPARATION //////////////

///////////////////// FETCH INPUT /////////////////////

///////////////////// TESTING /////////////////////////////
///////////////////// TESTING /////////////////////////////

// Input & Search 1: Country
// Click the button to submit a country input & fetch data
$("#search-div").on("click", function () {
  console.log("search button clicked");
  input = $(this).parent().siblings("#input").val();

  if (input === null || input === "") {
    modalNoInputOn();
    return;
  }

  console.log("search input: " + titleCase(input));
  let optionValue = $(this).closest("#option-search").find("#category").val();
  console.log("the category: " + optionValue);

  if (optionValue === "country") {
    console.log("select country");
    if (
      input === "US" ||
      input === "us" ||
      input === "usa" ||
      input === "USA" ||
      input === "united states" ||
      input === "america"
    ) {
      input = "United States";
    }
    getCountryData();
    saveCountryInputLocal();
  } else if (optionValue === "province") {
    console.log("select province");
    if (input === "china" || input === "China" || input === "CHINA") {
      modalOpen();
      return;
    }
    getProvinceData();
    saveProvinceInputLocal();
  } else if (optionValue === "city") {
    console.log("select city");
    getCityData();
    saveCityInputLocal();
  }

  // clear the input space after each search
  $(this).parent().siblings("#input").val("");
  // dropdown list option back to default
  document.getElementById("category").selectedIndex = 0;
});

function getCountryData() {
  fetch("https://www.trackcorona.live/api/countries")
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (responseJson) {
      // Returns all the available province.
      for (let i = 0; i < responseJson.data.length; i++) {
        if (responseJson.data[i].location.includes(titleCase(input))) {
          modalOff();
          let confirm = document.querySelector("#confirm");
          let country = document.querySelector("#country-province");
          let mostRecentData = responseJson.data[i].updated.split(" ")[0];
          country.textContent = responseJson.data[i].location;
          confirm.textContent =
            mostRecentData +
            ": " +
            " Confirmed: " +
            responseJson.data[i].confirmed +
            ", " +
            " Deaths: " +
            responseJson.data[i].dead +
            ".";
          // create country flag
          document.querySelector("img")?.remove();
          let flagDiv = document.querySelector("#flag");
          let countryFlag = document.createElement("img");
          countryFlag.setAttribute(
            "src",
            "https://www.countryflags.io/" +
              responseJson.data[i].country_code +
              "/flat/64.png"
          );
          flagDiv.appendChild(countryFlag);
          return;
        }

        if (!responseJson.data[i].location.includes(titleCase(input))) {
          modalOpen();
        }
      }
    });
}

function getProvinceData() {
  fetch("https://www.trackcorona.live/api/provinces")
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (responseJson) {
      // Returns all the available province.
      for (let i = 0; i < responseJson.data.length; i++) {
        // Returns the input country
        if (responseJson.data[i].location.includes(titleCase(input))) {
          modalOff();
          let confirm = document.querySelector("#confirm");
          let province = document.querySelector("#country-province");
          let mostRecentData = responseJson.data[i].updated.split(" ")[0];
          province.textContent =
            responseJson.data[i].country_code.toUpperCase() +
            "/" +
            responseJson.data[i].location;
          confirm.textContent =
            mostRecentData +
            ": " +
            " Confirmed: " +
            responseJson.data[i].confirmed +
            ", " +
            " Deaths: " +
            responseJson.data[i].dead +
            ".";
          // create country flag
          document.querySelector("img")?.remove();
          let flagDiv = document.querySelector("#flag");
          let countryFlag = document.createElement("img");
          countryFlag.setAttribute(
            "src",
            "https://www.countryflags.io/" +
              responseJson.data[i].country_code +
              "/flat/64.png"
          );
          flagDiv.appendChild(countryFlag);
          return;
        }

        if (!responseJson.data[i].location.includes(titleCase(input))) {
          modalOpen();
        }
      }
    });
}

function getCityData() {
  fetch("https://www.trackcorona.live/api/cities")
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (responseJson) {
      // console.log(responseJson);
      for (let i = 0; i < responseJson.data.length; i++) {
        // Returns the input city
        if (responseJson.data[i].location.includes(titleCase(input))) {
          modalOff();
          let confirm = document.querySelector("#confirm");
          let city = document.querySelector("#country-province");
          let mostRecentData = responseJson.data[i].updated.split(" ")[0];

          if (responseJson.data[i].location === "Come to Beijing from abroad") {
            responseJson.data[i].location = "Beijing";
          }
          if (
            responseJson.data[i].location === "Come to Shanghai from abroad."
          ) {
            responseJson.data[i].location = "Shanghai";
          }
          city.textContent =
            responseJson.data[i].country_code.toUpperCase() +
            "/" +
            responseJson.data[i].location;
          confirm.textContent =
            mostRecentData +
            ": " +
            " Confirmed: " +
            responseJson.data[i].confirmed +
            ", " +
            " Deaths: " +
            responseJson.data[i].dead +
            ".";
          // create country flag
          document.querySelector("img")?.remove();
          let flagDiv = document.querySelector("#flag");
          let countryFlag = document.createElement("img");
          countryFlag.setAttribute(
            "src",
            "https://www.countryflags.io/" +
              responseJson.data[i].country_code +
              "/flat/64.png"
          );
          flagDiv.appendChild(countryFlag);
          return;
        }

        if (!responseJson.data[i].location.includes(titleCase(input))) {
          modalOpen();
        }
      }
    });
}
//////////////// END OF FETCH INPUT ////////////////

///////////////////// MAP AREA /////////////////////
am4core.ready(function () {
  // DATA AREA
  // make a map of country indexes for later use
  let countryIndexMap = {};
  let list = covid_world_timeline[covid_world_timeline.length - 1].list;
  for (let i = 0; i < list.length; i++) {
    let country = list[i];
    countryIndexMap[country.id] = i;
  }
  // function that returns current slide
  // if index is not set, get last slide
  function getSlideData(index) {
    if (index == undefined) {
      index = covid_world_timeline.length - 1;
    }
    let data = covid_world_timeline[index];
    return data;
  }

  // get slide data
  let slideData = getSlideData();

  // as we will be modifying raw data, make a copy
  let mapData = JSON.parse(JSON.stringify(slideData.list));
  let max = { confirmed: 0, recovered: 0, deaths: 0 };

  // the last day will have most
  for (let i = 0; i < mapData.length; i++) {
    let di = mapData[i];
    if (di.confirmed > max.confirmed) {
      max.confirmed = di.confirmed;
    }
    if (di.recovered > max.recovered) {
      max.recovered = di.recovered;
    }
    if (di.deaths > max.deaths) {
      max.deaths = di.deaths;
    }
    max.active = max.confirmed;
  }

  // MAP SETUP
  // Create map instance
  let chart = am4core.create("chartdiv", am4maps.MapChart);

  // Set map definition
  chart.geodata = am4geodata_worldLow;

  // Set projection
  chart.projection = new am4maps.projections.Miller();

  // Create map polygon series
  let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

  // Make map load polygon (like country names) data from GeoJSON
  polygonSeries.useGeodata = true;
  polygonSeries.dataFields.id = "id";
  polygonSeries.dataFields.value = "confirmed";
  polygonSeries.data = mapData;

  // Configure series
  let polygonTemplate = polygonSeries.mapPolygons.template;
  polygonTemplate.tooltipText =
    "[bold]{name}:[/]" + "\n" + "[font-size:12px]Confirmed Cases: {confirmed}";
  polygonTemplate.fill = am4core.color("#727272");

  // Create hover state and set alternative fill color
  let hs = polygonTemplate.states.create("hover");
  hs.properties.fill = am4core.color("#dc3545");

  // Remove Antarctica
  polygonSeries.exclude = ["AQ"];
});
////////////////// END OF MAP AREA //////////////////
