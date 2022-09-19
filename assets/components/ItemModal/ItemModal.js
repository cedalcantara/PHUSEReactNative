import React, { Component } from "react";
import { Text, View, Button, TextInput } from "react-native";
import { Overlay } from "react-native-elements/dist/overlay/Overlay";
import { DATA } from "../../DATA"
import Products from "../Product/Products";

import { GlobalStyles as gcx } from "../../../Global.Module";
import { LocalStyles as lcx } from "./ItemModal.Module";
import { connect } from "react-redux";

const ItemModal = ({itemVisible, toggleItemOverlay, title, prc, desc,}) => {
  const [qty, setqty] = React.useState("");

  return (
    <Overlay
      overlayStyle={lcx.itemOverlay}
      isVisible={itemVisible}
      onBackdropPress={toggleItemOverlay}
      animationType="fade"
    >
      <View>
        <View style={lcx.itemPictureOverlay}>
          <Text style={{ alignSelf: "center" }}>Picture of {title}</Text>
        </View>

        <View style={lcx.itemPriceOverlay}>
          <Text style={lcx.titlefontOverlay}>{title}</Text>
          <Text style={lcx.pricefontOverlay}>Price: {prc}</Text>
        </View>

        <View style={lcx.itemDescOverlay}>
          <Text style={lcx.fontOverlay}>Description: {desc}</Text>
        </View>

        <View style={lcx.itemAddOverlay}>
          <Text style={lcx.fontOverlay}>Quantity:</Text>
          <View style={lcx.row}>
            <TextInput
              autoFocus={true}
              placeholder={"0"}
              onChangeText={(text) => onChangeText(text)}
              style={lcx.qty}
              keyboardType="numeric"
              editable
              // ref={qty => { this.qtyInput = qty }}
              maxLength={3}
              onChangeText={(qty) => setqty(qty)}
              defaultValue={qty}
              // value={...props}
            />
            <View style={lcx.addtcctr}>
              <Addtocart toggleI={toggleItemOverlay}/>
            </View>
          </View>
        </View>
      </View>
    </Overlay>
  );
};

class Addtocart extends Component{
  render() {
    return (
        <View>
            <Products products={DATA} onPress={() => this.props.addItemToCart} toggle={this.props.toggleI}/>
        </View>
    );
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
    }
}

connect(null, mapDispatchToProps) (Addtocart);
export default ItemModal;
