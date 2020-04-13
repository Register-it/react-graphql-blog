import { createMuiTheme } from "@material-ui/core/styles"

const theme = {
  palette: {
    primary: {
      main: "#fff",
      // main: "#c2dde6",
      contrastText: "#111111"
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
