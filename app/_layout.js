import {
  Slot,
  Stack,
  useNavigation,
  usePathname,
  useRouter,
} from "expo-router";
import { useEffect } from "react";
import { Button, Image, SafeAreaView, Text, View } from "react-native";
import BackButton from "../components/backButton";
import ProfileButton from "../components/profileButton";
import LogoutButton from "../components/logoutButton";

export default function Layout() {
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    router.push("/chatting");
  }, []);

  return (
    <SafeAreaView className="flex-1">
      {["/channels", "/profile", "/chatting"].includes(pathName) && (
        <BackButton />
      )}
      {!["/login", "/signup", "/profile"].includes(pathName) && (
        <ProfileButton />
      )}
      {["/profile"].includes(pathName) && <LogoutButton />}

      <Image
        className="absolute top-0 h-screen left-0 w-full"
        source={require("./assets/splashs.png")}
      />
      <Image
        className="w-[75px] h-[24px] mx-auto"
        source={require("./assets/logo-long.png")}
      />
      <Slot />
    </SafeAreaView>
  );
}
