import InitialLayout from "@/components/InitialLayout";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      {/* <Slot> */}
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
          {/* <Stack screenOptions={{ headerShown: false }}></Stack> */}

          <InitialLayout/>
        </SafeAreaView>
      </SafeAreaProvider>
      {/* </Slot> */}
    </ClerkProvider>
  );
}
