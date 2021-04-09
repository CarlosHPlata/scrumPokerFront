import { Paper, Typography } from '@material-ui/core';
import React from 'react';

import styles from './GameCard.module.css';

const GameCard = (props) => {

    const getType = () => {

        if (props.value == null) {
            return styles.cardUnsetted;
        }

        if (props.value === 'pass') {
            return styles.cardPass;
        }

        if (parseInt(props.value) <= 5) {
            return styles.cardLow;
        }

        if (parseInt(props.value) > 5 && parseInt(props.value) <= 20) {
            return styles.cardMedium;
        }

        if (parseInt(props.value) > 13) {
            return styles.cardHigh;
        }

        return styles.cardUnknown;
    };

    const classNamet = `${styles.card} ${getType()} ${props.isSelectable? styles.selectable : ''}`;

    return (
        <div className={`${styles.cardContainer} ${props.isSelectable? styles.selectable : ''}`}>
            <Paper className={classNamet}>
                <Typography variant={props.value === 'pass'? 'h4' : 'h3'}>{ props.value !=null? (props.value + '').toUpperCase() : '-' }</Typography>
            </Paper>
        </div>
    );
};

export default GameCard;