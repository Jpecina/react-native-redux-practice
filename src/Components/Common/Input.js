import React from "react";
import { View, TextInput, Text } from "react-native";

const Input = ({
  inputLabel,
  value,
  onChangeText,
  placeholder,
  secureTextEntry
}) => {
  const { inputStyle, inputLabelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={inputLabelStyle}>{inputLabel}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHight: 23,
    flex: 2
  },
  inputLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
};

export { Input };
