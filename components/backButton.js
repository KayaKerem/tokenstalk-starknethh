import { useRouter } from "expo-router";
import { Image, TouchableOpacity } from "react-native";

const BackButton = () => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        router.back();
      }}
      className="bg-[#434f79] flex items-center justify-center w-[48px] h-[48px] absolute z-20 top-[60px] left-[32px] rounded-md "
    >
      <Image source={require("../app/assets/arrow.png")} />
    </TouchableOpacity>
  );
};

export default BackButton;
