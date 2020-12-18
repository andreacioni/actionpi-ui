import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, 
  Slider,
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle, 
  Button, 
  RadioGroup, 
  FormControlLabel, 
  Radio, 
  FormControl, 
  FormLabel,
  TextField
} from '@material-ui/core';

export function FramerateDialog(props) {
  const [framerate, setFramerate] = React.useState(props.initialFramerate)

  React.useEffect(() => {
    setFramerate(props.initialFramerate);
  }, [props.initialFramerate]);

  const onExit = () => {
    setFramerate(props.initialFramerate);
  };

  return (
    <React.Fragment>
      <Dialog open={props.open} onClose={props.onClose} onExited={onExit} aria-labelledby="form-dialog-title">
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
          <Button onClick={props.onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={props.onClose} color="primary">
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

export function WifiDialog(props) {
  const [isHotspotEnabled, setHotspotEnabled] = React.useState(false);
  const [wifiConfig, setWifiConfig] = React.useState({
    ssid: null, 
    password: null
  });

  React.useEffect(() => {
    setHotspotEnabled(props.hotspot);
    setWifiConfig(props.wifiConfig);
  }, [props.hotspot, props.wifiConfig]);

  const onExit = () => {
    setHotspotEnabled(props.hotspot);
    setWifiConfig(props.wifiConfig);
  };

  const validateFields = () => {

  };

  return (
    <React.Fragment>
      <Dialog open={props.open} onClose={props.onClose} onExited={onExit} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">WiFi</DialogTitle>
        <DialogContent>
          <Grid container spacing={1}>
            <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Mode</FormLabel>
              <RadioGroup row aria-label="mode" name="mode1" 
                value={isHotspotEnabled === true ? "hotspot" : "client"} 
                onChange={(_e, value) => setHotspotEnabled(value === "hotspot")}>
                  <FormControlLabel value="hotspot" control={<Radio />} label="Hotspot" />
                  <FormControlLabel value="client" control={<Radio />} label="Client" />
              </RadioGroup>
            </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField 
                id="ssid" 
                required
                disabled={isHotspotEnabled}
                label="SSID"
                value={wifiConfig.ssid}/>
            </Grid>
            <Grid item xs={6}>
            <TextField 
              id="wifi-password" 
              required
              disabled={isHotspotEnabled}
              label="Password"
              type="password"
              value={wifiConfig.password}/>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={validateFields} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

WifiDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    hotspot: PropTypes.bool,
    wifiConfig: PropTypes.object
}