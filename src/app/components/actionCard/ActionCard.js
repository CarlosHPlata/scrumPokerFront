import { Paper } from '@material-ui/core';
import React from 'react';

import styles from './ActionCard.module.css';

export default (props) => {

    return (
        <Paper className={styles.card}>
            {props.children}
        </Paper>
    );

};