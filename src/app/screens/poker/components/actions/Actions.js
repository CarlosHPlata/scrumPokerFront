import { Button, Grid } from '@material-ui/core';
import React from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';
import ReplyIcon from '@material-ui/icons/Reply';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';


const Actions = (props) => {
    return (
        <Grid item container justify="space-around" direction="row">
            <Button variant="contained" color="secondary" startIcon={<RefreshIcon />}> Reset Cards</Button>
            <Button variant="contained" startIcon={<ReplyIcon />}> Flip Cards</Button>
            <Button variant="contained" startIcon={<ArrowBackIosIcon />}> Previous</Button>
            <Button variant="contained" startIcon={<ArrowForwardIosIcon /> }>Next</Button>
            <Button variant="contained" startIcon={<DoubleArrowIcon />}> Next Unpointed Story</Button>
        </Grid>
    );
};

export default Actions;