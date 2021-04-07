import { Grid } from '@material-ui/core';
import React from 'react';

import styles from './pokerScreen.module.css';

import ActiveStory from './components/activeStory/ActiveStory';
import Actions from './components/actions/Actions';
import ActiveStoryPoints from './components/ActiveStoryPoints/ActiveStoryPoints';
import Game from './components/Game/Game';
import CardSelector from './components/cardsSelector/CardSelector';

const PokerScreen = (props) => {

    return (
        <Grid container className={styles.container} direction="row">
            <Grid item container md={10} xs={12} direction="column">
                <Grid container direction="row">
                    <Grid item container xs={11}>
                        <ActiveStory />
                    </Grid>
                    <Grid item container xs={1}>
                        <ActiveStoryPoints />
                    </Grid>
                </Grid>
                <Grid className={styles.game} container direction="row">
                    <Game />
                </Grid>
                <Grid container>
                    <CardSelector />
                </Grid>
            </Grid>
            <Grid item container xs={2} direction="column">
                asdfasdf
            </Grid>
        </Grid>
    );
};

export default PokerScreen;