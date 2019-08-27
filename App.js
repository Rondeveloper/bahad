
import React, { Fragment } from 'react';
import AppWrapper from './AppWrapper';
import { I18nManager, SafeAreaView, StatusBar, PermissionsAndroid } from 'react-native';
import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  renderAndroidBars = () => {
    changeNavigationBarColor('#eaeed3', true);
    return (
      <StatusBar translucent backgroundColor={'transparent'}
        animated showHideTransition={'slide'} />
    )
  }

  render() {
    //this.renderAndroidBars()
    return (
      <SafeAreaView style={{ flex: 1 }} >
        {this.renderAndroidBars()}
        <AppWrapper />
      </SafeAreaView>
    )
  }
}


export default App;