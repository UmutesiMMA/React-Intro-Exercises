import React from "react";
import { useEffect, useState } from "react";

export default function Cards() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    async function getCards() {
      let res = await fetch(
        "https://random-data-api.com/api/users/random_user?size=10"
      );
      let data = await res.json();
      setCards(data);
    }
    getCards();
  }, []);
  console.log(cards);
  const elements = cards.map((object) => (
        <div
        key={object.id}
        className="flip-card"
         >
            <div className="flip-card-inner group">
                <div
                  className="group-hover:transform:rotateY(180deg) flip-card-brack-front"
                >
                  <img src={object.avatar} alt="avatar" />
                  <p className="text-center text-lg py-4">{object.username}</p>
                </div>
                <div className="flip-card-back flip-card-back-front">
                  <h3>More information here</h3>
                </div>

            </div>
    </div>
  ));

  return (
    <>
      <button>Fetch Random</button>
      <div className="grid grid-cols-2 gap-6">{elements}</div>
    </>
  );
}
