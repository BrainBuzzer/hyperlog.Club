import React from 'react';

export const defaultUserContext = {
  loading: true,
  profile: {},
  isProfileOpen: false,
  handleLogout: () => {},
  toggleProfile: () => {},
  hideProfile: () => {}
};

export default React.createContext(defaultUserContext);