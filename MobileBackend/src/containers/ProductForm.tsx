import * as React from "react";
import { useState } from "react";
import { Text, View, TextInput, Pressable } from "react-native";

import styles from "../styles";
import { CATEGORIES } from "../constants";

export default function NavigationPage() {
  const [name, setName] = useState<String>("");
  const [description, setDescription] = useState<String>("");
  const [sku, setSku] = useState<String>("");
  const [tags, setTags] = useState<String[]>([]);
  const [stock, setStock] = useState<Number>(0);
  const [price, setPrice] = useState<Number>(0);
  const [image, setImage] = useState<String>("");
  return (
    <View style={styles.background}>
      <View style={styles.form}>
        <View style={{ width: 333, marginTop: 44, marginBottom: 22 }}>
          <Text style={{ fontWeight: "700", fontSize: 37 }}>
            Add New Product
          </Text>
        </View>
        <View style={{ width: 333, marginTop: 10, marginBottom: 10 }}>
          <TextInput
            style={styles.textInput}
            onChangeText={(name) => setName(name)}
            placeholder="Name"
          ></TextInput>
        </View>
        <View style={{ width: 333, marginTop: 10, marginBottom: 10 }}>
          <TextInput
            style={styles.textInput}
            multiline
            numberOfLines={4}
            onChangeText={(description) => setDescription(description)}
            placeholder="Description"
          ></TextInput>
        </View>
        <View style={{ width: 333, marginTop: 10, marginBottom: 10 }}>
          <TextInput
            style={styles.textInput}
            onChangeText={(sku) => setSku(sku)}
            placeholder="SKU"
          ></TextInput>
        </View>
        <View style={{ width: 333, marginTop: 10, marginBottom: 10 }}>
          <TextInput
            style={styles.textInput}
            keyboardType="number-pad"
            onChangeText={(stock) => setStock(Number(stock))}
            placeholder="Stock"
          ></TextInput>
        </View>
        <View style={{ width: 333, marginTop: 10, marginBottom: 10 }}>
          {CATEGORIES.map((category) => {
            const isSelected = tags[0] === category ? true : false;
            return (
              <Pressable
                style={
                  isSelected
                    ? styles.selectedCategoryButton
                    : styles.categoryButton
                }
                onPress={() => {
                  const newTags = [category];
                  setTags(newTags);
                }}
              >
                <Text>{category}</Text>
              </Pressable>
            );
          })}
        </View>
        <View style={{ width: 333, marginTop: 10, marginBottom: 10 }}>
          <TextInput
            style={styles.textInput}
            keyboardType="number-pad"
            onChangeText={(price) => setPrice(Number(price))}
            placeholder="Price"
          ></TextInput>
        </View>
      </View>
    </View>
  );
}
