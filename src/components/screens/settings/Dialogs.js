import React from 'react';
import PropTypes from 'prop-types';
import { InfoOutlined } from '@material-ui/icons'
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
  Typography,
  IconButton,
  Tooltip
} from '@material-ui/core';

import Autocomplete from '@material-ui/lab/Autocomplete';

import country_codes from '../../../country_codes';

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

export function WiFiDialog(props) {
  const [isHotspotEnabled, setHotspotEnabled] = React.useState(false);
  const [ssid, setSSID] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [countryCode, setCountryCode] = React.useState(null);
  
  const [showTooltip, setShowTooltip] = React.useState(false);

  React.useEffect(() => {
    setHotspotEnabled(props.hotspotEnabled);
  }, [props.hotspotEnabled]);
  
  const onModeChange = (_e, value) => {
    const hotspotEnabled = value === "hotspot";
    setHotspotEnabled(hotspotEnabled);
    setSSID(null);
    setPassword(null);
    setCountryCode(null);
  };

  const displayTooltip = () => {
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 3000);
  };

  const handleCancel = () => {
    props.onClose();
  };
  
  const handleOk = () => {
    props.onClose(isHotspotEnabled, countryCode ? countryCode.code : null, ssid, password);
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
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item xs={10}>
                  <Autocomplete
                    id="country-code"
                    disabled={isHotspotEnabled}
                    options={country_codes}
                    value={countryCode}
                    getOptionLabel={(country) => country.name}
                    renderInput={(params) => <TextField {...params} label="Country" />}
                    onChange={(_e, value) => setCountryCode(value)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Tooltip disabled={isHotspotEnabled} onClick={displayTooltip} onBlur={(e) =>  setShowTooltip(false)} open={showTooltip} title="Wireless bandwidth settings differ from every country"><IconButton disabled={isHotspotEnabled}><InfoOutlined/></IconButton></Tooltip>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <TextField 
                id="ssid" 
                fullWidth
                margin="normal"
                disabled={isHotspotEnabled}
                label={isHotspotEnabled ? "ActionPi" : "SSID"}
                value={isHotspotEnabled ? '' : ssid}
                onChange={(e) => setSSID(e.target.value)}/>
            </Grid>
            <Grid item xs={6}>
            <TextField 
              id="wifi-password" 
              fullWidth
              margin="normal"
              label="Password"
              type="password"
              placeholder={isHotspotEnabled ? '**********' : ''}
              value={password ? password : ''}
              onChange={(e) => setPassword(e.target.value)}
              InputLabelProps={isHotspotEnabled ? {
                shrink: true,
              } : undefined}/>
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

WiFiDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    hotspotEnabled: PropTypes.bool
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