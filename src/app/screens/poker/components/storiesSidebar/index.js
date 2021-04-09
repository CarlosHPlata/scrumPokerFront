import { Divider, Drawer, IconButton, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import React from 'react';
import ChevronRightIcon  from '@material-ui/icons/ChevronRight';

import styles from './StoriesSidebar.module.css';

const StoriesSidebar = (props) => {

    const us = [
        {
            id: 'US00',
            name: 'As a user I would like to win on valorant',
            points: 100,
        },
        {
            id: 'US01',
            name: 'As a user I would like to win on valorant',
            points: '2',
        },
        {
            id: 'US03',
            name: 'As a user I would like to win on valorant',
            points: 'P',
        },
        {
            id: 'US04',
            name: 'As a user I would like to win on valorant',
            points: '-',
        },
        {
            id: 'US05',
            name: 'As a user I would like to win on valorant',
            points: 5,
        },
    ];
    return (
        <Drawer className={styles.drawer} variant="persistent" anchor="right" open={props.open} classes={{paper: styles.drawerPaper}}>
            <div className={styles.drawerHeader}>
                <IconButton color="primary" onClick={props.onClose}>
                    <ChevronRightIcon />
                </IconButton>
            </div>
            <List>
                {us.map((item, index) => (
                    <ListItem className={styles.item} key={index}>
                        <div className={`${styles.userStory} ${index === 1? styles.active : ''}`}>
                            <div className={styles.points}>
                                <Typography >{item.points}</Typography>
                            </div>
                            <div>
                                <Typography>{item.id}</Typography>
                                <Typography variant="body2">{item.name}</Typography>
                            </div>
                        </div>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default StoriesSidebar;