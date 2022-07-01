/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Province from './routes/Province';
import Health from './routes/Health';
import Food from './routes/Food';
import Cause from './routes/Cause';
import Login from './routes/Login';
import Register from './routes/Register';
import Simulation from './routes/Simulation';

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route path="/health">
            <Health />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/cause">
            <Cause />
          </Route>
          <Route path="/food">
            <Food />
          </Route>
          <Route path="/simulation">
            <Simulation />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/province">
            <Province />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}
