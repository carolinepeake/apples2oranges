import {
  Box,
  List,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  gap: '1rem',
  width: '80%',
  background: 'rgba(255, 165, 120, 0.6)',
  margin: '5% auto',
  padding: '1em',
  border: '2px solid white'
})

export const StyledList = styled(List) ({
  width: '100%',
  marginLeft: '1.5em',
})

export const StyledTypography = styled(Typography)({
  padding: "1rem",
  fontFamily: "roboto",
  textShadow: "0 0 10px white",
  fontWeight: "800",
  fontSize: {
    xs: "1rem",
    sm: "1.5rem",
    md: "1.8rem",
    lg: "2rem",
  },
  color: "red",
});

export const StyledTypographyH1 = styled(Typography)({
  textAlign: 'center',
  padding: "0.5rem",
  fontFamily: "roboto",
  textShadow: "0 0 10px white",
  fontWeight: "800",
  fontSize: {
    xs: "1rem",
    sm: "1.5rem",
    md: '43px',
    lg: "2rem",
  },
  color: "red",
  textDecoration: 'underline',
});

