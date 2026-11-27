import { View, Text, TextInput, StyleSheet } from "react-native";
import { Screen } from "../../src/components/Screen";
import { colors } from "../../src/theme/colors";

export default function ContactsScreen() {
  return (
    <Screen>
      <Text style={styles.title}>Find people</Text>
      <Text style={styles.subtitle}>Connect using a NOVA ID or username.</Text>
      <TextInput placeholder="Enter NOVA ID or username" placeholderTextColor={colors.subtle} style={styles.input} />
      <View style={styles.card}><Text style={styles.icon}>✦</Text><Text style={styles.cardTitle}>Your network starts here</Text><Text style={styles.cardText}>When account search and contact requests are connected, you will be able to find people without sharing your phone number.</Text></View>
      <Text style={styles.note}>Contact discovery is a planned feature, not active in this starter.</Text>
    </Screen>
  );
}
const styles = StyleSheet.create({
  title: { color: colors.text, fontSize: 30, fontWeight: "800", marginTop: 12 },
  subtitle: { color: colors.muted, marginTop: 8, marginBottom: 25, fontSize: 13 },
  input: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: 13, padding: 15, color: colors.text },
  card: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: 20, padding: 24, alignItems: "center", marginTop: 42 },
  icon: { color: colors.accent, fontSize: 35, marginBottom: 15 },
  cardTitle: { color: colors.text, fontWeight: "800", fontSize: 17 },
  cardText: { color: colors.muted, textAlign: "center", lineHeight: 21, fontSize: 12, marginTop: 10 },
  note: { color: colors.subtle, fontSize: 10, textAlign: "center", marginTop: 18 }
});
