import React from 'react';

const drawer = {
    isDrawerOpened: false,
    toggleDrawer: () => {}
}

export const DrawerContext = React.createContext(drawer)