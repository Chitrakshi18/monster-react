// Signed-off by : Atul Kadian
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import Button from "@material-ui/core/Button";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const App2 = () => {
  const [counter, setCounter] = useState(0);
  const handleCount = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleCount}>
        <ArrowDownwardIcon /> Button {counter}
      </Button>
    </div>
  );
};

export default App2;
