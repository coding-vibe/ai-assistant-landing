import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const advantages = (theme: Theme) =>
  css`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.spacing(1)};

    ${theme.breakpoints.up('xl')} {
      margin-bottom: ${theme.spacing(5.5)};
    }

    ${theme.breakpoints.down('xl')} {
      margin-bottom: ${theme.spacing(4)};
    }
  `;

export const advantage = (theme: Theme) =>
  css`
    display: flex;
    align-items: center;
    padding: ${theme.spacing(1.5)};
    font-weight: 700;
    background-color: #fff;
    border-radius: ${theme.spacing(1.25)};
  `;

export const icon = (theme: Theme) => css`
  color: #00b39b;
  margin-right: ${theme.spacing(2)};
`;
