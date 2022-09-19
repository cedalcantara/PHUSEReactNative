import React, { Component }  from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-elements/dist/buttons/Button";
import { StatusBar } from "expo-status-bar";
import { connect } from "react-redux";

import Products from "../../components/Product/Products"
import { GlobalStyles as gcx } from "../../../Global.Module";
import { LocalStyles as lcx } from "../CartScreen/CartScreen.Module";

const CartScreen = ({ navigation }) => {
  return (
    <View style={lcx.cart}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <View style={lcx.cartheader}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[lcx.cartbutton]}
        >
          <Ionicons name={"close"} size={30} />
        </TouchableOpacity>
        <Text style={lcx.cartheaderfont}>Cart</Text>
      </View>

      <List/>

      <View style={lcx.total}>
        <View>
          <Text style={lcx.totalprc}>PRICE:</Text>
        </View>

        <View>
          <Text style={lcx.totalprc}>100php</Text>
        </View>
      </View>

      <View style={lcx.calc}>
        <Button
          title="Calculate Route"
          type="solid"
          buttonStyle={lcx.calcbtn}
          containerStyle={lcx.calcctr}
          onPress={() => navigation.navigate("MapScreen")}
        />
      </View>
    </View>
  );
};


class List extends Component {

  render() {
      console.log(this.props.cartReducers)

      return (
          <View>
                  <Products products={this.props.cartReducers} />
          </View>
      );
  }
}

const mapStateToProps = (state) => {
    return {
        cartReducers: state
    }              
}

export default CartScreen;
connect(null, mapStateToProps)(List);
