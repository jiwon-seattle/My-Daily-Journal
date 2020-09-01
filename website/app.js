
// User's location Info

let lat;
let lon;

let weatherApi;
const apiKey = '';

function success (pos) {
  const crd = pos.coords;
  lat = crd.latitude;
  lon = crd.longitude;
  weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;
};

function error(err) {
  console.warn(err.code);
}

const getLocation = async () => {
  try {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  } catch( error ) {
    console.log(error);
  }
}

getLocation();

const initialState = async() => {
  generateData();
}

/* Global Variables */
// Weather API

// new date 
let d = new Date();
let newDate = `${d.getMonth() + 1}`+'.'+ d.getDate()+'.'+ d.getFullYear();

// Get Data
const getData = async (url = '') => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch(error) {
    console.log(error);
  }
};

// POST Data
const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
      });
};

const updateData = async() => {

  const data = await getData('/weather');
  let i;
  for (i = 0; i < data.length; i++) {
    let div = document.createElement("div");
    div.classList.add('journal' + i);
    document.getElementById('prevJournals').appendChild(div);
    document.getElementsByClassName('journal' + i)[0].style.borderBottom="1px solid  #ffb3b3"
    document.getElementsByClassName('journal' + i)[0].style.width="100%"
    
    let y;
    const divClasses = ['date', 'weather', 'feelings'];
    for (y = 0; y < divClasses.length; y++) {
      div = document.createElement("div");
      div.classList.add(divClasses[y]);
      document.getElementsByClassName('journal' + i)[0].appendChild(div);
      
    }
    document.querySelector('.journal' + i + " " + '.date').innerHTML = `${data[i].date}`;
    if(data[i].weather === "Clear") {
      document.querySelector('.journal' + i + " " + '.weather').innerHTML = `${data[i].weather}`;
      document.querySelector('.journal' + i + " " + '.weather').innerHTML = "<p>Today's Weather :<img src=\"http://openweathermap.org/img/wn/01d@2x.png\" width=\"20px\" height=\"25px\"></p>";
    } else if (data[i].weather === "Clouds") {
      document.querySelector('.journal' + i + " " + '.weather').innerHTML = `${data[i].weather}`;
      document.querySelector('.journal' + i + " " + '.weather').innerHTML = "<p>Today's Weather :<img src=\"http://openweathermap.org/img/wn/03d@2x.png\" width=\"20px\" height=\"25px\"></p>";
    } else if (data[i].weather === "Mist" || "Smoke" || "Haze" || "Dust" || "Fog" || "Sand" || "Ash" || "Squall" || "Tornado") {
      document.querySelector('.journal' + i + " " + '.weather').innerHTML = `${data[i].weather}`;
      document.querySelector('.journal' + i + " " + '.weather').innerHTML = "<p>Today's Weather :<img src=\"http://openweathermap.org/img/wn/50d@2x.png\" width=\"20px\" height=\"25px\"></p>";
    } else if (data[i].weather === "Snow") {
      document.querySelector('.journal' + i + " " + '.weather').innerHTML = `${data[i].weather}`;
      document.querySelector('.journal' + i + " " + '.weather').innerHTML = "<p>Today's Weather :<img src=\"http://openweathermap.org/img/wn/13d@2x.png\" width=\"20px\" height=\"25px\"></p>";
    } else if (data[i].weather === "Rain" || "Drizzle") {
      document.querySelector('.journal' + i + " " + '.weather').innerHTML = `${data[i].weather}`;
      document.querySelector('.journal' + i + " " + '.weather').innerHTML = "<p>Today's Weather :<img src=\"http://openweathermap.org/img/wn/10d@2x.png\" width=\"20px\" height=\"25px\"></p>";
    } else if (data[i].weather === "Thunderstorm") {
      document.querySelector('.journal' + i + " " + '.weather').innerHTML = `${data[i].weather}`;
      document.querySelector('.journal' + i + " " + '.weather').innerHTML = "<p>Today's Weather :<img src=\"http://openweathermap.org/img/wn/11d@2x.png\" width=\"20px\" height=\"25px\"></p>";
    }
    
    document.querySelector('.journal' + i + " " + '.feelings').innerHTML = `${data[i].feelings}`;
  }
};

const generateData = async() => {
  const feelings = document.getElementById('feelings').value;
  const response = await fetch(`${weatherApi}${apiKey}`);

  try {
    const data = await response.json();
    const projectData = {};
    projectData.weather = data.weather[0].main;
    projectData.feelings = feelings;
    projectData.date = newDate;
    await postData('/weather', projectData);
  } catch (error) {
    console.error("error", error);
  }
}

function showWriteJournal() {
  document.querySelector('.holder .entry').style.display = "none";
  document.querySelector('.holder .journal').style.display = "";
}

function showPastJournals() {
  updateData();
  document.querySelector('.holder .entry').style.display = "";
  document.querySelector('.holder .journal').style.display = "none";
}

document.getElementById('generate').addEventListener('click', initialState);
document.getElementById('pastJournals').addEventListener('click', showPastJournals)
document.getElementById('newJournal').addEventListener('click', showWriteJournal)
