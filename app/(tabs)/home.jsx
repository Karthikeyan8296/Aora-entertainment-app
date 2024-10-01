import { View, Text, ScrollView, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { images } from "../../constants";

const Home = () => {
  return (
    <SafeAreaView className=" bg-primary h-full">
      <FlatList
        data={[{ id: 1 }, { id: 1 }, { id: 1 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text className="text-3xl text-white">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-2 px-4 space-y-5">
            <View className="justify-between items-start flex-row mb-6">
              <Image
                source={images.logoSmall}
                resizeMode="contain"
                className="w-[30px] h-[30px]"
              />
            </View>
            <Text className="text-xl text-white flex-row">Welcome Back</Text>
            <Text className="text-xl text-white flex-row">Welcome Back</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
