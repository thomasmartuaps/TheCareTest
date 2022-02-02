import { StyleSheet, Platform } from "react-native";

const baseStyles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E7F5FD",
    width: "100%",
    height: "100%",
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
    fontFamily: Platform.OS === "android" || "web" ? "Roboto" : "Arial",
  },
  categoryButton: {
    color: "#3549FB",
    backgroundColor: "#CAECFF",
    borderRadius: 9,
    fontWeight: "500",
    fontSize: 16.2587,
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
});

export default {
  ...baseStyles,
  ...advancedStyles,
};
