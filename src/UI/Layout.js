import React from 'react';
import Header from '../features/Header';
import Hero from './Hero';
import { Outlet } from 'react-router-dom';
//import { StyledContainer } from '../styles/appStyles.js';

export default function Layout({ user, setUser }) {
  return(
    <React.Fragment>
      <Header user={user} setUser={setUser} />
      <Hero sx={{zIndex: '-2'}}/>
      {/* <StyledContainer> */}
        <Outlet />
      {/* </StyledContainer> */}
    </React.Fragment>
  )
};