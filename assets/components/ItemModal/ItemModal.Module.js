import { StyleSheet } from "react-native";
import { fonts } from "react-native-elements/dist/config";

export const LocalStyles = StyleSheet.create({
  itemOverlay: {
    height: 280,
    width: "95%",
    borderRadius: 20,
  },
  itemPictureOverlay: {
    height: 100,
    backgroundColor: "#8A3030",
    borderRadius: 20,
    marginHorizontal: -10,
    marginVertical: -10,
  },

  itemPriceOverlay: {
    paddingTop: 10,
    height: 40,
    flexDirection: "row",
  },
  itemDescOverlay: {
    height: 75,
  },
  itemAddOverlay: {
    height: 75,
    backgroundColor: "#DDDDDD",
    borderRadius: 20,
    borderTopStartRadius: 0,
    borderTopEndRadius: 0,
    marginHorizontal: -10,
    paddingStart: 20,
  },
  fontOverlay: {
    fontSize: 15,
  },
  titlefontOverlay: {
    fontSize: 20,
    fontWeight: "bold",
  },
  pricefontOverlay: {
    marginLeft: "auto",
    fontSize: 15,
  },
  qty: {
    height: 30,
    marginTop: 10,
    marginLeft: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#8A3030",
    backgroundColor: "#ffffff",
    width: 50,
  },

  row: {
    flexDirection: "row",
  },

  addtcbtn: {
    backgroundColor: "#8A3030",
    borderRadius: 10,
  },

  addtcctr: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 10,
  },
});
