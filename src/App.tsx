import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { CoffeesContextProvider } from "./contexts/CoffeesContext";
import { PurchaseContextProvider } from "./contexts/PurchaseContext";
import { Router } from "./router";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesContextProvider>
          <PurchaseContextProvider>
            <Header />
            <Router />
          </PurchaseContextProvider>
        </CoffeesContextProvider>
        <GlobalStyle />
      </BrowserRouter>

    </ThemeProvider>
  )
}
