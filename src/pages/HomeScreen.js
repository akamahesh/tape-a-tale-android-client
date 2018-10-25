import React from 'react';
import {View,Text} from 'react-native';

export default class HomeScreen extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
          showRealApp: false
        }
      }

    render() {
        return (
            <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                <Text>Hellow World</Text>
            </View>
        )
      }
}