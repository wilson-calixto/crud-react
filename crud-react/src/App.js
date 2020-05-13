
import React, { useState } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Demo from "./demo";
import "./styles.css";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from "emotion-theming";
import Routes from './Routes';

import {
  setInitialState,
  setMaterialTheme
} from '../src/store/ducks/todos';
import {themeLight,themeDark} from './Utils'
import Side_Bar from "./components/Side_Bar";



const App = () => {


  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(setInitialState());
  }, []);



  const { material_theme } = useSelector(
    state => state.todos
  );



  const muiTheme = createMuiTheme(material_theme)

  //change themes
  const toggleDarkTheme = () => {
    let newPaletteType = material_theme.palette.type === "light" ? "dark" : "light";

    dispatch(setMaterialTheme({
        palette: {
          type: newPaletteType
        }
      }));



  };


  return (
    // TODO resolver bug da troca de tema
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={material_theme.palette.type === "light" ? themeLight: themeDark}>
        <Demo onToggleDark={toggleDarkTheme} />
        <Routes />

      </ThemeProvider>
    </MuiThemeProvider>

  );
};
export default App;
