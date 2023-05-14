import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import Routes from './Src/Navigation/Routes';

const App = () => {

  return (
    <View style={{ flex: 1 }}>
      <Routes />
    </View>
  );
};

export default App;


