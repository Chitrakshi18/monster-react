import React from "react";
import "./card.style.css";
import Card from "react-bootstrap/Card";

export const MonsterCard = (props) => (
  <div className="card-container">
    <Card className="p-3">
      <div
        style={{
          width: "200px",
          height: "150px",
        }}
      >
        <h4>{props.monster.name}</h4>
      </div>
    </Card>
  </div>
);
