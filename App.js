import React from 'react';

import MainNavigator from "./src/navigator/MainNavigator"

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true
    return (
        <MainNavigator />
    )
  }
}