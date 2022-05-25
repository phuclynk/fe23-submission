import React from "react";
import { Card } from "../card/Card";
import { CardData } from "../CardData";

export function Cards() {
  console.log(CardData);
  return (
    <div className="cards">
      {CardData.map((card, index) => (
        <Card
          key={card.id}
          cardImg={card.cardImg}
          cardLabel={card.cardLabel}
          title={card.title}
          subTitle={card.subTitle}
          useImg={card.useImg}
          userName={card.userName}
          userTime={card.userTime}
        />
      ))}
    </div>
  );
}
