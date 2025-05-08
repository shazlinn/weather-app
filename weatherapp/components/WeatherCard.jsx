import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Spinner from "./Spinner"; 

export default function WeatherCard({ weather }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (weather) {
      setLoading(false);
    }
  }, [weather]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Card className="max-w-md mx-auto mt-6 shadow-lg">
      <CardHeader>
        <CardTitle>{weather.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Temperature: {(weather.main.temp)}°C</p>
        <p>Weather: {weather.weather[0].main}</p>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind Speed: {weather.wind.speed} m/s</p>
      </CardContent>
    </Card>
  );
}
