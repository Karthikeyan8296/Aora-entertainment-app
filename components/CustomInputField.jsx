import {
  View,
  Text,
  Image,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { React, useState } from "react";
import { images, icons } from "../constants";

const CustomInputField = ({
  lable,
  value,
  handleChangeText,
  otherStyles,
  keyboradType,
  placeholder,
}) => {
  const [showPassword, setshowPassword] = useState(false);

  return (
    <View className={`${otherStyles} space-y-2`}>
      <Text className="text-base text-gray-100 font-pmedium">{lable}</Text>

      <View
        className="w-full h-16 px-4 rounded-xl border-2 border-black-200 bg-black-100 
      items-center flex-row focus:border-secondary"
      >
        <TextInput
          className="flex-1 text-white font-psemibold"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7b8b"
          onChangeText={handleChangeText}
          keyboardType={keyboradType}
          secureTextEntry={lable === "Password" && !showPassword}
        />

        {lable === "Password" && (
          <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomInputField;
