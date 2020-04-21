// import React from 'react';
import { Provider } from 'react-redux';
// import styled from "@emotion/styled";
// import store from './store';
// import { AppBar, Button, Typography } from "@material-ui/core";
// import THEME from "./theme";


import CustomDataTable from './pages/CustomDataTable';
import Test_Theme from './components/Test_Theme';
// class App extends React.Component {
//   state = {
//     activePaletteId: THEME.palette.primary.id
//   };

//   get activePaletteName() {
//     return THEME.palette.list[this.state.activePaletteId];
//   }

//   get activePalette() {
//     return THEME.palette[this.activePaletteName];
//   }

//   nextPalette = () => {
//     this.setState(s => ({
//       activePaletteId: ++s.activePaletteId % THEME.palette.list.length
//     }));
//   };

//   render() {
//     return (

//       <Provider store={store}>
//         <Test_Theme></Test_Theme>
//         <h1>It's a light theme!</h1>



//         <div className="App">
//           <AppBar
//             position="static"
//             style={{
//               textAlign: 'center',
//               marginBottom: '20px',
//               backgroundColor: this.activePalette.main
//             }}
//           >
//             <Typography
//               style={{ color: '#fff' }}
//               variant="subheading"
//             >
//               Palette: {this.activePaletteName}
//             </Typography>
//           </AppBar>
//           <Button
//             variant="raised"
//             onClick={this.nextPalette}
//             style={{ backgroundColor: this.activePalette.light }}
//           >
//             Change palette
//         </Button>

//         </div>

//         <CustomDataTable
//           style={{
//             backgroundColor: this.activePalette.main
//           }}
//         />


//       </Provider>
//     );
//   }
// }


// export default App;

import store from './store';
import React, { useState } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Demo from "./demo";

const App = () => {
  // We keep the theme in app state
  const [theme, setTheme] = useState({
    palette: {
      type: "light"
    }
  });

  // we change the palette type of the theme in state
  const toggleDarkTheme = () => {
    let newPaletteType = theme.palette.type === "light" ? "dark" : "light";
    setTheme({
      palette: {
        type: newPaletteType
      }
    });
  };

  // we generate a MUI-theme from state's theme object
  const muiTheme = createMuiTheme(theme);

  // the mui theme is used in the themeProvider.
  return (
    <MuiThemeProvider theme={muiTheme}>

    <Provider store={store}>
            <Test_Theme></Test_Theme>
            <h1>It's a light theme!</h1>

      <Demo onToggleDark={toggleDarkTheme} />
      <CustomDataTable/>
      </Provider>

    </MuiThemeProvider>

  );
};
// Test_Theme
export default App;
