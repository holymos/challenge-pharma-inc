import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import { Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserDetailModal } from "./pages/UserDetail";
import { UserContextProvider } from "./context/userContext";

export function App() {
  return (
    <UserContextProvider>
      <GlobalStyle />
      <Header />
      <Route path="/" component={Home} />
      <Route path="/user/:id" component={UserDetailModal} />
    </UserContextProvider>
  );
}
