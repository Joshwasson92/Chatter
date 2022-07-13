import "react-native-gesture-handler";
import React, { Component } from "react";
import {
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const colors = {
  brown: "#483B38",
  green: "#3D4838",
  gray: "#9CADB7",
  black: "black",
};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", colors: "" };
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/Background-Image.png")}
          resizeMode="cover"
          style={styles.image}
        >
          {/* Welcome text */}
          <Text
            style={{
              textAlign: "center",
              fontSize: 35,
              padding: 65,
              fontWeight: "bold",
            }}
          >
            Chatter
          </Text>

          {/* Name Input */}
          <View>
            <Text
              style={{ textAlign: "center", padding: 25, fontWeight: "bold" }}
            >
              Welcome! Enter your name to begin.
            </Text>
            <View style={styles.nameInput}>
              <TextInput
                onChangeText={(name) => this.setState({ name })}
                value={this.state.name}
                placeholder="   Enter your name here."
              ></TextInput>
            </View>
            {/* Color selection */}
            <View style={styles.colorContainer}>
              <Text style={styles.colorPaletteText}>
                Choose Background Color:
              </Text>
              <View style={styles.colorButtons}>
                <TouchableOpacity
                  style={styles.backgroundBlack}
                  onPress={() => this.setState({ colors: "black" })}
                  value={this.state.colors}
                ></TouchableOpacity>
                <TouchableOpacity
                  style={styles.backgroundBrown}
                  onPress={() => this.setState({ colors: "brown" })}
                  value={this.state.colors}
                ></TouchableOpacity>
                <TouchableOpacity
                  style={styles.backgroundGray}
                  onPress={() => this.setState({ colors: "gray" })}
                  value={this.state.colors}
                ></TouchableOpacity>
                <TouchableOpacity
                  style={styles.backgroundGreen}
                  onPress={() => this.setState({ colors: "green" })}
                  value={this.state.colors}
                ></TouchableOpacity>
              </View>
            </View>
            <Button
              title="Submit"
              onPress={() =>
                this.props.navigation.navigate("Chat", {
                  name: this.state.name,
                  color: this.state.colors,
                  borderColor: "black",
                })
              }
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nameInput: {
    height: 40,
    width: 190,
    textAlign: "center",
    borderWidth: 1,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "white",
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
  container: {
    flex: 300,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  colorContainer: {
    backgroundColor: "white",
    justifyContent: "space-evenly",
    padding: 5,
    marginLeft: 15,
    marginRight: 15,
  },
  backgroundBlack: {
    borderColor: "black",
    alignSelf: "center",
    borderRadius: 50,
    borderWidth: 25,
    height: 15,
    alignItems: "center",
  },
  backgroundBrown: {
    borderColor: "#483B38",
    alignSelf: "center",
    borderRadius: 50,
    borderWidth: 25,
    height: 15,
    alignItems: "center",
  },
  backgroundGray: {
    borderColor: "#9CADB7",
    alignSelf: "center",
    borderRadius: 50,
    borderWidth: 25,
    height: 15,
    alignItems: "center",
  },
  backgroundGreen: {
    borderColor: "#3D4838",
    alignSelf: "center",
    borderRadius: 50,
    borderWidth: 25,
    height: 15,
    alignItems: "center",
  },
  colorButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  colorPaletteText: {
    color: "#757083",
    fontSize: 18,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "center",
  },
});
