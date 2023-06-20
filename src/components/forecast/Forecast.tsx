import React from "react";
import useFetch from "../../../hooks/useCityWeather";

import img1 from "../../assets/353.jpg";

const contentData = [1, 2, 3, 4, 5, 6];

type Props = {};

import "./forecast.css";

function Forecast({}: Props) {
  const data = useFetch();

  // console.log(data.data.forecast.forecastday);

  return (
    <div className="card">
      {data.data?.forecast.forecastday.map(
        (obj: { date: string; day: any }) => (
          <div className="content">
            <p style={{ color: "#DEB018" }}>
              {new Date(`${obj.date}`).toLocaleString("en-us", {
                weekday: "long",
              })}{" "}
            </p>
            <img src={`https://${obj.day.condition.icon}`} alt="" />

            <div className="content1">
              <p>{obj.day.maxtemp_c} &deg;</p>
              <p>{obj.day.mintemp_c} &deg;</p>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Forecast;
