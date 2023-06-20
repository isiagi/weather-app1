import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const apiKey = import.meta.env.VITE_API_KEY;

const UseCityWeather = function (city: string = "kampala") {
  const [inputValue, setInputValue] = useState(city);

  const { isLoading, error, data, refetch } = useQuery(
    ["weatherData", city],
    () =>
      fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${inputValue}&days=6`
      ).then((res) => res.json()),
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
    }
  );

  return { isLoading, error, data, refetch, setInputValue,inputValue };
};

export default UseCityWeather;
