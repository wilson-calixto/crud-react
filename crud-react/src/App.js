import { useTheme } from "emotion-theming";
import CustomDataTable from './pages/CustomDataTable';
import Test_Theme from './components/Test_Theme';
import React, { useState } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Demo from "./demo";
import "./styles.css";
import Tabela from "./pages/Tabela";

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from "emotion-theming";

import {
  setIsDark2,
  setInitialState,
  setTotaElements,
  setMaterialTheme
} from '../src/store/ducks/todos';

// Tabela
const themeLight = {
  text: "#000",
  background: "#fff",
  buttonText: "#000",
  buttonTextHover: "#fff",
  buttonBorder: "#000",
  buttonBg: "rgba(0, 0, 0, 0)",
  buttonBgHover: "rgba(0, 0, 0, 1)",
};

const themeDark = {
  text: "#fff",
  background: "#121212",
  buttonText: "#fff",
  buttonTextHover: "#000",
  buttonBorder: "#fff",
  buttonBg: "rgba(255, 255, 255, 0)",
  buttonBgHover: "rgba(255, 255, 255, 1)",
};
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
// TODO melhorar o tema


  return (

    <MuiThemeProvider theme={muiTheme}>

      <ThemeProvider theme={material_theme.palette.type === "light" ? themeLight: themeDark}>

        <Test_Theme theme={material_theme.palette.type === "light" ? themeLight: themeDark } />

        <h1> sdsadsdsaddsasd </h1>

        <Demo onToggleDark={toggleDarkTheme} />
        <Tabela theme={material_theme.palette.type === "light" ?  themeLight: themeDark} />
        <CustomDataTable theme={material_theme.palette.type === "light" ? themeLight: themeDark} />


      </ThemeProvider>

    </MuiThemeProvider>

  );
};
// Test_Theme
export default App;
