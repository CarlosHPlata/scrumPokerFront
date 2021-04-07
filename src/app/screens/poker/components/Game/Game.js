import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';

import ActionCard from '../../../../components/actionCard/ActionCard';
import GameCard from '../../../../components/GameCard/GameCard';

const Game = (props) => {
    return (
        <ActionCard>
            <Grid container justify='center' spacing={4} direction="row">
                <Grid item container justify='center' alignItems='center' md={2} xs={4} direction="column">
                    <Typography> Raul Zamudio</Typography>
                    <GameCard  value="21" />
                </Grid>
                <Grid item container justify='center' alignItems='center' md={2} xs={4} direction="column">
                    <Typography> Raul Zamudio</Typography>
                    <GameCard  value={8} />
                </Grid>
                <Grid item container justify='center' alignItems='center' md={2} xs={4} direction="column">
                    <Typography> Raul Zamudio</Typography>
                    <GameCard  value={0} />
                </Grid>
                <Grid item container justify='center' alignItems='center' md={2} xs={4} direction="column">
                    <Typography> Raul Zamudio</Typography>
                    <GameCard  value="pass" />
                </Grid>
                <Grid item container justify='center' alignItems='center' md={2} xs={4} direction="column">
                    <Typography> Raul Zamudio</Typography>
                    <GameCard  value="?" />
                </Grid>
                <Grid item container justify='center' alignItems='center' md={2} xs={4} direction="column">
                    <Typography> Raul Zamudio</Typography>
                    <GameCard  value="?" />
                </Grid>
                <Grid item container justify='center' alignItems='center' md={2} xs={4} direction="column">
                    <Typography> Raul Zamudio</Typography>
                    <GameCard  value={null} />
                </Grid>
            </Grid>
        </ActionCard>
    );
};

export default Game;