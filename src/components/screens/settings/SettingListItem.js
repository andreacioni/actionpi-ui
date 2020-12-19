import { ListItem, ListItemIcon, ListItemText, Divider, ListItemSecondaryAction } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({}));

export default function SettingListItem(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <ListItem onClick={props.onClick} button={props.button} divider>
                <ListItemIcon>{props.icon}</ListItemIcon>
                <ListItemText primary={props.title} secondary={props.subtitle} />
                {props.action}
            </ListItem>
            <Divider/>
        </React.Fragment>
    );
}

SettingListItem.propTypes = {
    icon: PropTypes.element,
    action: PropTypes.element,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    button: PropTypes.bool,
    onClick: PropTypes.func,
}

SettingListItem.defaultProps = {
    button: true
}