import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    setMessage('Logging in...');
    const validEmail = 'test@example.com';
    const validPassword = '123456';

    setTimeout(() => {
      if (email === validEmail && password === validPassword) {
        onLogin(); // Trigger login in RootNavigator
      } else {
        setMessage('Invalid credentials');
      }
    }, 1000);
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
      />
      {message ? (
        <Text style={{ color: message === 'Invalid credentials' ? 'red' : 'green' }}>
          {message}
        </Text>
      ) : null}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;
