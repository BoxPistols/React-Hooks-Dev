import React, { useState } from "react";

export const Form = (props:any) => {
  const [city, setCity] = useState<string>("");

  const url =
    "https://api.weatherapi.com/v1/current.json?key=8fce98a127594df58f8105440210309&q=London&aqi=no";
  const getWeather = (e: any) => {
    e.preventDefault();
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data));
  };

  return (
    <>
    <h3>{city}</h3>
      <form>
        <input
          type="text"
          name="city"
          placeholder="都市名"
          onChange={e => props.setCity(e.target.value)}
        />
        <button type="submit" onClick={props.getWeather}>
          Get Weather
        </button>
      </form>
      <p></p>
    </>
  );
};

type FormPropsType ={
  setCity: React.Dispatch<React.SetStateAction<string>>
  getWeather: (e: any) => void

}
