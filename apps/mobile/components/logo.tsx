import { View, Text, StyleSheet, Image } from 'react-native';

export default function Logo() {
    return (
        <View style={styles.logoWrapper}>
            <Image source={require("@/assets/images/logo.png")} style={styles.image} />
            <View style={styles.textTitleWrapper}>
                <Text style={styles.textTitle1}>KOM</Text>
                <Text style={styles.textTitle2}>PLEX</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    logoWrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },
    textTitle1: {
        fontSize: 18,
        fontWeight: 800,
        color: "#5045e6",
        flexDirection: "row",
        alignItems: "center",
    },
    textTitleWrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    textTitle2: {
        fontSize: 18,
        fontWeight: 800,
        color: "#111827",
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        width: 24,
        height: 24,
    },
});
