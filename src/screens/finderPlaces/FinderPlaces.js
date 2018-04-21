import React, { Component } from "react";
import { connect } from 'react-redux';
import {View, Text} from "react-native";
import PlaceInput from '../../components/PlaceInput/PlaceInput'
import { addPlace } from "../../Store/Actions/Index";
class FinderPlaces extends Component {

     render() {

        return(
         <PlaceInput onPlaceAdded={this.props.onAddPlace}/>
        )};
};

const mapDispatchToProps = dispatch => {
   
  return {
     onAddPlace: (name) => dispatch(addPlace(name)),
  };

};
export default connect(null,mapDispatchToProps)(FinderPlaces);