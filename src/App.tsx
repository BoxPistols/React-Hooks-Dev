import React from "react";
import { Row } from "./components/Milligram/Row";
import { Title } from "./components/Title";
import { Form } from "./components/Form";


const App = () => {
  return (
    <React.Fragment>
      <div style={{  padding:40 }}>
        <Row>
          <Title />
          <Form />
        </Row>
      </div>
    </React.Fragment>
  );
};
export default App;
