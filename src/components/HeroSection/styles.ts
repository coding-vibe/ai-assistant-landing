import { css } from "@emotion/react";
import { Theme } from "@mui/material";

export const section = (theme: Theme) => css`
  text-align: center;

  background-image: url("/images/hero_bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${theme.breakpoints.up("sm")} {
    padding: 15% 10% 5%;
  }

  ${theme.breakpoints.down("sm")} {
    padding: 30% 10% 10%;
  }
`;

export const wrap = css`
  display: flex;
  flex-direction: column;
  gap: 42px;
  width: 80%;
`;

export const title = (theme: Theme) => css`
  margin-bottom: 16px;
  color: ${theme.palette.text.secondary};
  text-transform: capitalize;
  font-weight: 700;
`;

export const description = (theme: Theme) => css`
  margin-bottom: 79px;
  color: ${theme.palette.text.secondary};
  font-weight: 500;
  opacity: 80%;
`;

export const buttonWrap = (theme: Theme) => css`
  display: block;
  margin-bottom: 40px;

  & .MuiButtonBase-root {
    padding: 18px 24px;
    background-color: #fff;
    color: #000;
    font-weight: 500;

    ${theme.breakpoints.up("sm")} {
      font-size: 24px;
      line-height: 1.33;
    }

    ${theme.breakpoints.down("sm")} {
      font-size: 16px;
      line-height: 1.5;
    }
  }
`;
export const rocketIcon = (theme: Theme) => css`
  ${theme.breakpoints.up("sm")} {
    margin-right: 20px;
  }

  ${theme.breakpoints.down("sm")} {
    margin-right: 12px;
  }
`;

export const clients = (theme: Theme) => css`
  margin-top: 4px;
  font-weight: 500;

  ${theme.breakpoints.down("sm")} {
    color: ${theme.palette.text.secondary};
    font-size: 14px;
  }
`;

export const rating = css`
  color: #fece1f;
`;
