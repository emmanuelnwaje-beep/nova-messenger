import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { colors } from "../../src/theme/colors";
import { Screen } from "../../src/components/Screen";
import { Brand } from "../../src/components/Brand";

export default function WelcomeScreen() {
  return (
    <Screen>
      <View style={styles.hero}>
        <Brand />
        <View style={styles.orbit}>
          <Text style={styles.orbitIcon}>✦</Text>
        </View>
        <Text style={styles.title}>A new way{`\n`}to connect.</Text>
        <Text style={styles.subtitle}>
          Your conversations, your identity, your space. Welcome to NOVA.
        </Text>
      </View>
      <View style={styles.actions}>
        <Link href="/(auth)/register" asChild>
          <Pressable style={styles.primary}><Text style={styles.primaryText}>Create account</Text></Pressable>
        </Link>
        <Link href="/(auth)/login" asChild>
          <Pressable style={styles.secondary}><Text style={styles.secondaryText}>I already have an account</Text></Pressable>
        </Link>
        <Text style={styles.footnote}>Private communication starts with thoughtful design.</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: { flex: 1, justifyContent: "center", alignItems: "center", paddingTop: 30 },
  orbit: { width: 112, height: 112, borderRadius: 56, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surface, alignItems: "center", justifyContent: "center", marginTop: 58, marginBottom: 34 },
  orbitIcon: { fontSize: 46, color: colors.accent },
  title: { color: colors.text, fontSize: 42, lineHeight: 48, fontWeight: "800", textAlign: "center", letterSpacing: -1.5 },
  subtitle: { color: colors.muted, fontSize: 15, lineHeight: 23, textAlign: "center", maxWidth: 290, marginTop: 16 },
  actions: { gap: 12, paddingBottom: 18 },
  primary: { backgroundColor: colors.accent, padding: 17, borderRadius: 16, alignItems: "center" },
  primaryText: { color: "#06101E", fontWeight: "800", fontSize: 15 },
  secondary: { borderWidth: 1, borderColor: colors.border, padding: 16, borderRadius: 16, alignItems: "center" },
  secondaryText: { color: colors.text, fontWeight: "700", fontSize: 14 },
  footnote: { color: colors.subtle, fontSize: 11, textAlign: "center", marginTop: 8 }
});
