import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import React from 'react';


const useStyles = makeStyles(() => ({
    root: {
        padding: 10,
    },
}));

export default function SettingsScreenContainer({children}) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {children}
        </div>
    );

}

SettingsScreenContainer.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired
}