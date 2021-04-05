import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

import styles from './activeStory.module.css';
import ActionCard from '../../../../components/actionCard/ActionCard';

export default (props) => {
    return (
        <ActionCard>
            <Grid container direction="row">
                <Typography variant="h5">
                    US01 As a user I would like to be able to create an API Connector that uses other HTTP Methods
                </Typography>
                <br/>
                <Typography>
                    As a user I would like to be able to create an API connector that can connect with
                    GET
                    HEAD
                    POST
                    CONNECT
                    OPTIONS
                    TRACE 
                </Typography>
            </Grid>
            
        </ActionCard>
                    
    );
};