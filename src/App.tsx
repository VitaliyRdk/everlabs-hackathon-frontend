import { Provider } from "react-redux"
import { store } from "./app/store"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { BrowserRouter } from "react-router-dom"
import React from "react"
import Layout from "./components/layout/Layout"
import { SnackbarProvider } from "notistack"
import { theme } from "./config/theme"

const SnackbarProviderProps = {
  autoHideDuration: 5000,
  maxSnack: 5,
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <SnackbarProvider {...SnackbarProviderProps}>
            <CssBaseline />
            <Layout />
            <div id="app-modal" />
          </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
