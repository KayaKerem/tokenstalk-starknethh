import { TextInput, Text, View, Image, Button } from "react-native";

const Border = require("../app/assets/input-border.png");

const Input = (props) => {
  return (
    <View className="flex  gap-y-2 mt-6">
      <Text className="text-white text-left w-full">
        {props.label ?? "Label"}
      </Text>
      <View className="relative h-[48px] ">
        <Image className="w-[295px] absolute left-0" source={Border} />
        <TextInput {...props} className="w-full h-full px-4 text-white" />
      </View>
    </View>
  );
};

export default Input;
