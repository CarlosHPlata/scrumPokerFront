import React from 'react';
import { Grid, Typography } from '@material-ui/core';

//import styles from './activeStory.module.css';
import ActionCard from '../../../../components/actionCard/ActionCard';

const ActiveStory = (props) => {
    return (
        <ActionCard>
            <Grid container direction="column">
                <Typography variant="h5">
                    US01 As a user I would like to win on valorant
                </Typography>
                <Typography>
                    As a user I will kill alll enemies do a penta kill and win being MVP with more that 5 of KDA
                </Typography>
            </Grid>
            
        </ActionCard>
                    
    );
};

export default ActiveStory;