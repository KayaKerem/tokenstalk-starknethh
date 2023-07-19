import { Image, Text, TouchableOpacity, View } from "react-native";
import Input from "../../components/input";
import { TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect } from "react";

const Border = require("../assets/input-border.png");

const Home = () => {
  const router = useRouter();
  const ms = [
    { text: "Go To", link: "https://tokenstalk.io" },
    { text: "Create your account" },
    { text: "Login through the app" },
  ];

  return (
    <View className="flex items-center gap-y-12 mt-[120px]">
      <Image
        source={require("../assets/monitor-big.png")}
        className="w-[172px] h-[172px]"
      />
      <View className="px-8">
        {ms.map((m, i) => (
          <List {...m} index={i} />
        ))}
      </View>
      <Text className="text-white">Once You Finished</Text>
      <TouchableOpacity
        className="relative w-[295px] items-center justify-center"
        onPress={() => {
          router.push("/login");
        }}
      >
        <Image className="w-[295px] left-0 absolute" source={Border} />
        <Text className="text-white">Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const List = ({ index, text, link }) => {
  return (
    <View className="flex flex-row mt-4 items-baseline gap-x-2">
      <Text className="text-white text-2xl font-bold">{index + 1}.</Text>
      <Text className="text-white font-bold">{text}</Text>
      <Text className="text-white underline">{link ?? ""}</Text>
    </View>
  );
};

export default Home;
