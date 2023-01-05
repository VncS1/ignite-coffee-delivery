import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { CoffeesContextProvider } from "./contexts/CoffeesContext";
import { Router } from "./router";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesContextProvider>
          <Header />
          <Router />
        </CoffeesContextProvider>
        <GlobalStyle />
      </BrowserRouter>

    </ThemeProvider>
  )
}
