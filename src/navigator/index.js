import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import AppNavigator from './AppNavigator';
import PublicNavigator from './PublicNavigator';

const RootNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const checkAuthStatus = async () => {
    const value = await AsyncStorage.getItem('isLoggedIn');
    setIsAuthenticated(value === 'true');
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const handleLoginSuccess = async () => {
    await AsyncStorage.setItem('isLoggedIn', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('isLoggedIn');
    setIsAuthenticated(false);
  };

  if (isAuthenticated === null) {
    return null; // Loading screen or splash can go here
  }

  return (
    <NavigationContainer>
      {!isAuthenticated ? (
        <AppNavigator onLogout={handleLogout} />
      ) : (
        <PublicNavigator onLogin={handleLoginSuccess} />
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;
