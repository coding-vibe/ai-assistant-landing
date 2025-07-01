import { css } from "@emotion/react";
import { Theme } from "@mui/material";

export const header = (theme: Theme) => css`
  width: 100%;
  position: absolute;
  color: ${theme.palette.text.secondary};
  z-index: 1;
`;

export const flexContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const logo = (theme: Theme) => css`
  margin-right: 16px;

  ${theme.breakpoints.down("sm")} {
    max-width: 100px;
  }
`;

export const gradientBorderButtonWrapper = css`
  position: relative;
  display: inline-block;
  padding: 2px 0px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50px;
    padding: 2px;
    background: linear-gradient(90deg, #3acfd5 0%, #3a4ed5 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    pointer-events: none;
    z-index: 1;
  }
`;

export const gradientBorderButton = (theme: Theme) => css`
  & .MuiButton-root {
    position: relative;
    padding: ${theme.spacing(1, 3)};
    border-radius: 6px;
    font-weight: 500;
    box-shadow: none;
    min-width: 0;
    background-color: transparent;
    border: none;
    text-transform: none;
    z-index: 2;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      box-shadow: none;
    }

    ${theme.breakpoints.down("sm")} {
      font-size: 14px;
    }
  }
`;

export const burgerButton = (theme: Theme) => css`
  margin-left: 20px;
  color: ${theme.palette.text.secondary};
`;
