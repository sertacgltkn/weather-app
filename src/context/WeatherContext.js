import citiesJSON from "../data/cities_of_turkey.json";
import { useContext, createContext } from "react";
import { useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);

  const [city, setCity] = useState(citiesJSON.find((item) => item.id === 44));

  const days = [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar",
  ];

  const value = {
    city,
    setCity,
    citiesJSON,
    days,
    weather,
    setWeather,
  };
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
