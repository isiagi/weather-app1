import img1 from "../../assets/353.jpg";

import useFetch from "../../../hooks/useCityWeather";

import "./current.css";

const ppData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type Props = {};

const CurrentWeather = (props: Props) => {
  const data = useFetch();
  // console.log(data.data);
  // console.log(data.error)

  return (
    <div className="App">
      <div className="app__1">
        <h1 style={{ color: "#DEB018" }}>{data.data?.location.region}</h1>
        <p>{data.data?.location.country}</p>
        <div>
          <h1 style={{ fontSize: "50px", color: "#FADD1C" }}>
            {data.data?.current.temp_c} &deg;
          </h1>
          <p style={{ color: "blue" }}>
            Condition: {data.data?.current.condition.text}
          </p>
          <p style={{ color: "blue" }}>
            Humdity: {data.data?.current.humidity}
          </p>
          <p style={{ color: "blue" }}>
            Wind speed / kph: {data.data?.current.wind_kph}
          </p>
        </div>
      </div>
      <div className="app__2">
        <div style={{ width: "150px" }}>
          {data.isLoading ? (
            "<h1>Loading...</h1>"
          ) : (
            <img
              src={`https://${data.data?.current.condition.icon}`}
              alt="one__world"
              width="100%"
              style={{ objectFit: "contain" }}
            />
          )}
        </div>
      </div>
      <div className="pp__3">
        {data.data?.forecast.forecastday[0].hour
          .slice(6, 18)
          .map((obj: { condition: any; time: string }) => (
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "15px", color: "blue" }}>
                {obj.time.split(" ")[1]}
              </p>
              <img
                src={`https://${obj.condition.icon}`}
                alt="one__world"
                width="100%"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CurrentWeather;
