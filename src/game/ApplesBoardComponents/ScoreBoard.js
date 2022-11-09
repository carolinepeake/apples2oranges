import React from "react";
import {
  StyledContainer,
  StyledList,
  StyledTypography,
  StyledTypographyH1
} from "../../styles/scoreBoard.js";

export default function ScoreBoard({
  G,
  ctx,
  playerID,
  matchData,
}) {
  let standings = {};
  let players = G.players;

  players.forEach((player, index) => {
    // validate that player.playerID === index;
    standings[index] = player;
  });
  matchData.forEach((namedPlayer) => {
    let playerID = namedPlayer?.id;
    let playerName = namedPlayer?.name;
    standings[playerID].playerName = playerName;
  });

  var currStandings = Object.values(standings).sort((a, b) => (b.winningCards.length - a.winningCards.length));

  return (
    <StyledContainer sx={{ zIndex: '2' }}>
      <StyledTypographyH1>
        Leader Board
      </StyledTypographyH1>
      <StyledList>
        {currStandings.map((standing, index) => {
      return <StyledTypography>{`${index + 1}. ${standing.playerName}`}</StyledTypography>
    })}
      </StyledList>
    </StyledContainer>
  );
}