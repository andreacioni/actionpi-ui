import { Divider, ListItem, ListItemIcon, ListItemText, Grid, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Movie, Image, GetApp, PlayCircleOutline } from '@material-ui/icons'
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles((theme) => ({}));

export default function RecordingTile(props) {
    const classes = useStyles();

    const isVideo = props.fileName.endsWith('.h264');

    return (
        <ListItem divider key={props.key}>
            <ListItemIcon>{isVideo ? <Movie /> : <Image />}</ListItemIcon>
            <ListItemText primary={props.fileName} secondary={"Size: " + props.fileSize} />
            <ListItemSecondaryAction>
                <IconButton>
                    <GetApp />
                </IconButton>
                {/* <IconButton>
                    <PlayCircleOutline />
                </IconButton> */}
            </ListItemSecondaryAction>
        </ListItem>
    );
}

RecordingTile.propTypes = {
    key: PropTypes.any.isRequired,
    fileName: PropTypes.string,
    fileSize: PropTypes.number
}