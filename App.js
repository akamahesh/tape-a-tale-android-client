import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {colorDarkTheme,screen1,screen2,screen3,screen4} from './src/constants/Constants'
import HomeStack from './src/navigation/MainNavigator';
export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      showRealApp: false
    }
  }

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
 

  render() {
    if (this.state.showRealApp) {
      return <HomeStack />;
    } else {
      return <AppIntroSlider slides={slides} onDone={this._onDone}/>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 260,
    height: 260,
  }
});



const slides = [
  {
    key: 'step1',
    title: 'Record',
    text: 'Record your personal stories on your favorite device',
    image: {uri: screen1},
    imageStyle: styles.image,
    backgroundColor: colorDarkTheme,
  },
  {
    key: 'step2',
    title: 'Send',
    text: 'Send us your recording via whatsapp or email',
    image: {uri: screen2},
    imageStyle: styles.image,
    backgroundColor: colorDarkTheme,
  },
  {
    key: 'step3',
    title: 'Listen',
    text: 'We will listen and improve the audio quality',
    image: {uri: screen3},
    imageStyle: styles.image,
    backgroundColor: colorDarkTheme,
  },
  {
    key: 'step4',
    title: 'Publish',
    text: 'Let millions listen, love and react to your story',
    image: {uri: screen4},
    imageStyle: styles.image,
    backgroundColor: colorDarkTheme,
  }
];
