import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';

class DrawerTrigger extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  render() {
    return (
      <TouchableOpacity style={styles.trigger}
        onPress={() => {
          this.props.navigation.dispatch(DrawerActions.openDrawer()) }}>
            <Image
              source={require('./image/drawer.png')}
              style={{ width: 25, height: 25, marginLeft: 5 }}
            />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  trigger: {
    marginLeft: 20.5,
    borderRadius: 50,
    width: 60,
    height: 60,
  }
});

export default withNavigation(DrawerTrigger);
