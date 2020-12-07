import React from 'react';

const cameraStatus = {
    CPU_TEMPERATURE: 10,
    CPU_LOAD: 20,
    MEMORY_USAGE: 30,
    DISK_USAGE: 40,
    IS_RECORDING: false,
    FRAMERATE: 50
}

export const CameraStatusContext = React.createContext(cameraStatus)