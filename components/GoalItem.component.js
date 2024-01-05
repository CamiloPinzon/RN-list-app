import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ children, onDeleteItem, id }) => {
	return (
		<View style={styles.goalItem}>
			<Pressable
				android_ripple={{ color: "red" }}
				onPress={() => onDeleteItem(id)}
				style={({ pressed }) => pressed && styles.pressedItem}
			>
				<Text style={styles.goalItemText}>{children}</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: "#5E0ACC",
	},
	pressedItem: {
		opacity: 0.5,
	},
	goalItemText: {
		color: "white",
		padding: 8,
	},
});

export default GoalItem;
