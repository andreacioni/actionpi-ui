import React from 'react';

const settings = {
    rebootRequired: false,
    setRebootRequired: () => {},
}

export const SettingsContext = React.createContext(settings)