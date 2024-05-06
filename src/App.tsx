import { useState } from "react";
import "./App.css";
import { ToggleButton, ToggleButtonGroup } from "./MyToggleButton";
import {
  ToggleButtonGroup as MuiToggleButtonGroup,
  ToggleButton as MuiToggleButton,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import styled from "styled-components";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [alignment, setAlignment] = useState("left");
  return (
    <ThemeProvider theme={theme}>
      <StyledForm
        onSubmit={(event) => {
          event.preventDefault();
          console.log(new FormData(event.currentTarget));
        }}
      >
        <ToggleButtonGroup>
          <ToggleButton
            name="radioInput"
            value="left"
            checked={alignment === "left"}
            onChange={setAlignment}
          >
            Left
          </ToggleButton>
          <ToggleButton
            name="radioInput"
            value="center"
            checked={alignment === "center"}
            onChange={setAlignment}
          >
            Center
          </ToggleButton>
          <ToggleButton
            name="radioInput"
            value="right"
            checked={alignment === "right"}
            onChange={setAlignment}
          >
            Right
          </ToggleButton>
        </ToggleButtonGroup>
        <button type="submit">submit</button>
      </StyledForm>
    </ThemeProvider>
  );
}

export default App;

const StyledForm = styled.form`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: flex-start;
`;

const StyledMuiToggleButtonGroup = styled(MuiToggleButtonGroup)`
  &.MuiToggleButtonGroup-root {
    border-radius: 0;
  }
  & .MuiToggleButton-root {
    border-radius: 0;
    text-transform: none;
  }
`;
