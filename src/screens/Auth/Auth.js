import React, { Component } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import StartTabs  from '../MainTabs/MainTabs'
class AuthScreen extends Component {

    static navigatorStyle = {
        drawUnderNavBar: true,
        navBarTranslucent: true,
        navBarHidden : true
      };

      showTabsHandler = () => {
         StartTabs();
      };
   render() {

     return (

          <View>
              <Text style={styls.titleStyle}>login</Text>
              <Button title = "open tabs"  onPress={this.showTabsHandler}></Button>
          </View>
    )}; 
}

const styls = StyleSheet.create({
    titleStyle: {
        textAlign: 'center',
        padding: 25,
    },
     

});

export default AuthScreen;