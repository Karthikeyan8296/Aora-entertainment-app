import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Custombutton = ({
  lable,
  containerStyles,
  handlePress,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      className={`min-h-[60px] rounded-xl justify-center items-center bg-secondary ${containerStyles}
      ${isLoading ? "opacity-50" : ""}`}
      disabled={isLoading}
    >
      <Text className={`text-primary text-[16px] font-pbold ${textStyles}`}>
        {lable}
      </Text>
    </TouchableOpacity>
  );
};

export default Custombutton;
