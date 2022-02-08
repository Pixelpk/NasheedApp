import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        backgroundColor: "grey"
    },
    miniPlayer: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        width: width,
        height: 50,
        backgroundColor: "#2c3e50"
    },
    root: {
        flex: 1
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "transparent",
        width: width,
        height: 50
    },
    button: {
        padding: 16
    },
    title: {
        color: "#8e44ad",
        padding: 16
    },
    downIcons: {
        width: 25,
        height: 25
    },
    cover: {
        marginVertical: 16,
        width: width - 32,
        height: width - 32
    },
    metadata: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    song: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#8e44ad"
    },
    artist: {
        color: "#8e44ad"
    },
    slider: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        width: width - 32,
        borderRadius: 2,
        height: 4,
        marginVertical: 16
    },
    controls: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    }
});
