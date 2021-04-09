import {Grid, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';

import styles from './pokerScreen.module.css';

import ActiveStory from './components/activeStory/ActiveStory';
import Actions from './components/actions/Actions';
import ActiveStoryPoints from './components/ActiveStoryPoints/ActiveStoryPoints';
import Game from './components/Game/Game';
import CardSelector from './components/cardsSelector/CardSelector';
import StoriesSidebar from './components/storiesSidebar';

const PokerScreen = (props) => {

    const [open, setOpen] = useState(true);

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    }

    return (
        <div className={styles.root}>
            <main className={`${styles.container} ${open? styles.shift : ''}`}>
                <Grid item container xs direction="column">
                    <Grid container justify="flex-end" direction="row">
                        <IconButton className={`${styles.menu} ${open? styles.shift : ''}`} onClick={handleDrawerOpen}>
                            <MenuIcon color="secondary" />
                        </IconButton>
                    </Grid>
                    <Grid container direction="row">
                        <Grid item container xs={11}>
                            <ActiveStory />
                        </Grid>
                        <Grid item container xs={1}>
                            <ActiveStoryPoints />
                        </Grid>
                    </Grid>
                    <Grid container direction="row">
                        <Actions />
                    </Grid>
                    <Grid className={styles.game} container direction="row">
                        <Game />
                    </Grid>
                    <Grid container>
                        <CardSelector />
                    </Grid>
                </Grid>
            </main>

            <StoriesSidebar open={open} onClose={handleDrawerClose}/>
        </div>
        
    );
};

export default PokerScreen;