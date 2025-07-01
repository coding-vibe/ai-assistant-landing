import { css } from "@emotion/react";
import { Theme } from "@mui/material";

export const section = (theme: Theme) => css`
  margin: 0 auto;
  background: linear-gradient(270deg, #e3fffe 0%, #dbe1ff 100%);

  ${theme.breakpoints.up("lg")} {
    padding: 115px 0 85px;
  }

  ${theme.breakpoints.down("lg")} {
    padding: ${theme.spacing(1.5)} ${theme.spacing(2.5)};
  }
`;

export const featureCard = (theme: Theme) => css`
  display: flex;
  background-color: ${theme.palette.background.paper};

  ${theme.breakpoints.up("md")} {
    gap: ${theme.spacing(8.5)};
    align-items: center;
    padding: 40px 100px;
    border-radius: 40px;

    &:not(:last-child) {
      margin-bottom: ${theme.spacing(4.25)};
    }
  }

  ${theme.breakpoints.down("md")} {
    gap: ${theme.spacing(4)};
    flex-direction: column;
    padding: 12px 12px 32px;
    border-radius: 20px;

    &:not(:last-child) {
      margin-bottom: ${theme.spacing(1.5)};
    }
  }
`;

export const title = (theme: Theme) =>
  css`
    ${theme.breakpoints.up("lg")} {
      margin-bottom: ${theme.spacing(5.5)};
    }

    ${theme.breakpoints.down("lg")} {
      margin-bottom: ${theme.spacing(1.5)};
    }
  `;

export const description = (theme: Theme) => css`
  margin-bottom: ${theme.spacing(5.5)};
`;

export const image = css`
  max-width: 100%;
  height: auto;
`;

export const imageLeft = css`
  order: -1;
`;

export const desktopImage = (theme: Theme) => css`
  flex-shrink: 0;

  ${theme.breakpoints.down("lg")} {
    display: none;
  }
`;

export const mobileImage = (theme: Theme) =>
  css`
    ${theme.breakpoints.up("lg")} {
      display: none;
    }
  `;

export const advantages = (theme: Theme) =>
  css`
    ${theme.breakpoints.up("lg")} {
      margin-bottom: ${theme.spacing(5.5)};
    }

    ${theme.breakpoints.down("lg")} {
      margin-bottom: ${theme.spacing(4)};
    }
  `;
