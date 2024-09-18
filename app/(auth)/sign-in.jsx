import { View, Text, ScrollView, Image, Alert } from "react-native";
import { React, useState } from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInputField from "../../components/CustomInputField";
import Custombutton from "../../components/Custombutton";
import { images } from "../../constants";
import { getCurrentUser, signIn } from "../../lib/appwrite";

const SignIn = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setisSubmitting] = useState(false);

  const submit = async () => {
    if (!input.email || !input.password) {
      Alert.alert("Error", "Please fill in all the field inputs");
    }
    setisSubmitting(true);
    try {
      await signIn(input.email, input.password);

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setisSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[80vh] px-8 my-8">
          <Image
            source={images.logo}
            className="w-[120px] h-[35px]"
            resizeMode="contain"
          />
          <Text className="text-white text-2xl font-psemibold mt-10">
            Log in to Aora
          </Text>
          <CustomInputField
            lable="Email"
            value={input.email}
            handleChangeText={(e) => setInput({ ...input, email: e })}
            otherStyles="mt-7"
            keyboradType="email-address"
          />
          <CustomInputField
            lable="Password"
            value={input.password}
            handleChangeText={(e) => setInput({ ...input, password: e })}
            otherStyles="mt-7"
            keyboradType="name-phone-pad"
          />
          <Custombutton
            lable={"Sign In"}
            containerStyles="mt-8"
            handlePress={submit}
            isLoading={isSubmitting}
          />

          <View className="justify-center items-center pt-6 flex-row">
            <Text className="text-gray-100 text-sm font-pmedium">
              Don't have an account?{" "}
            </Text>
            <Link
              href="/sign-up"
              className="text-secondary text-sm font-pmedium"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
