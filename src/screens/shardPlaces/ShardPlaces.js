import React, { Component } from "react";
import { connect } from 'react-redux';
import Placelist from '../../components/PlaceList/PlaceList'
import {View, Text} from "react-native";

class ShardPlaces extends Component {
  //
     render() {

        return(
          <Placelist places={this.props.places}/>
        )};
};
const mapStateToProps = (state) => {
  return {
     places: state.places.places
  }
}
export default connect(mapStateToProps)(ShardPlaces);