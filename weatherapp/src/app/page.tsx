"use client";

import { useState } from "react";
import { fetchWeather } from "../../utils/fetchWeather";
import WeatherCard from "../../components/WeatherCard";
import { Button } from "@/components/ui/button"; // import from shadcn

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    if (!city) return;
    const data = await fetchWeather(city);
    setWeather(data);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">NextJS Weather App</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <Button onClick={handleSearch}>Get Weather Data</Button>
      </div>

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}
