import { useTheme } from "emotion-theming";
import { Provider } from 'react-redux';
import CustomDataTable from './pages/CustomDataTable';
import Test_Theme from './components/Test_Theme';
import store from './store';
import React, { useState } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Demo from "./demo";
import "./styles.css";
import Tabela from "./pages/Tabela";


// Tabela

const App = ({ isDark, setIsDark }) => {

  // material ui theme
  const [theme, setTheme] = useState({
    palette: {
      type: "light"
    }
  });
  const muiTheme = createMuiTheme(theme);

  // html theme
  const simpleHtmlTheme = useTheme();
 
  //change themes
  const toggleDarkTheme = () => {
    let newPaletteType = theme.palette.type === "light" ? "dark" : "light";
    setTheme({
      palette: {
        type: newPaletteType
      }
    });
    setIsDark(!isDark);
  };
  // Tabela

  return (
    
    <MuiThemeProvider theme={muiTheme}>

    <Provider store={store}>
          
        <Test_Theme theme={simpleHtmlTheme} />

            <h1>It's a light theme!</h1>

      <Demo onToggleDark={toggleDarkTheme} />
      <Tabela theme={simpleHtmlTheme}/>
      <CustomDataTable theme={simpleHtmlTheme}/>
      
      </Provider>



    </MuiThemeProvider>

  );
};
// Test_Theme
export default App;
