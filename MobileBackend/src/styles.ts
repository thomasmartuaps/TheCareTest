import { StyleSheet, Platform } from "react-native";

const baseStyles = StyleSheet.create({
  background: {
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#E7F5FD",
    width: "100%",
    // height: 3000,
    // padding: 24
  },
  form: {},
  header: {},
  textInput: {
    borderWidth: 2,
    borderRadius: 9,
    borderColor: "#3549FB",
    color: "#3549FB",
    backgroundColor: "#FFF",
    width: 333,
    fontSize: 18,
    minHeight: 55,
    paddingBottom: 8,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Arial",
  },
  categoryButton: {
    // flex: 2,
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    color: "#3549FB",
    backgroundColor: "#CAECFF",
    borderRadius: 9,
    minWidth: 113,
    maxWidth: 155,
    height: 49,
    margin: 10,
  },
  inputTitle: {
    color: "#3549FB",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Arial",
    fontWeight: "500",
    fontSize: 18,
  },
  categoryText: {
    color: "#3549FB",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Arial",
    fontWeight: "500",
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
  },
  categorySection: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  selectedCategoryButton: {
    // flex: 2,
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#2D9CDB",
    color: "#FFF",
    borderRadius: 9,
    minWidth: 113,
    maxWidth: 155,
    height: 49,
    margin: 10,
  },
  selectedCategoryText: {
    color: "#FFF",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Arial",
    fontWeight: "500",
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
  },
  publishButton: {
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#56E4A0",
    borderRadius: 9,
    width: 333,
    height: 60,
    margin: 10,
  },
  publishText: {
    color: "#FFF",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Arial",
    fontWeight: "700",
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
  },
});

const advancedStyles = StyleSheet.create({
  descInput: {
    ...baseStyles.textInput,
  },
  selectedCategoryButton: {
    ...baseStyles.categoryButton,
    backgroundColor: "#2D9CDB",
    color: "#FFF",
  },
  selectedCategoryText: {
    ...baseStyles.categorySection,
    color: "#FFF",
  },
});

export default baseStyles;
