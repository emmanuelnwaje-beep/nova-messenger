import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export function Brand() {
  return (
    <View style={styles.row}>
      <View style={styles.mark}><Text style={styles.symbol}>✦</Text></View>
      <Text style={styles.word}>NOVA</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", gap: 9 },
  mark: { width: 29, height: 29, borderRadius: 10, backgroundColor: colors.surfaceRaised, borderWidth: 1, borderColor: colors.border, alignItems: "center", justifyContent: "center" },
  symbol: { color: colors.accent, fontSize: 16 },
  word: { color: colors.text, fontSize: 16, fontWeight: "900", letterSpacing: 3 }
});
