import { Paper } from '@material-ui/core';
import React from 'react';

import styles from './ActionCard.module.css';

const ActionCard = (props) => {

    const classes = `${styles.card}${props.className? ' '+props.className : ''}`;

    return (
        <Paper className={classes}>
            {props.children}
        </Paper>
    );

};

export default ActionCard;