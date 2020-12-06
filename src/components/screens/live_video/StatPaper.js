import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonGroup, Button, Grid, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    title: {
      textAlign: 'left',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    value: {
        textAlign: 'right',
        fontWeight: 'bold'
    }
  }));

export default function StatPaper(props) {
    const classes = useStyles();
  
    return (
        <Paper className={classes.paper}>
            <Grid container spacing={1}>
                <Grid item xs={1}>{props.icon}</Grid>
                <Grid item className={classes.title} xs={8}>{props.title}</Grid>
                <Grid item className={classes.value} xs={3}>{props.value}</Grid>
            </Grid>
        </Paper>
    );
}

StatPaper.defaultProps = {
    value: '-'
}

StatPaper.propTypes = {
    icon: PropTypes.element,
    title: PropTypes.string.isRequired,
    value: PropTypes.any
}