import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import { Screen } from "../../src/components/Screen";
import { colors } from "../../src/theme/colors";

const previews = [
  { name: "NOVA Updates", message: "Your private space is taking shape.", time: "Now", initials: "N", unread: "1" },
  { name: "Your conversations", message: "Your chats will appear here once messaging is connected.", time: "—", initials: "✦", unread: "" }
];

export default function ChatsScreen() {
  return (
    <Screen>
      <View style={styles.header}>
        <View><Text style={styles.kicker}>YOUR PRIVATE NETWORK</Text><Text style={styles.title}>Messages</Text></View>
        <View style={styles.avatar}><Text style={styles.avatarText}>N</Text></View>
      </View>
      <TextInput placeholder="Search conversations" placeholderTextColor={colors.subtle} style={styles.search} />
      <Text style={styles.section}>RECENT</Text>
      <FlatList data={previews} keyExtractor={(item) => item.name} renderItem={({ item }) => (
        <View style={styles.item}>
          <View style={styles.person}><Text style={styles.personText}>{item.initials}</Text></View>
          <View style={styles.message}><Text style={styles.name}>{item.name}</Text><Text style={styles.preview}>{item.message}</Text></View>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      )} />
      <Text style={styles.disclaimer}>Preview interface · Live messaging is not connected yet.</Text>
    </Screen>
  );
}
const styles = StyleSheet.create({
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 12, marginBottom: 24 },
  kicker: { color: colors.accent, fontSize: 9, letterSpacing: 1.6, fontWeight: "800" },
  title: { color: colors.text, fontSize: 32, fontWeight: "800", marginTop: 5 },
  avatar: { width: 42, height: 42, borderRadius: 21, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, alignItems: "center", justifyContent: "center" },
  avatarText: { color: colors.accent, fontWeight: "800", fontSize: 17 },
  search: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: 13, padding: 14, color: colors.text },
  section: { color: colors.subtle, fontSize: 10, fontWeight: "800", letterSpacing: 1.5, marginTop: 30, marginBottom: 14 },
  item: { flexDirection: "row", alignItems: "center", paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: colors.border, gap: 12 },
  person: { width: 48, height: 48, borderRadius: 17, backgroundColor: colors.surface, alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: colors.border },
  personText: { color: colors.accent, fontWeight: "800", fontSize: 18 },
  message: { flex: 1, gap: 5 },
  name: { color: colors.text, fontWeight: "700", fontSize: 14 },
  preview: { color: colors.muted, fontSize: 11, lineHeight: 16 },
  time: { color: colors.subtle, fontSize: 10 },
  disclaimer: { color: colors.subtle, textAlign: "center", fontSize: 10, marginTop: 20 }
});
