import React from 'react';
import { Divider, ListItem, ListItemIcon, ListItemText, Link, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Movie, Image, GetApp, Cancel } from '@material-ui/icons'
import PropTypes from 'prop-types';
import { BASE_URL } from '../../../globals'

const useStyles = makeStyles((theme) => ({}));

export default function RecordingTile(props) {
    const classes = useStyles();

    const isVideo = props.fileName.endsWith('.h264');

    return (
        <ListItem divider key={props.key}>
            <ListItemIcon>{isVideo ? <Movie /> : <Cancel />}</ListItemIcon>
            <ListItemText primary={props.fileName} secondary={"Size: " + props.fileSize + ' bytes'} />
            <ListItemSecondaryAction>
                <Link href={BASE_URL + '/api/recording/' + props.fileName}>
                    <IconButton disabled={isVideo === false}>
                        <GetApp />
                    </IconButton>         
                </Link>
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