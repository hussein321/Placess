
import  { Navigation, StyledScreen } from "react-native-navigation";
import {Provider} from 'react-redux';
import AuthScreen from "./src/screens/Auth/Auth";
import FinderPlaces from "./src/screens/finderPlaces/FinderPlaces";
import ShardPlaces from "./src/screens/shardPlaces/ShardPlaces";
import configureStore from "./src/Store/ConfigureStore";



const store = configureStore();

//register screen
Navigation.registerComponent("login.vc", () => 
 AuthScreen,
 store,
 Provider);
Navigation.registerComponent("src.FinderPlaces.FinderPlaces", () => 
FinderPlaces,

);
Navigation.registerComponent("src.ShardPlaces.ShardPlaces", () => 
ShardPlaces,
store,
Provider);

//start a App

Navigation.startSingleScreenApp({

  screen: {
    screen: "login.vc",
    title: "LogIn"
  }
});
































/*import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from 'react-redux';
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import {addPlace, deletePlace, selectPlace, deSelectPlace } from "./src/Store/Actions/Index"
 class App extends Component {
  // state = {
  //   places: [],
  //   selectedPlace: null
  // };  
  placeAddedHandler = placeName => {
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.concat({
    //       key: Math.random(),
    //       name: placeName,
    //       image: {
    //         uri:
    //           "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
    //       }
    //     })
    //   };
    // });
      this.props.onAddPlace(placeName);
  };

  placeDeletedHandler = () => {
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.filter(place => {
    //       return place.key !== prevState.selectedPlace.key;
    //     }),
    //     selectedPlace: null
    //   };
    // });
    this.props.onDeletePlace();
  };

  modalClosedHandler = () => {
    // this.setState({
    //   selectedPlace: null
    // });
    this.props.deSelectPlace();
  };

  placeSelectedHandler = key => {
    // this.setState(prevState => {
    //   return {
    //     selectedPlace: prevState.places.find(place => {
    //       return place.key === key;
    //     })
    //   };
    // });
    this.props.onSelectPlace(key);
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

const mapStateToProps = state => {
    return {
 
      places: state.places.places,
      selectedPlace : state.places.selectedPlace  
    };
  
};

const mapDispatchToProps = dispatch => {
   
   return {
      onAddPlace: (name) => dispatch(addPlace(name)),
      onDeletePlace: () => dispatch(deletePlace()),
      onSelectPlace: (key) => dispatch(selectPlace(key)),
      deSelectPlace : () => dispatch(deSelectPlace())
   };

};

export default connect(mapStateToProps,mapDispatchToProps)(App);*/