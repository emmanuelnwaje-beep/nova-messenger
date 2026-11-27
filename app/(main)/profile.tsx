import { View, Text, StyleSheet } from "react-native";
import { Screen } from "../../src/components/Screen";
import { colors } from "../../src/theme/colors";

export default function ProfileScreen() {
  return (
    <Screen>
      <Text style={styles.title}>Your profile</Text>
      <View style={styles.profile}>
        <View style={styles.avatar}><Text style={styles.avatarText}>N</Text></View>
        <Text style={styles.name}>NOVA Member</Text>
        <Text style={styles.handle}>Set up your account to claim your identity</Text>
      </View>
      <View style={styles.idCard}>
        <Text style={styles.label}>YOUR NOVA ID</Text>
        <Text style={styles.id}>Assigned after verification</Text>
        <Text style={styles.help}>Your unique ID will help other people find you on NOVA.</Text>
      </View>
      <Text style={styles.disclaimer}>Profile details and NOVA ID assignment are not connected yet.</Text>
    </Screen>
  );
}
const styles = StyleSheet.create({
  title: { color: colors.text, fontSize: 30, fontWeight: "800", marginTop: 12 },
  profile: { alignItems: "center", marginTop: 38, marginBottom: 32 },
  avatar: { width: 82, height: 82, borderRadius: 28, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, alignItems: "center", justifyContent: "center" },
  avatarText: { color: colors.accent, fontSize: 30, fontWeight: "800" },
  name: { color: colors.text, fontWeight: "800", fontSize: 18, marginTop: 15 },
  handle: { color: colors.muted, fontSize: 11, marginTop: 6 },
  idCard: { backgroundColor: colors.surface, borderColor: colors.border, borderWidth: 1, borderRadius: 18, padding: 20 },
  label: { color: colors.accent, fontSize: 9, letterSpacing: 1.5, fontWeight: "800" },
  id: { color: colors.text, fontWeight: "800", fontSize: 18, marginTop: 12 },
  help: { color: colors.muted, fontSize: 11, lineHeight: 17, marginTop: 10 },
  disclaimer: { color: colors.subtle, fontSize: 10, textAlign: "center", marginTop: 18 }
});
