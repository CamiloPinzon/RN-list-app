import { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

const GoalInput = ({ onAddGoal }) => {
	const [enteredGoalText, setEnteredGoalText] = useState("");

	const goalInputHandler = (enteredText) => {
		setEnteredGoalText(enteredText);
	};

	const addGoalHandler = () => {
		onAddGoal(enteredGoalText);
		setEnteredGoalText("");
	};
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.textInput}
				placeholder="Your course goal!"
				onChangeText={goalInputHandler}
				value={enteredGoalText}
			/>
			<Button title="Add your goal" onPress={addGoalHandler} />
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		margingBottom: 20,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
		flex: 1,
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#CCC",
		width: "60%",
		marginRight: 8,
		paddingLeft: 8,
	},
});

export default GoalInput;
