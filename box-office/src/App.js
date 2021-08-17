import React from "react";
import {Switch,Route} from "react-router-dom"
import { ThemeProvider } from 'styled-components' 
import Show from './pages/Show'
import Home from "./pages/Home";
import Starred from "./pages/Starred";


function App() {

  const theme = {
    mainColors: {
      blue: '#2400ff',
      gray: '#c6c6c6',
      dark: '#353535',
    }
  };
  
  return (
   <ThemeProvider theme={theme}>
    <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/starred">
      <Starred />
    </Route>
    <Route exact path="/show/:id">
      <Show />
      </Route>
    <Route>
      <div>
        PAGE NOT FOUND 404 ERROR
      </div>
    </Route>
    </Switch>
    </ThemeProvider>
  );
}

export default App;
