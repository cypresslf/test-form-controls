import { ChangeEvent, useState } from "react";
import "./App.css";
import { ToggleButton, ToggleButtonGroup } from "./ToggleButton";
import { createTheme, ThemeProvider } from "@mui/material";
import styled from "styled-components";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [alignment, setAlignment] = useState<string>();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setAlignment(event.target.value);
  return (
    <ThemeProvider theme={theme}>
      <StyledForm
        onSubmit={(event) => {
          event.preventDefault();
          console.log(new FormData(event.currentTarget));
        }}
      >
        <ToggleButtonGroup $orientation="vertical">
          <ToggleButton
            name="radioInput"
            value="left"
            checked={alignment === "left"}
            onChange={handleChange}
            required
          >
            Left
          </ToggleButton>
          <ToggleButton
            name="radioInput"
            value="center"
            checked={alignment === "center"}
            onChange={handleChange}
            required
          >
            Center
          </ToggleButton>
          <ToggleButton
            name="radioInput"
            value="right"
            checked={alignment === "right"}
            onChange={handleChange}
            required
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
