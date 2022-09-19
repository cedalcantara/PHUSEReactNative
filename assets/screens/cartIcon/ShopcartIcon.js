import React from "react";
import { connect } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";

const ShopcartIcon = (props) => <Ionicons name="cart" size={25} color="#fff" />;

const mapStateToProps = (state) => {
  return {
    cartReducers: state
  };
};

export default connect(mapStateToProps)(ShopcartIcon);
