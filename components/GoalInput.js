import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

export default function GoalInput({ addGoalHandler }) {
  const [enteredGoal, setenteredGoal] = useState('');

  function goalInputHandler(enteredText) {
    console.log(`enteredTEXT`, enteredText);
    setenteredGoal(enteredText);
    console.log(`enteredGoal`, enteredGoal);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="ADD GOAL"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={() => addGoalHandler(enteredGoal)} />
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderWidth: 2,
    borderColor: 'green',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '75%',
  },
});
