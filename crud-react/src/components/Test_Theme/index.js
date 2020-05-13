
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import {themeLight,themeDark} from '../../Utils'

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setInitialState,
} from '../../store/ducks/todos';
export default function Test_Theme () {



  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setInitialState());

    
    
    // eslint-disable-next-line
}, []);

const { material_theme } = useSelector(
  state => state.todos
);

let theme = material_theme.palette.type === "light" ? themeLight: themeDark



  return (
    <div
      css={css`
        padding: 50px 0;
        background-color: ${theme.background};
        color: ${theme.text};
        text-align: center;
        transition-duration: 0.2s;
        transition-property: background-color, color;
      `}
    >
      <h1>Hello Mode</h1>
      <h2>We will make some magic happen!</h2>
      <button
        css={css`
          margin-top: 30px;
          border: 2px solid ${theme.buttonBorder};
          background-color: ${theme.buttonBg};
          color: ${theme.buttonText};
          padding: 14px 28px;
          font-size: 16px;
          transition-duration: 0.2s;
          transition-property: background-color, color;
          cursor: pointer;

          :hover {
            background-color: ${theme.buttonBgHover};
            color: ${theme.buttonTextHover};
          }
        `}
        onClick={() => {
        }}
      >
        Change to mode
      </button>
    </div>
  );
}

