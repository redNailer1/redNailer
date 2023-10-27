import React from "react";
import styled from "styled-components";
import {createTheme, Paper} from "@mui/material";

const myTheme = createTheme({
    palette: {
        primary: {
            main: "#f62993",
        },
        secondary: {
            main: "#cdcdd2",
        },
    },
});

const StyledPaper = styled(Paper)`
  && {
    background-color: ${({ theme }) => myTheme.palette.secondary.main};
    padding: 20px;
    margin: 20px;
  }
`;

function Paperer(props) {
    return (
        <StyledPaper>
            {props.children}
        </StyledPaper>
    );
}

export default Paperer;