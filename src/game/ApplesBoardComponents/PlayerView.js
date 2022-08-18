import React, { useState } from "react";
import ScoreBoard from "./ScoreBoard";
import Card from "../../card/Card.js";
import PCard from "../../card/PCard.js";
import styles from "../../card/Card.module.css"

export default function PlayerView({
  G,
  ctx,
  moves,
  playerID
}) {
  let answers;
  if (G.activePrompt.body) {
    answers = (
      <div>
        {G.players[playerID].hand.map((card, i) => {
          return (
            <Card
              G={G}
              ctx={ctx}
              player={true}
              playerId={i}
              moves={moves}
              key={card.id}
              text={card.body}
            />
          );
        })}
      </div>
    );
  }
  let cardArray = [];
  for (let playerId in G.submittedAnswers) {
    cardArray.push(
      <Card
        playerId={playerId}
        player={false}
        G={G}
        ctx={ctx}
        text={G.submittedAnswers[playerId].body}
      />
    );
  }
  let submittedAnswers = (
    <div className="player-choices">
      {cardArray}
    </div>
  );
  return (
    <div>
      THIS IS WHAT THE PLEBS SEE
      <span className="active-prompt">
        {G.activePrompt.body ? (
          <PCard children={G.activePrompt.body} className={styles.answer_card} />
        ) : (
          <p>Waiting on Judge to wake up and pull his foot out of his ass</p>
        )}
      </span>
      <div className="answercards">
        {Object.keys(G.submittedAnswers).length !== ctx.numPlayers - 1 ? (
          <>
            {G.players[playerID].hand.length < 7 ?
              submittedAnswers:
              answers
            }
          </>
        ) : (
          <>
            {submittedAnswers}
            <ScoreBoard />
          </>
        )}
      </div>
      {/* {renderView()} */}
    </div>
  );
}
