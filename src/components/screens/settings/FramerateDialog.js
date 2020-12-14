import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Slider,Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button} from '@material-ui/core';

export default function FramerateDialog(props) {
  const [framerate, setFramerate] = React.useState(props.initialFramerate)

  React.useEffect(() => {
    setFramerate(props.initialFramerate);
  }, [props.initialFramerate]);

  const onClose = () => {
    props.onClose();
    setFramerate(props.initialFramerate);
  };

  return (
    <React.Fragment>
      <Dialog open={props.open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Framerate</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Current framerate: {framerate} FPS
          </DialogContentText>
          <Grid container spacing={2}>
            <Grid item>
              5
            </Grid>
            <Grid item xs>
            <Slider
              value={framerate}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={(e, value) => setFramerate(value)}
              step={5}
              marks={true}
              min={5}
              max={30}
            />
            </Grid>
            <Grid item>
              30
            </Grid>
          </Grid>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

FramerateDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    initialFramerate: PropTypes.number.isRequired
}
