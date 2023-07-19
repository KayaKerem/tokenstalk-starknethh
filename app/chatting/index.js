import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, TouchableOpacity, View, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Avatar from "../assets/avatars/Avatar";
import { useCallback, useEffect, useRef, useState } from "react";

const Home = () => {
  useEffect(() => {
    scrollRef?.current?.scrollToEnd();
  }, [scrollRef?.current]);
  const scrollRef = useRef();
  const [messages, setMessages] = useState([
    { owner: "self", message: "HEllo" },
    { owner: "self", message: "HEllo" },
    { owner: "other", message: "HEllo" },
  ]);
  const [message, setMessage] = useState();
  useEffect(() => {}, []);
  const handleSend = useCallback(() => {
    if (!message) return;
    const messageFrom = Math.random() > 0.5 ? "self" : "other";

    setMessages((m) => [...m, { owner: "self", message }]);
    if (messageFrom === "other") {
      setMessages((m) => [...m, { owner: "other", message }]);
    }
    setMessage("");
  }, [message, messages]);
  useEffect(() => {
    setTimeout(() => {
      scrollRef.current?.scrollToEnd();
    }, 500);
  }, [messages]);
  return (
    <View className="bg-[#353449] flex-1 mt-12 mb-4">
      <ScrollView ref={scrollRef} className="bg-[#353449] flex-1 pt-2">
        {messages.map((m, i) => (
          <ChatBox {...m} key={i} />
        ))}
      </ScrollView>
      <View className="mb-6 flex flex-row gap-x-6 justify-between px-4">
        <TextInput
          className="bg-[#252531] rounded-md flex-1 h-[48px] text-white px-4 h-auto"
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity className="bg-white w-[48px] h-[48px] rounded-md items-center flex justify-center">
          <Image source={require("../assets/nft-icon.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSend}
          className="bg-[#5C3DCD] w-[48px] h-[48px] rounded-md items-center flex justify-center"
        >
          <Image source={require("../assets/send.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ChatBox = ({ owner, message, type }) => {
  return (
    <View
      className="px-6 w-full py-1 h-[80px] bg-transparent mb-8 flex"
      style={{
        alignItems: owner !== "self" ? "flex-start" : "flex-end",
      }}
    >
      {owner === "other" && type !== "nft" && (
        <View className="bg-[#252531] px-2 py-2 rounded-md min-w-min    max-w-[320px]">
          <View className="flex flex-row gap-x-2">
            <Image source={require("../assets/avatar.png")} />
            <Text className="text-white ">{message}</Text>
          </View>
          <View className="flex flex-row justify-between mt-2 gap-x-4">
            <Text className="text-white opacity-80 font-bold text-xs ">
              Rosa Doe
            </Text>
            <Text className="text-white opacity-80 font-bold text-xs">
              12.02
            </Text>
          </View>
        </View>
      )}
      {owner === "self" && type !== "nft" && (
        <LinearGradient
          colors={["#4A1C85", "#191FAB"]}
          className="w-auto flex px-2 py-2 rounded-md min-w-min    max-w-[320px]"
        >
          <Text className="text-white">{message}</Text>
          <View className="flex flex-row  mt-2 gap-x-4 justify-end">
            <Text className="text-white opacity-80 font-bold text-xs">
              12.02
            </Text>
          </View>
        </LinearGradient>
      )}
      {type === "nft" && (
        <View className="h-[80px] items-end">
          <Image source={require("../assets/nft.png")} />
          <Text className="text-white text-xs">12.05</Text>
        </View>
      )}
    </View>
  );
};

export default Home;
