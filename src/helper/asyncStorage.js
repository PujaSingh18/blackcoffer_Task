import AsyncStorage from '@react-native-async-storage/async-storage';

export const asyncStorage = {
  setToken: async (token) => await AsyncStorage.setItem('token', token),
  getToken: async () => await AsyncStorage.getItem('token'),
  removeToken: async () => await AsyncStorage.removeItem('token'),

  setEmail: async (email) => await AsyncStorage.setItem('email', email),
  getEmail: async () => await AsyncStorage.getItem('email'),

  setPassword: async (password) => await AsyncStorage.setItem('password', password),
  getPassword: async () => await AsyncStorage.getItem('password'),

  removeEmail: async () => AsyncStorage.removeItem('email'),
  removePassword: async () => AsyncStorage.removeItem('password'),
  clearAll: async () => await AsyncStorage.clear(),
};
