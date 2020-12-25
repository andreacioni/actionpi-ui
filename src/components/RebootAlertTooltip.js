import React from 'react'

import { Tooltip } from "@material-ui/core";
import { Warning } from "@material-ui/icons";

export default function RebootAlertTooltip() {
  return(
    <Tooltip title="Reboot to apply changes"><Warning color="primary"/></Tooltip> 
  );
}