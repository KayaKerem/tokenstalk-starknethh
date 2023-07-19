import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { Image, TouchableOpacity } from "react-native";

const LogoutButton = () => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={async () => {
        await AsyncStorage.clear();
        router.push("/login");
      }}
      className="bg-red-400 flex items-center justify-center w-[48px] h-[48px] absolute z-20 top-[60px] right-[32px] rounded-md "
    >
      <Image source={require("../app/assets/logout.png")} />
    </TouchableOpacity>
  );
};

export default LogoutButton;
