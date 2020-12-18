import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, Button, Link, Grid } from '@material-ui/core';
import { Replay } from '@material-ui/icons';
import ConditionalWrap from 'conditional-wrap';
import SettingsAppBar from '../SettingsAppBar';

const useStyles = makeStyles((theme) => ({
}));
  
export default function RebootingScreen() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <SettingsAppBar title="Network" />
    </React.Fragment>
  );
}