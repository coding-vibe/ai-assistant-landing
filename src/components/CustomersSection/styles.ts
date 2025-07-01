import { css } from "@emotion/react";
import { Theme } from "@mui/material";

export const section = (theme: Theme) => css`
  background-color: #000;

  ${theme.breakpoints.up("sm")} {
    padding: 45px 0;
  }

  ${theme.breakpoints.down("sm")} {
    padding: 23px 0;
  }
`;

export const containerStyles = css`
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
`;

export const scrollerStyles = css`
  display: inline-flex;
  gap: 40px;
  align-items: center;
`;
