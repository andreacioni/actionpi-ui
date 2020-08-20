import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBack from '@material-ui/icons/ArrowBack';
import PropTypes from 'prop-types'
import React from 'react';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function SettingsAppBar(props) {

    const classes = useStyles();

    let history = useHistory();

    const onLeadingClick = () => {
        history.goBack();
    };

    return (
        <header className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton onClick={onLeadingClick} className={classes.menuButton} color="inherit" aria-label="menu">
                        <ArrowBack />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {props.title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </header>
    );

}

SettingsAppBar.propTypes = {
    title: PropTypes.string
}