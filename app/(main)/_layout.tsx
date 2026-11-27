import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../src/theme/colors";

export default function MainLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.border, height: 66, paddingTop: 8, paddingBottom: 8 },
      tabBarActiveTintColor: colors.accent,
      tabBarInactiveTintColor: colors.subtle
    }}>
      <Tabs.Screen name="chats" options={{ title: "Chats", tabBarIcon: ({ color, size }) => <Ionicons name="chatbubble-ellipses-outline" color={color} size={size} /> }} />
      <Tabs.Screen name="contacts" options={{ title: "Contacts", tabBarIcon: ({ color, size }) => <Ionicons name="people-outline" color={color} size={size} /> }} />
      <Tabs.Screen name="profile" options={{ title: "Profile", tabBarIcon: ({ color, size }) => <Ionicons name="person-circle-outline" color={color} size={size} /> }} />
    </Tabs>
  );
}
