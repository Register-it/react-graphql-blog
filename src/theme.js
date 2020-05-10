import { createMuiTheme } from "@material-ui/core/styles"

const theme = {
  palette: {
    primary: {
      main: "#3E454D",
      // main: "#c2dde6",
      contrastText: "#fff"
    },
    secondary: {
      // main: '#628078',
      main: "#e05915",
      contrastText: "#ffffff"
    }
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#ffffff"
        }
      }
    }
  }
}

export default createMuiTheme(theme)
