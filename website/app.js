
// User's location Info

let lat;
let lon;

let weatherApi;
const apiKey = '&appid=71fab47d50ab677f3ba01bf8eef6dc41';

function success (pos) {
  const crd = pos.coords;
  lat = crd.latitude;
  lon = crd.longitude;
  weatherApi = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;
  console.log(lat);
  console.log(lon);

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
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Get Data
const getData = async (url = '') => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
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
  console.log('updateData');

  const data = await getData('/weather');
  console.log('updateData');
  console.log(data)
  let i;
  for (i = 0; i < data.length; i++) {
    let div = document.createElement("div");
    div.classList.add('journal' + i);
    document.getElementById('prevJournals').appendChild(div);
    
    let y;
    const divClasses = ['date', 'temperature', 'feelings'];
    for (y = 0; y < divClasses.length; y++) {
      div = document.createElement("div");
      div.classList.add(divClasses[y]);
      document.getElementsByClassName('journal' + i)[0].appendChild(div);
      
    }
    document.querySelector('.journal' + i + " " + '.date').innerHTML = `${data[i].date}`;
    document.querySelector('.journal' + i + " " + '.temperature').innerHTML = `${data[i].temperature}`;
    document.querySelector('.journal' + i + " " + '.feelings').innerHTML = `${data[i].feelings}`;
  }
};

const generateData = async() => {
  const feelings = document.getElementById('feelings').value;
  // const zip = document.getElementById('zip').value;
  const response = await fetch(`${weatherApi}${apiKey}`);

  try {
    const data = await response.json();
    const projectData = {};
    projectData.temperature = data.main.temp;
    projectData.feelings = feelings;
    projectData.date = newDate;
    console.log(projectData);
    await postData('/weather', projectData);
    updateData();
  } catch (error) {
    console.error("error", error);
  }
}

document.getElementById('generate').addEventListener('click', initialState);
