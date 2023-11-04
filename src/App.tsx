import { Provider } from "react-redux"
import { store } from "./app/store"
import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from "./config/theme/theme"
import { BrowserRouter } from "react-router-dom"
import React from "react"
import Layout from "./components/layout/Layout"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
