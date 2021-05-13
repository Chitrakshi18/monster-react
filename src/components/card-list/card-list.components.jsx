import React from "react";
import "./card-list.styles.css";
import { Card } from "../cards/card.components";

export const CardList = (props) => (
  <div className="class-list">
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
