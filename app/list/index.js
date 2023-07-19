import { Image, Text, TouchableOpacity, View } from "react-native";
import Input from "../../components/input";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import Constants from "expo-constants";
import AsyncStore from "@react-native-async-storage/async-storage";

const Home = () => {
  const [users, setUsers] = useState([]);

  const router = useRouter();

  const getChatroomData = async () => {
    try {
      const res = await fetch(
        Constants?.expoConfig?.extra?.apiUrl + "chatroom/"
      );

      const data = await res.json();
      setUsers(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getChatroomData();
  }, []);
  return (
    <TouchableOpacity
      onPress={() => {
        router.push("/chatting");
      }}
      className="flex  w-full mt-8 flex-1 mx-auto"
    >
      <Text className="text-white font-bold text-xl px-2">NFT Chats</Text>
      <ScrollView className="">
        {users?.chatrooms?.map((ch) => (
          <ChatRoom {...ch} />
        ))}
      </ScrollView>
    </TouchableOpacity>
  );
};

const ChatRoom = ({ name, avatar_url }) => {
  const [uri, setUri] = useState(null);
  useEffect(() => {
    fetch(avatar_url)
      .then((res) => res.blob())
      .then((res) => {
        setUri(URL.createObjectURL(res));
      });
  }, [avatar_url, name]);
  return (
    <View className="px-2 py-2 bg-[#272445] flex flex-row gap-x-2 items-center mt-6">
      {uri && (
        <Image
          className="w-[32px] h-[32px] bg-white rounded-md"
          source={{ uri: uri ?? "" }}
        />
      )}
      <Text className="text-white">{name}</Text>
    </View>
  );
};

export default Home;
