import React, { useState } from "react";

import { Row } from "./components/Milligram/Row";
import { Title } from "./components/Title";
import { Form } from "./components/Form";
import { Result } from "./components/Result";

const App = () => {
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
    <React.Fragment>
      <div style={{ padding: 40 }}>
        <Row>
          <Title />
          <Form setCity={setCity} getWeather={getWeather}/>
          <Result />
        </Row>
      </div>
    </React.Fragment>
  );
};
export default App;
