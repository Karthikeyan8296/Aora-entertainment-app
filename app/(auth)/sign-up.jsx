import { View, Text, ScrollView, Image, Alert } from "react-native";
import { React, useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInputField from "../../components/CustomInputField";
import Custombutton from "../../components/Custombutton";
import { images } from "../../constants";
import { createUser } from "../../lib/appwrite";

const SignUp = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setisSubmitting] = useState(false);

  const submit = async () => {
    if (!input.username || !input.email || !input.password) {
      Alert.alert("Error", "Please fill in all the field inputs");
    }
    setisSubmitting(true);
    try {
      const result = await createUser(
        input.email,
        input.password,
        input.username
      );
      //Setting it to global state...

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
            Sign up to Aora
          </Text>
          <CustomInputField
            lable="Username"
            value={input.username}
            handleChangeText={(e) => setInput({ ...input, username: e })}
            otherStyles="mt-7"
          />

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
            lable={"Sign Up"}
            containerStyles="mt-8"
            handlePress={submit}
            isLoading={isSubmitting}
          />

          <View className="justify-center items-center pt-6 flex-row">
            <Text className="text-gray-100 text-sm font-pmedium">
              Already have an account?{" "}
            </Text>
            <Link
              href="/sign-in"
              className="text-secondary text-sm font-pmedium"
            >
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
