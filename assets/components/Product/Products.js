import React, { Component } from "react";
import { View, Button } from "react-native";

class Products extends Component {
  renderProducts = (products, toggle) => {
    console.log(products);
    return products.map((item, index) => {
      return (
        <View key={index}>
          <Button
            onPress={() => this.props.onPress(item), toggle}
            color="#8A3030"
            title={item.title}
          />
        </View>
      )
    })
  }

  render() {
    return (
    <View>
      {this.renderProducts(this.props.products)}
    </View>
    );
  }
}

export default Products;
