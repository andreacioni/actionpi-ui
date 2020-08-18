import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    heigth: '10%',
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}></footer>
  );
}