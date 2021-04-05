import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import PokerScreen from './app/screens/poker/PokerScreen';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'


function App() {
    return (
        <Router>
            <div>
                {/*<nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>*/}

                <Switch>
                    <Route path="/about">
                        <div>Hello world 1</div>
                    </Route>
                    <Route path="/users">
                        <div>Hello world 2</div>
                    </Route>
                    <Route path="/">
                        <div>
                        <AppBar position="static">
                            <Toolbar>
                                <IconButton edge="start" className={'Hello'} color="inherit" aria-label="menu">
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" className={"title"}>News</Typography>
                                <Button color="inherit">Login</Button>
                            </Toolbar>
                        </AppBar>
                        <PokerScreen />
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
