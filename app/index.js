import { useRouter } from "expo-router";
import { View, Text, Button, SafeAreaView, Image } from "react-native";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <Button
        title="home"
        onPress={() => {
          router.push("/list");
        }}
      ></Button>
    </SafeAreaView>
  );
};

export default Home;
