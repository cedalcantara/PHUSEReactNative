import { StyleSheet } from "react-native";

export const LocalStyles = StyleSheet.create({
  cart: {
    flex: 1,
    marginHorizontal: -10,
    marginVertical: -10,
  },
  cartheader: {
    flex: 1,
    height: 100,
    marginLeft: 20,
    marginTop: 40,
    flexDirection: "row",
  },
  cartbutton: {
    marginRight: 25,
  },
  cartheaderfont: {
    fontSize: 25,
    fontWeight: "bold",
  },
  calc: {
    height: 75,
    backgroundColor: "#8A3030",
    borderRadius: 15,
    borderTopStartRadius: 0,
    borderTopEndRadius: 0,
    paddingStart: 15,
  },
  calcbtn: {
    backgroundColor: "#8A3030",
  },

  calcctr: {
    flex: 1,
    alignItems: "center",
    marginRight: 10,
    marginTop: 10,
  },
  total: {
    height: 75,
    backgroundColor: "#DDDDDD",
    borderRadius: 15,
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
    paddingStart: 15,
    paddingEnd: 15,
    paddingTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalprc: {
    fontSize: 20,
    fontWeight: "bold",
  },

  cmflatlist: {
    flex: 3,
  },
});
