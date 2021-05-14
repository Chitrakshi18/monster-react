import React from "react";
import "./card-list.styles.css";
import { MonsterCard } from "../cards/card.components";
import CardGroup from "react-bootstrap/CardGroup";

export const CardList = (props) => (
  <div className="card-list">
    <CardGroup>
      {props.monsters.map((monster) => (
        <MonsterCard key={monster.id} monster={monster} />
      ))}
    </CardGroup>
  </div>
);
