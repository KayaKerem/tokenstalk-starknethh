import { Image, Text, TouchableOpacity, View } from "react-native";
import Input from "../../components/input";
import { TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import Constants from "expo-constants";
import AsyncStore from "@react-native-async-storage/async-storage";
const Home = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const getUserData = async () => {
    const userToken = await AsyncStore.getItem("token");
    console.log(userToken);
    if (userToken) {
      router.push("/list");
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View className="flex  w-[295px] mx-auto">
      <Text className="text-white text-2xl font-bold text-center mt-[100px]">
        Login
      </Text>
      <Input value={name} onChangeText={setName} label="Username" />
      <Input value={password} onChangeText={setPassword} label="Password" />

      <TouchableOpacity
        className="w-[295px] mt-6"
        onPress={() => {
          if (name && password) {
            console.log(name, password);
            fetch(Constants.expoConfig.extra.apiUrl + "user/login", {
              method: "POST",
              body: JSON.stringify({
                user_name: name,
                password,
              }),
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
              .then(async (res) => {
                await AsyncStore.setItem("token", res.token);
                await AsyncStore.setItem("userId", res.userId);
                await AsyncStore.setItem("userId", res.user?.wallet_address);
                await AsyncStore.setItem("user", JSON.stringify(res.user));
                router.push("/profile");
              })
              .catch((err) => console.log(err));
          }
        }}
      >
        <LinearGradient className="px-3 py-4" colors={["#4A1C85", "#191FAB"]}>
          <Text className="text-white text-center">Login</Text>
        </LinearGradient>
        <Text>Login</Text>
      </TouchableOpacity>
      <Text className="text-center text-white my-3">
        Don't you have an account ?
      </Text>
      <TouchableOpacity
        className="w-[295px] mt-6"
        onPress={() => {
          router.push("/signup");
        }}
      >
        <LinearGradient
          className="px-3 py-4 flex flex-row justify-between items-center h-[52px]"
          colors={["#4A1C85", "#191FAB"]}
        >
          <Text className="text-white">Signup</Text>
          <Image
            source={require("../assets/monitor.png")}
            className="text-white"
          />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
