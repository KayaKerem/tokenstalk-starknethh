import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Input from "../../components/input";
import { TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import Avatar from "../assets/avatars/Avatar";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";

const Home = () => {
  const collections = [{}];
  const [modal, setModal] = useState({
    show: false,
    nft: null,
  });

  const [avatarModal, setAvatarmodal] = useState({
    show: false,
  });

  const [userData, setUserData] = useState(null);
  const getUserFromLocal = async () => {
    const result = await AsyncStorage.getItem("user");
    const user = JSON.parse(result);
    setUserData(user);
  };
  useEffect(() => {
    getUserFromLocal();
  }, []);
  return (
    <View className="flex-1 ">
      <View className="flex items-center px-6 w-[295px] mx-auto mt-[80px]">
        <TouchableOpacity>
          <LinearGradient
            className="px-3 py-4 w-[105px] h-[105px] rounded-full flex items-center justify-center"
            colors={["#4A1C85", "#191FAB"]}
          >
            {!userData?.avatar_url && (
              <Image source={require("../assets/user-icon.png")} />
            )}
            <Image
              source={{
                uri: Constants.expoConfig.extra.apiUrl + userData?.avatar_url,
              }}
            />
          </LinearGradient>
        </TouchableOpacity>

        <Text className="text-white mt-2 font-bold">{userData?.user_name}</Text>
      </View>
      <View className="bg-[#3f3c65] w-full mt-4 px-4 py-4">
        <Text className="text-white font-bold mb-2">Wallet Address</Text>
        <Text className="text-white">{userData?.wallet_address}</Text>
      </View>
      <View className="px-2">
        <Text className="font-extrabold text-white mt-4 px-2 text-[15px]">
          MY NFT'S
        </Text>
      </View>
      <ScrollView className="overflow-hidden flex-1">
        {collections.map((collection) => (
          <Collection
            onNftPress={(nft) => {
              setModal({ show: true, nft });
            }}
            {...collection}
          />
        ))}
        {collections.map((collection) => (
          <Collection {...collection} />
        ))}
        {collections.map((collection) => (
          <Collection {...collection} />
        ))}
        {collections.map((collection) => (
          <Collection {...collection} />
        ))}
        {collections.map((collection) => (
          <Collection {...collection} />
        ))}
        {collections.map((collection) => (
          <Collection {...collection} />
        ))}
        {collections.map((collection) => (
          <Collection {...collection} />
        ))}
        {collections.map((collection) => (
          <Collection {...collection} />
        ))}
      </ScrollView>
      {avatarModal.show && (
        <View className="absolute   w-screen h-screen -top-12 left-0 flex items-center justify-center ">
          <View className=" bg-[#353449] w-4/5 h-[300px] z-30 absolute rounded-md px-2 py-6">
            <TouchableOpacity
              onPress={() => {
                setModal((modal) => ({ ...modal, show: false }));
              }}
              className="self-center"
            >
              <Image source={require("../assets/close.png")} />
            </TouchableOpacity>
            <Image
              source={require("../assets/nft.png")}
              className="w-full h-[120px] mt-4"
            />
            <Text className="text-white mt-2">
              {modal.nft?.name ?? "Monkeys"}
            </Text>
          </View>
          <View className="bg-[#4e4b60] opacity-10 w-screen h-screen"></View>
        </View>
      )}
      {avatarModal.show && <AvatarModal />}
      {modal.show && (
        <View className="absolute   w-screen h-screen -top-12 left-0 flex items-center justify-center ">
          <View className=" bg-[#353449] w-4/5 h-[300px] z-30 absolute rounded-md px-2 py-6">
            <TouchableOpacity
              onPress={() => {
                setModal((modal) => ({ ...modal, show: false }));
              }}
              className="self-center"
            >
              <Image source={require("../assets/close.png")} />
            </TouchableOpacity>
            <Image
              source={require("../assets/nft.png")}
              className="w-full h-[120px] mt-4"
            />
            <Text className="text-white mt-2">
              {modal.nft?.name ?? "Monkeys"}
            </Text>
          </View>
          <View className="bg-[#4e4b60] opacity-10 w-screen h-screen"></View>
        </View>
      )}
    </View>
  );
};

const AvatarModal = () => {
  const [avatars, setAvatars] = useState([]);
  useEffect(() => {
    fetch(Constants.expoConfig?.extra?.apiUrl + "user/avatars")
      .then((res) => {
        res.json();
      })
      .then((res) => {
        console.log(res);
        setAvatars(res);
      });
  }, []);
  return (
    <View className="absolute   w-screen h-screen -top-12 left-0 flex items-center justify-center ">
      <View className=" bg-[#353449] w-4/5 h-[300px] z-30 absolute rounded-md px-2 py-6">
        <TouchableOpacity
          onPress={() => {
            setModal((modal) => ({ ...modal, show: false }));
          }}
          className="self-center"
        >
          <Image source={require("../assets/close.png")} />
        </TouchableOpacity>
        <Image
          source={require("../assets/nft.png")}
          className="w-full h-[120px] mt-4"
        />
        <Text className="text-white mt-2">{modal.nft?.name ?? "Monkeys"}</Text>
      </View>
      <View className="bg-[#4e4b60] opacity-10 w-screen h-screen"></View>
    </View>
  );
};

const Collection = ({ label, nfts, collection_name }) => {
  return (
    <View className="bg-[#3f3c65] w-full py-2 px-2 mt-3">
      <Text className="text-white font-bold">
        {collection_name ?? "Collection Name"}
      </Text>
      <ScrollView horizontal={true} className="flex flex-row  py-4 ">
        <ImageWrapper />
        <ImageWrapper />
        <ImageWrapper />
        <ImageWrapper />
        <ImageWrapper />
        <ImageWrapper />
      </ScrollView>
    </View>
  );
};

const ImageWrapper = ({ nft = {} }) => {
  return (
    <View className="bg-[#1e1d2c] ml-4 px-2 py-2">
      <Image source={require("../assets/nft.png")} className="max-w-[120px]" />
      <Text className="text-white">{nft.name ?? "Name"}</Text>
    </View>
  );
};

export default Home;
