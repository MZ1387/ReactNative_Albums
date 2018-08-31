import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';

const App = () => (
  <Header title={'Albums'} />
);

AppRegistry.registerComponent('albums', () => App);
