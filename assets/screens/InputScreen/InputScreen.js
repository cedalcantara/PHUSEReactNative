import React, { Component, useState } from "react";
import {
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { Overlay } from "react-native-elements";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";

import Products from "../../../assets/components/Product/Products";
import { GlobalStyles as gcx } from "../../../Global.Module";
import { LocalStyles as lcx } from "./InputScreen.Module";
import ItemModal from "../../components/ItemModal/ItemModal";
import { DATA } from "../../DATA";

const renderItem = ({ item }) => (
  <Item title={item.title} prc={item.price} desc={item.desc} id={item.id} />
);

const Item = ({title, prc, desc }) => {
  const [itemVisible, setItemVisible] = useState(false);
  const toggleItemOverlay = () => {
    setItemVisible(!itemVisible);
  };

  return (
    <View style={lcx.itemContainer}>
      <ItemModal
        itemVisible={itemVisible}
        toggleItemOverlay={toggleItemOverlay}
        title={title}
        prc={prc}
        desc={desc}
      />
      <TouchableOpacity onPress={toggleItemOverlay}>
        <View style={lcx.itemWrapper}>
          <Text style={lcx.itemDetails}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};


const mapStatetoProps = (state) => {
  return {
    cartReducers: state,
  };
};

class InputScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: DATA,
      error: null,
      searchValue: "",
    };
    this.arrayholder = DATA;
  }

  searchFunction = (text) => {
    const updatedData = this.arrayholder.filter((item) => {
      const item_data = `${item.title.toUpperCase()})`;
      const text_data = text.toUpperCase();
      return item_data.indexOf(text_data) > -1;
    });
    this.setState({ data: updatedData, searchValue: text });
  };

  render() {
    return (
      <View style={lcx.container}>
        <StatusBar backgroundColor="transparent" style={"light"} />
        <KeyboardAvoidingView style={lcx.cartBtn} behavior="height">
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("CartScreen")}
          >
            <View>
              <View
                style={{
                  position: "absolute",
                  backgroundColor: "green",
                  zIndex: 2000,
                  borderRadius: 15,
                  height: 20,
                  width: 20,
                  alignContent: "center",
                  right: 15,
                }}
              >
                <Text
                  style={{ color: "white", alignSelf: "center", fontSize: 15 }}
                >
                  {this.props.cartReducers.length}
                </Text>
              </View>
              <Ionicons name="cart" size={25} color="#fff" />
              <Text style={{ color: "white" }}>Cart</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <SearchBar
          placeholder="Search Here..."
          lightTheme
          value={this.state.searchValue}
          onChangeText={(text) => this.searchFunction(text)}
          inputContainerStyle={lcx.searchInputContainer}
          containerStyle={lcx.searchContainer}
          selectionColor="gray"
        />
        <FlatList data={this.state.data} renderItem={renderItem} />
      </View>
    );
  }
}

export default connect(mapStatetoProps)(InputScreen);
