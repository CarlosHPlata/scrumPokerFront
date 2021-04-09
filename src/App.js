import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PokerScreen from './app/screens/poker/PokerScreen';

import ActionCard from './app/components/actionCard/ActionCard';

function App() {
    return (
        <Router>
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
                <Route path="/game">
                    {/* <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start" className={'Hello'} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" className={"title"}>News</Typography>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar> */}
                    <PokerScreen />
                </Route>
                <Route path="/">
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1}}>
                        <ActionCard>
                            asdfasdfas
                        </ActionCard>
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
