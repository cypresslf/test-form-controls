import { ButtonBase } from "@mui/material";
import styled from "styled-components";

export function ToggleButton({
  value,
  name,
  checked,
  onChange,
  children,
}: {
  value: string;
  name: string;
  checked: boolean;
  onChange: (value: string) => void;
  children: React.ReactNode;
}) {
  return (
    <ButtonBase component="label">
      {children}
      <StyledInput
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(event) => onChange(event.target.value)}
      />
    </ButtonBase>
  );
}

const StyledInput = styled.input`
  display: none;
`;

const BACKGROUND_COLOR = "rgba(255, 255, 255, 0.12)";
const TEXT_COLOR = "rgba(255, 255, 255, 0.38)";
const BORDER_WIDTH = 1;
export const ToggleButtonGroup = styled.div`
  & > label + label {
    border-left-color: transparent;
    margin-left: -${BORDER_WIDTH}px;
  }
  & > label:has(> input:hover) {
    background-color: rgba(255, 255, 255, 0.05);
    color: ${TEXT_COLOR};
  }
  & > label:has(> input:checked) {
    background-color: ${BACKGROUND_COLOR};
    color: white;
  }
  & > label:has(> input:checked:hover) {
    background-color: rgba(255, 255, 255, 0.15);
  }
  & > label {
    align-items: center;
    background-color: transparent;
    border: ${BORDER_WIDTH}px solid ${BACKGROUND_COLOR};
    box-sizing: border-box;
    color: ${TEXT_COLOR};
    display: flex;
    flex-basis: 100px;
    justify-content: center;
    flex-grow: 1;
    font: 500 0.875rem/1.75 "Roboto", "Helvetica", "Arial", sans-serif;
    padding: 11px;
    user-select: none;
    border-collapse: collapse;
  }

  display: inline-flex;
`;