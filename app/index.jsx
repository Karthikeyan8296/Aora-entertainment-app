import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, Image } from "react-native";
import { Link, Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import Custombutton from "../components/Custombutton";

export default function App() {
  return (
    <SafeAreaView className=" bg-primary h-full">
      <StatusBar backgroundColor="#161622" style="light" />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full min-h-[95vh] justify-center items-center px-4">
          <Image
            className="w-[130px] h-[84px]"
            resizeMode="contain"
            source={images.logo}
          />
          <Image
            className="w-[375px] h-[298px]"
            resizeMode="contain"
            source={images.cards}
          />

          <View className="relative mt-5">
            <Text className="text-white font-psemibold text-[30px] text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary">Aora</Text>
            </Text>
            <Image
              className="absolute -bottom-0 -right-8 w-[136px] h-[15px]"
              resizeMode="contain"
              source={images.path}
            />
          </View>

          <Text className="font-pregular text-sm text-gray-100 text-center mt-5">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <Custombutton
            lable={"Continue with Email"}
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-80 mt-8"
          />

          {/* <Link
            href="/home"
            style={{ color: "white", fontWeight: "700", fontSize: 18 }}
          >
            Go to Home
          </Link> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
