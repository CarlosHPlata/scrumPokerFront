import { Paper } from '@material-ui/core';
import React from 'react';
import ActionCard from '../../../../components/actionCard/ActionCard';
import GameCard from '../../../../components/GameCard/GameCard';

import styles from './CardSelector.module.css';

const CardSelector = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.front}>
                <GameCard value="0" />
                <GameCard value="0.5" />
                
                <GameCard value="1" />
                <GameCard value="2" />
                
                <GameCard value="3" />
                <GameCard value="5" />
                
                <GameCard value="8" />
                <GameCard value="13" />
                
                <GameCard value="20" />
                <GameCard value="40" />
                <GameCard value="100" />

                <GameCard value="pass" />
                <GameCard value="?" />
            </div>
        </div>
    );
};

export default CardSelector;