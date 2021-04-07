import { Grid, Typography } from '@material-ui/core';
import React from 'react';

import styles from './ActiveStoryPoints.module.css';
import ActionCard from '../../../../components/actionCard/ActionCard';

const ActiveStoryPoints = (props) => {

    return (
        <ActionCard className={styles.numberCard}>
            <Grid item container justify='center' alignItems='stretch' xs>
                <Typography variant="h3">
                    2
                </Typography>
            </Grid>
        </ActionCard>
    );

};

export default ActiveStoryPoints;