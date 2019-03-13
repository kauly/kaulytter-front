import { createMuiTheme } from "@material-ui/core/styles";
import { blue, dark } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: dark
  },
  typography: {
    fontFamily: "Helvetica"
  }
});

export default theme;
