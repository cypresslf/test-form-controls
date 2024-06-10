import { ButtonBase } from "@mui/material";
import { InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";

export function ToggleButton({
  children,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <ButtonBase component="label">
      {children}
      <input {...props} type="radio" />
    </ButtonBase>
  );
}

const BACKGROUND_COLOR = "rgba(255, 255, 255, 0.12)";
const TEXT_COLOR = "rgba(255, 255, 255, 0.38)";
const BORDER_WIDTH = 1;
export const ToggleButtonGroup = styled.div<{
  $orientation?: "vertical" | "horizontal";
}>`
  ${({ $orientation = "horizontal" }) =>
    $orientation === "vertical"
      ? css`
          & > label + label {
            border-top-color: transparent;
            margin-top: -${BORDER_WIDTH}px;
          }
        `
      : css`
          & > label + label {
            border-left-color: transparent;
            margin-left: -${BORDER_WIDTH}px;
          }
        `}

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
  & > label > input {
    appearance: none;
    // prevent it from showing a blue outline when focused,
    // which happens even if appearance is none
    outline: none;
  }
  display: inline-flex;
  flex-direction: ${({ $orientation = "horizontal" }) =>
    $orientation === "vertical" ? "column" : "row"};
`;
