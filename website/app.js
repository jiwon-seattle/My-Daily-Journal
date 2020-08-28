
/* Global Variables */
// Weather API
const weatherApi = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=71fab47d50ab677f3ba01bf8eef6dc41';

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
  // console.log(data);
  document.getElementById('date').innerHTML = `${data.date}`;
  document.getElementById('temp').innerHTML = `${data.temperature}`;
  document.getElementById('content').innerHTML = data.feelings;
};

const generateData = async() => {
  const feelings = document.getElementById('feelings').value;
  const zip = document.getElementById('zip').value;
  const response = await fetch(`${weatherApi}${zip}${apiKey}`);
  console.log(response);
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

document.getElementById('generate').addEventListener('click', generateData);
