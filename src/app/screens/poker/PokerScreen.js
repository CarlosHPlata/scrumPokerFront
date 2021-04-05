import { Button, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';

import styles from './pokerScreen.module.css';
import ActiveStory from './components/activeStory/ActiveStory';
import Actions from './components/actions/Actions';

export default (props) => {

    return (
        <div className={styles.screen}>
            <Grid className={styles.gameContainer} container>
                <Grid item container justify="space-between" spacing={2} alignItems="stretch" xs={10}>
                    <Grid item container direction="column" xs={11}>
                        <ActiveStory />
                        <Actions />
                    </Grid>
                    <Grid  item container alignItems="stretch" xs={1}> 
                        <Paper className={styles.numberCard}>
                            <Grid item container xs>
                                <Typography variant="h3">
                                    2
                                </Typography>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <Typography>
                        asdfasd
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};
