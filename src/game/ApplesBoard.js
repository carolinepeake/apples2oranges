import React, { useState } from "react";
import JudgeView from "./ApplesBoardComponents/JudgeView";
import PlayerView from "./ApplesBoardComponents/PlayerView";
import Box from '@mui/material/Box';
import {
  StyledContainer,
  StyledTextField,
  StyledSendIcon,
  StyledTypography
} from "../styles/playerViewStyles";
import { StyledButton } from "../styles/createGameStyles";
import { useNavigate } from "react-router-dom";
import { lobbyClient } from '../features/utils/lobbyClient';

export function ApplesBoard({ ctx, G, moves, playerID, sendChatMessage, chatMessages, matchData }) {
  let navigate = useNavigate();
  const [chatInput, setChatInput] = useState('');

  const playerNames = {};
  // creates object with player id as key
  for (let i = 0; i < matchData.length; i++) {
    playerNames[matchData[i].id] = matchData[i].name;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendChatMessage({ message: chatInput, time: Date.now()});
    setChatInput('');
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setChatInput(value);
  };

  //create two different views that will be returned depending on if player is judge or not

  //define functions that affect how the board elements are displayed

  //define board elements on when win condition is met
  let winner = "";
  if (ctx.gameover) {
    let nextGameParams = {
      playerID: localStorage.getItem("id"),
      credentials: localStorage.getItem("credentials")
      // defaults numPlayers and setupData to previous game
    };
    // could extend (make dynamic copy of) nextGameParams array and
    // add newName property
    let joinNextGameParams = {
      newName: localStorage.getItem("name"),
      playerID: localStorage.getItem("id"),
      credentials: localStorage.getItem("credentials")
    };
    let matchID = localStorage.getItem("matchID");
    winner =
      ctx.gameover.winner !== undefined ? (
        <div id="winner">
          <h3>Winner: {matchData[ctx.gameover.winner].name}</h3>
          <br/>
          <Box sx={{width: '30%', margin: '0 auto'}}>
          <StyledButton
            variant="contained"
            onClick={() => {
              let nextMatch;
              lobbyClient
                .playAgain('Apples2Oranges', matchID, nextGameParams)
                .then((match) => {
                  nextMatch = match.nextMatchID;
                  console.log('next match id: ', nextMatch);
                  return nextMatch;
                })
                .then(() => {
                  localStorage.setItem("matchID", nextMatch);
                })
                .then(() => {
                  lobbyClient.updatePlayer('Apples2Oranges', nextMatch, joinNextGameParams);
                })
                .then(() => {
                  navigate(`/waitingroom/${nextMatch}`);
                })
                .catch((err) => {
                  console.log('Error creating next game: ', err);
                });
            }}
          >
            Play Again
          </StyledButton>
          <StyledButton
            variant="contained"
            onClick={() => {
              navigate('/');
            }}
          >
            Back to Home
          </StyledButton>
          </Box>
        </div>
      ) : null;
  }

  //board elements will change based on phase, stage, and if it is players turn to be judge

  // can filter out chat component and useMemo to make it so it re-maps the chat messages only when the chat messages changes

  return (
    <div className="Game">
      <div className="View">
      {!ctx.gameover
        /* change board view IF player is the current Judge */
      ? (ctx.currentPlayer === playerID ? (
          <JudgeView
            G={G}
            ctx={ctx}
            moves={moves}
            matchData={matchData}
          />
        ) : (
          <PlayerView
            G={G}
            ctx={ctx}
            moves={moves}
            playerID={playerID}
            matchData={matchData}
          />
        ))
      : <StyledContainer>
          <StyledTypography>
            <h1>GAME OVER!</h1>
            <br/>
            {winner}
          </StyledTypography>
        </StyledContainer>}

        <Box sx={{position: 'fixed',
         height: '80vh',
         maxWidth: '30%', borderStyle: 'solid', right: '10%', top: '15%', background: 'rgba(0,0,0, 0.8)'}}>
          <div style={{
            overflowWrap: "break-word",
            overflowY: "scroll",
            height: "86%"
          }}>
            {chatMessages.length > 0 ? chatMessages.map(({ payload, sender }, index) => {
              return <div>{`${playerNames[sender]}: ${payload.message}`}</div>
            }) : null}
          </div>
          <form onSubmit={handleSubmit}>
            <StyledTextField
              label="Send chat"
              value={chatInput}
              onChange={handleChange}
              InputLabelProps={{
                style: { color: 'white' },
              }}
            />
            <StyledSendIcon type="submit"/>
          </form>
        </Box>

      </div>
    </div>
  );
}