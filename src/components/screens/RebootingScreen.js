import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, Button, Link, Grid } from '@material-ui/core';
import { Replay } from '@material-ui/icons';
import ConditionalWrap from 'conditional-wrap';
import NavBar from '../layout/NavBar';
import { routes } from '../../App';

const useStyles = makeStyles((theme) => ({
  centerDiv: {
    'position':'absolute',
    'top': '50%',
    'left': '50%',
    '-moz-transform': 'translateX(-50%) translateY(-50%)',
    '-webkit-transform': 'translateX(-50%) translateY(-50%)',
    'transform': 'translateX(-50%) translateY(-50%)'
  },
}));
  
export default function RebootingScreen() {
  const classes = useStyles();

  const [waitTime, setWaitTime] = React.useState(120);

  React.useEffect(() => {
    if(waitTime > 0) {
      setTimeout(() => setWaitTime(waitTime-1), 1000);
    }
  }, [waitTime]);

  const LinkButton = ({disabled, href, children}) => (
    <ConditionalWrap
      condition={disabled === false}
      wrap={children => (
        <Link href={href}>{children}</Link>
      )}
    > {children}</ConditionalWrap>
  );

  return (
    <div className={classes.centerDiv}>

      <Grid container spacing={1}>
        <Grid item>
          <Typography variant="h3">Rebooting...</Typography>
        </Grid>
        <Grid item xs={12} alignItems="center" alignContent="center" justify="center">
          <Replay fontSize="large"/>
        </Grid>
        <Grid item>
          <LinkButton href={routes.HOME} disabled={waitTime !== 0}>
            <Button disabled={waitTime !== 0} variant="contained" color="primary">Reload {waitTime !== 0 ? "(" + waitTime + ")" : ""}</Button>
          </LinkButton>
        </Grid>
      </Grid>

    </div>
  );
}