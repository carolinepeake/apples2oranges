import React from "react";
import { ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import { toggleAnimation } from "../app/mainSlice";
import { useDispatch } from "react-redux";
import {
  StyledComponentContainer,
  StyledDashButtons,
} from "../styles/globalStyles";

export const Dashboard = () => {
  const dispatch = useDispatch();
  return (
    <StyledComponentContainer>
      <ButtonGroup
        variant="contained"
        onClick={() => dispatch(toggleAnimation())}
      >
        <Link to={"/joingame"} style={{ textDecoration: "none" }}>
          <StyledDashButtons
            fontSize={{ xs: "0.5rem", sm: "1rem", md: "1.5rem" }}
            sx={{
              marginRight: "1rem",
              fontSize: {
                xs: "0.5rem",
                sm: "1rem",
                md: "1.5rem",
              },
              backgroundColor: "#212529",
              "&:hover": {
                backgroundColor: "#343a40",
              },
            }}
          >
            Join a Game
          </StyledDashButtons>
        </Link>
        <Link to={"/creategame"} style={{ textDecoration: "none" }}>
          <StyledDashButtons
            sx={{
              fontSize: {
                xs: "0.5rem",
                sm: "1rem",
                md: "1.5rem",
              },
              backgroundColor: "#868e96",
              "&:hover": {
                backgroundColor: "#adb5bd",
              },
            }}
          >
            Create A Game
          </StyledDashButtons>
        </Link>
      </ButtonGroup>
    </StyledComponentContainer>
  );
};

export default Dashboard;
