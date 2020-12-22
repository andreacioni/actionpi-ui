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
        <Grid container spacing={2}>
            <Grid item xs={2}>{props.icon}</Grid>
            <Grid item className={classes.title} xs={7}>{props.title}</Grid>
            <Grid item className={classes.value} xs={3}>{props.value + ' ' + props.uom}</Grid>
        </Grid>
    );
}

StatPaper.defaultProps = {
    value: 0,
    uom: '',
    warnValue: 99999,
    alarmValue: 99999
}

StatPaper.propTypes = {
    icon: PropTypes.element,
    title: PropTypes.string.isRequired,
    value: PropTypes.number,
    uom: PropTypes.string,
    warnValue: PropTypes.number,
    alarmValue: PropTypes.number,

}