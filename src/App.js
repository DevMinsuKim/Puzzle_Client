import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './style/GlobalStyles'
import theme from './style/theme'
import Home from './components/page/Home/Home' 
import Project from './components/page/Project/Project'
import Puzzle from './components/page/Puzzle/Puzzle' 
import Calendar from './components/page/Calendar/Calendar'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <Router>
        <Switch>
          <Route path = '/home' component = {Home}></Route>
          <Route path = '/project' component = {Project}></Route>
          <Route path = '/puzzle' component = {Puzzle}></Route>
          <Route path = '/calendar' component = {Calendar}></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
