import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from "react-native";
import { Link } from "expo-router";
import { Screen } from "../../src/components/Screen";
import { Brand } from "../../src/components/Brand";
import { colors } from "../../src/theme/colors";

export default function RegisterScreen() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function explainDemo() {
    Alert.alert("Registration not connected", "Email verification, secure password handling and NOVA ID generation will be implemented after the UI foundation. This screen does not create an account.");
  }

  return (
    <Screen scroll>
      <Brand />
      <Text style={styles.title}>Create your account</Text>
      <Text style={styles.subtitle}>Your NOVA identity starts here.</Text>
      <Text style={styles.label}>USERNAME</Text>
      <TextInput value={username} onChangeText={setUsername} placeholder="Choose a username" placeholderTextColor={colors.subtle} autoCapitalize="none" style={styles.input} />
      <Text style={styles.label}>EMAIL ADDRESS</Text>
      <TextInput value={email} onChangeText={setEmail} placeholder="you@example.com" placeholderTextColor={colors.subtle} autoCapitalize="none" keyboardType="email-address" style={styles.input} />
      <Text style={styles.label}>PASSWORD</Text>
      <TextInput value={password} onChangeText={setPassword} placeholder="Create a strong password" placeholderTextColor={colors.subtle} secureTextEntry style={styles.input} />
      <Pressable style={styles.button} onPress={explainDemo}><Text style={styles.buttonText}>Continue</Text></Pressable>
      <Text style={styles.note}>Your NOVA ID will be assigned after successful account verification.</Text>
      <View style={styles.footer}><Text style={styles.muted}>Already registered? </Text><Link href="/(auth)/login" style={styles.link}>Sign in</Link></View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  title: { color: colors.text, fontSize: 30, fontWeight: "800", marginTop: 42 },
  subtitle: { color: colors.muted, marginTop: 8, marginBottom: 26 },
  label: { color: colors.muted, fontSize: 10, letterSpacing: 1.4, fontWeight: "800", marginBottom: 9, marginTop: 18 },
  input: { backgroundColor: colors.surface, borderColor: colors.border, borderWidth: 1, borderRadius: 13, padding: 16, color: colors.text, fontSize: 15 },
  button: { backgroundColor: colors.accent, borderRadius: 14, padding: 17, alignItems: "center", marginTop: 28 },
  buttonText: { color: "#06101E", fontWeight: "800" },
  note: { color: colors.subtle, fontSize: 11, lineHeight: 17, textAlign: "center", marginTop: 14 },
  footer: { flexDirection: "row", justifyContent: "center", marginTop: 30 },
  muted: { color: colors.muted },
  link: { color: colors.accent, fontWeight: "700" }
});
