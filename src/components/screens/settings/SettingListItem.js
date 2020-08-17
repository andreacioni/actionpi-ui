import { ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Videocam from '@material-ui/icons/Videocam';
import React from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({}));

export default function SettingListItem(props) {
    const classes = useStyles();

    return (
        <div>
            <ListItem>
                <ListItemIcon>{props.icon}</ListItemIcon>
                <ListItemText primary={props.title} secondary={props.subtitle} />
            </ListItem>
            <Divider/>
        </div>
    );
}

SettingListItem.propTypes = {
    icon: PropTypes.element,
    title: PropTypes.string,
    subtitle: PropTypes.string
}