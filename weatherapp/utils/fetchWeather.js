import axios from 'axios';

export const fetchWeather = async (city) => {
  const API_KEY = "3e1b6b1f07e8e7fa0a16ede2fd8df4f7";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};
