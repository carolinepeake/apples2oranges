import * as React from "react";
// import { Client } from 'boardgame.io/react';
// import { SocketIO } from 'boardgame.io/multiplayer';
import { Apples } from './game/Apples';
// import { ApplesBoard } from './game/ApplesBoard';
import { Routes, Route, useParams } from 'react-router-dom';
import { Container } from "@mui/material";
import Header from "./features/Header.js";
import Lobby from "./features/Lobby";
import { Dashboard } from "./features/Dashboard";
import { CreateGame } from "./features/CreateGame";
import { WaitingRoom } from "./features/WaitingRoom";
import { StyledEngineProvider } from "@mui/material/styles";

function App() {
  // let { matchId } = useParams

  // generate random matchId (or use create API for authenticated matches)

  // const ApplesClient = Client({
  //  game: Apples,
  //   board: ApplesBoard,
  //   numPlayers: 3,
  //   debug: true,
  //   // multiplayer: Local(),
  //   multiplayer: SocketIO({server: 'localhost:8000'})
  // });

  // let applesClients=[<ApplesClient playerID="0" />, <ApplesClient playerID="1" />,  <ApplesClient playerID="2" />];

  return (
    <StyledEngineProvider injectFirst>
      <Header/>
      <div>
          <Container maxWidth="lg">
            <Routes>
                {/* <Route path="/profile/:username" element={<EditProfile/>}/> */}

                <Route path="/" element={<Dashboard/>}/>
                <Route path="/home" element={<Dashboard/>}/>
                {/* <Route path="/creategame" element={<CreateGame applesClients={applesClients}/>}/> */}
                <Route path="/creategame" element={<CreateGame/>}/>
                <Route  path="/joingame" element={<Lobby/>}/>
                <Route path="/waitingroom/:matchID" element={<WaitingRoom/>}/>
                <Route  path="/game/apples/:matchID" element={<Apples/>}/>
            </Routes>
          </Container>
      </div>
    </StyledEngineProvider>
  );
}

export default App;


// pages: edit profile, create custom cards, logout

