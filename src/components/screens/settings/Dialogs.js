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
  TextField,
  Typography
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
  const [ssid, setSSID] = React.useState();
  const [password, setPassword] = React.useState();

  React.useEffect(() => {
    setHotspotEnabled(props.hotspotEnabled);
    setSSID(props.ssid);
    setPassword(props.password);
  }, [props.hotspotEnabled, props.ssid, props.password]);

  const onModeChange = (_e, value) => {
    const hotspotEnabled = value === "hotspot";
    setHotspotEnabled(hotspotEnabled);
    setSSID(null);
    setPassword(null);
  };

  const handleCancel = () => {
    props.onClose();
  };
  
  const handleOk = () => {
    props.onClose(isHotspotEnabled, ssid, password);
  }

  return (
    <React.Fragment>
      <Dialog open={props.open} onClose={handleCancel} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">WiFi</DialogTitle>
        <DialogContent>
          <Grid container spacing={1}>
            <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Mode</FormLabel>
              <RadioGroup row aria-label="mode" name="mode1" 
                value={isHotspotEnabled ? "hotspot" : "client"} 
                onChange={onModeChange}>
                  <FormControlLabel value="hotspot" control={<Radio />} label="Hotspot" />
                  <FormControlLabel value="client" control={<Radio />} label="Client" />
              </RadioGroup>
            </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField 
                id="ssid" 
                disabled={isHotspotEnabled}
                label="SSID"
                value={isHotspotEnabled ? '' : (ssid ? ssid : '**********')}
                onChange={(e) => setSSID(e.target.value)}/>
            </Grid>
            <Grid item xs={6}>
            <TextField 
              id="wifi-password" 
              disabled={isHotspotEnabled}
              label="Password"
              type="password"
              value={isHotspotEnabled ? '' : (password ? password : '**********')}
              onChange={(e) => setPassword(e.target.value)}/>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleOk} color="primary">
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
    hotspotEnabled: PropTypes.bool,
    ssid: PropTypes.string,
    password: PropTypes.string
}

export function ConfirmReboot(props) {

  return (
    <React.Fragment>
      <Dialog open={props.open} onClose={() => props.onCancel()} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Confirm</DialogTitle>
        <DialogContent>
          <Typography variant="body1">The board will be reboot. Continue?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.onCancel()} color="primary">
            Cancel
          </Button>
          <Button onClick={() => props.onConfirm()} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

ConfirmReboot.propTypes = {
    open: PropTypes.bool.isRequired,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
}