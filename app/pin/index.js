import { Image, Text, TouchableOpacity, View } from "react-native";
import Input from "../../components/input";
import { TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
  return (
    <View className="flex items-center px-6 w-[295px] mx-auto">
      <Text className="text-white text-2xl font-bold text-center mt-[100px]">
        Login
      </Text>
      <Input label="Pin" />
      <TouchableOpacity className="w-[295px] mt-6">
        <LinearGradient className="px-3 py-4" colors={["#4A1C85", "#191FAB"]}>
          <Text className="text-white text-center">Enter</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
