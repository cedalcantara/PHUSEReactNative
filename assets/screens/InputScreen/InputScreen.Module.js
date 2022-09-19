import { StyleSheet } from "react-native";
import { fonts } from "react-native-elements/dist/config";

export const LocalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDDDDD",
  },
  cartBtn: {
    width: "20%",
    backgroundColor: "#270100",
    height: "10%",
    zIndex: 2000,
    position: "absolute",
    bottom: 20,
    right: 20,
    borderRadius: 30,
    justifyContent: "center",
    alignContent: "center",
    borderColor: "black",
    borderWidth: 5,
    flexDirection: "row",
  },
  itemContainer: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 16,
  },
  itemWrapper: {
    backgroundColor: "#8A3030",
    borderRadius: 10,
    padding: 30,
  },
  itemDetails: {
    color: "white",
  },
  searchInputContainer: {
    borderRadius: 10,
    height: 40,
  },
  searchContainer: {
    backgroundColor: "transparent",
    width: "98%",
    alignSelf: "center",
    borderBottomColor: "transparent",
  },
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
