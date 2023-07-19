import { useRouter } from "expo-router";
import { Image, TouchableOpacity } from "react-native";

const ProfileButton = () => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        router.push("/profile");
      }}
      className="bg-[#434f79] flex items-center justify-center w-[48px] h-[48px] absolute z-20 top-[60px] right-[32px] rounded-md "
    >
      <Image source={require("../app/assets/avatar.png")} />
    </TouchableOpacity>
  );
};

export default ProfileButton;
