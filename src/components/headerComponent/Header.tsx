import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import useCityWeather from "../../../hooks/useCityWeather";

import "./header.css";

type Props = {};

function Header({}: Props) {
  const [city, setCity] = useState("kampala");

  // const city = React.useRef<HTMLInputElement>(null);

  
  
  const {inputValue, setInputValue, refetch, isLoading} = useCityWeather();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // alert("heyy")
    // city.current.value = "";
    // console.log(e.target.value);
    refetch()
    setInputValue("")
    // setCity(e.target.value);
  };

  return (
    <div className="lovez">
      <div className="lovek">
        <h1 style={{ color: "#F5AF26" }}>Weather Forcast</h1>
        <p style={{ color: 'rgba(0,0,0,0.6)' }}>Date: {new Date("2023-03-24").toLocaleDateString()}</p>
      </div>
      {isLoading ? "lia" : ""}
      <div className="header__search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="home__input"
            onChange={(event) => setInputValue(event.target.value)}
            name="city"
            placeholder="Choose City"
            value={inputValue}
          />
          <button type="submit" className="weather__button">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;

// import { useQuery } from 'react-query';

// function fetchData(inputValue1, inputValue2) {
//   return fetch(`/api/data?inputValue1=${inputValue1}&inputValue2=${inputValue2}`)
//     .then((res) => res.json());
// }

// function MyComponent() {
//   const [inputValue1, setInputValue1] = useState('');
//   const [inputValue2, setInputValue2] = useState('');
//   const { data, isLoading, refetch } = useQuery(['my-data', inputValue1, inputValue2], () => fetchData(inputValue1, inputValue2));

//   function handleSubmit(event) {
//     event.preventDefault();
//     // Your form submission logic here
//     refetch();
//   }

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={inputValue1} onChange={(event) => setInputValue1(event.target.value)} />
//         <input type="text" value={inputValue2} onChange={(event) => setInputValue2(event.target.value)} />
//         <button type="submit">Submit</button>
//       </form>
//       {/* Your component UI here, using the fetched data */}
//       <div>{data}</div>
//     </div>
//   );
// }
