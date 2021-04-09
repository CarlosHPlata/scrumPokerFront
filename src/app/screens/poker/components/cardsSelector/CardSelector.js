import { Paper } from '@material-ui/core';
import React from 'react';
import ActionCard from '../../../../components/actionCard/ActionCard';
import GameCard from '../../../../components/GameCard/GameCard';

import styles from './CardSelector.module.css';

const CardSelector = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.front}>
                <GameCard value="0" isSelectable />
                <GameCard value="0.5" isSelectable />
                <GameCard value="1" isSelectable />
                <GameCard value="2" isSelectable />
                <GameCard value="3" isSelectable />
                <GameCard value="5" isSelectable />
                <GameCard value="8" isSelectable />
                <GameCard value="13" isSelectable />
                <GameCard value="20" isSelectable />
                <GameCard value="40" isSelectable />
                <GameCard value="100" isSelectable />

                <GameCard value="pass" isSelectable />
                <GameCard value="?" isSelectable />
            </div>
        </div>
    );
};

export default CardSelector;