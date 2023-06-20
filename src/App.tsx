// import "./App.css";
import { useEffect, useState } from "react";
import CurrentWeather from "./components/currentWeather/CurrentWeather"
import Forecast from "./components/forecast/Forecast";
import Header from "./components/headerComponent/Header";


function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div>
        <Header />
        <CurrentWeather />
        <Forecast />
      </div>
    </div>
  );
}

export default App;

// function DateTime() {
//   const [dateTime, setDateTime] = useState(new Date());

//   useEffect(() => {
//     // Update the date and time every second
//     const interval = setInterval(() => {
//       setDateTime(new Date());
//     }, 1000);

//     // Clear the interval on unmount
//     return () => clearInterval(interval);
//   }, []);

//   // Format the date and time as a string
//   const dateTimeStr = dateTime.toLocaleString();

//   return (
//     <div>
//       <p>{dateTimeStr}</p>
//     </div>
//   );
// }
