
import  {createMuiTheme} from "@material-ui/core";

const THEME = createMuiTheme({
  palette: {
    list: ["primary", "secondary", "error"],
    primary: {
      id: 0,
      main: "#039be5",
      light: "#63ccff",
      dark: "#C21800",
      contrastText: "#fafafa"
    },
    secondary: {
      id: 1,
      main: "#f50057",
      light: "#ff5983",
      dark: "#bb002f",
      contrastText: "#f9fbe7"
    },
    error: {
      id: 2,
      main: "#bb002f",
      light: "#f9fbe7"
    }
  }
});


export default THEME;
