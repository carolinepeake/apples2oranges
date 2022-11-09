import React from 'react';
import PCard from "../../card/PCard.js";
import Card from "../../card/Card.js";
import Box from '@mui/material/Box';
import styles from "../../card/Card.module.css";
import {
  StyledContainer,
  StyledTypography
} from "../../styles/playerViewStyles";
import { StyledButton } from "../../styles/createGameStyles";

export default function JudgeView({G, ctx, moves, matchData }) {

  let playersRemaining = matchData.length - 1;
  // can map the cards, might need to make submitted answers an array first
  let cardArray = [];
  for (let playerId in G.submittedAnswers) {
    playersRemaining--;
    cardArray.push(
      <Card
        playerId={playerId}
        player={false}
        G={G}
        ctx={ctx}
        moves={moves}
        text={G.submittedAnswers[playerId].body}
      />
    );
  }
  let answers = (
    <div className="player-choices">
      {cardArray}
    </div>
  );

  return (
        <StyledContainer>
          <StyledTypography>
          <h3>YOU ARE JUDGING ________!</h3>
          <span className="active-prompt">
            {G.activePrompt.body ? (
              <PCard children={G.activePrompt.body} className={styles.answer_card}/>
            ) : (
              <div>
                <StyledButton
                  variant="contained"
                  onClick={() => {
                    moves.drawRemotePrompt();
                  }}
                >
                  Draw a prompt!
                </StyledButton>
              </div>
            )}
          </span>
          </StyledTypography>
          <Box sx={{width: '80%'}}>
          {G.activePrompt.body
          && (playersRemaining === 0
              ? answers
              : <div>Waiting on {playersRemaining} players to select an answer.</div>
          )}
          </Box>
        </StyledContainer>
  );
}
